'use client';

import React, { useState, useMemo } from 'react';
import {
  SensoryMacroCategory,
  SensorySubcategory,
  SensoryDescriptor,
  SensoryStandardType,
} from '@/lib/data/sensoryWheelData';
import { RotateCw, RotateCcw } from "lucide-react";

interface InteractiveSunburstWheelProps {
  data: SensoryMacroCategory[];
  standardType: SensoryStandardType;
  selectedDescriptor: SensoryDescriptor | null;
  selectedCategory: SensoryMacroCategory | null;
  onSelectDescriptor: (descriptor: SensoryDescriptor, category: SensoryMacroCategory) => void;
  onSelectCategory: (category: SensoryMacroCategory) => void;
}

interface FlattenedSegment {
  type: 'macro' | 'sub' | 'descriptor';
  id: string;
  name: string;
  nameEn: string;
  color: string;
  startAngle: number;
  endAngle: number;
  innerRadius: number;
  outerRadius: number;
  macro: SensoryMacroCategory;
  sub?: SensorySubcategory;
  descriptor?: SensoryDescriptor;
}

// Convert degrees to cartesian coordinates
function polarToCartesian(cx: number, cy: number, radius: number, angleInDegrees: number) {
  const angleInRadians = ((angleInDegrees - 90) * Math.PI) / 180.0;
  return {
    x: cx + radius * Math.cos(angleInRadians),
    y: cy + radius * Math.sin(angleInRadians),
  };
}

// Generate SVG Path for an Annular Wedge (Donut Slice)
function createSvgArc(
  cx: number,
  cy: number,
  innerRadius: number,
  outerRadius: number,
  startAngle: number,
  endAngle: number
): string {
  // Prevent full 360 degree degeneracy
  const angleDiff = Math.min(359.99, endAngle - startAngle);
  const effectiveEndAngle = startAngle + angleDiff;

  const startOuter = polarToCartesian(cx, cy, outerRadius, startAngle);
  const endOuter = polarToCartesian(cx, cy, outerRadius, effectiveEndAngle);
  const startInner = polarToCartesian(cx, cy, innerRadius, startAngle);
  const endInner = polarToCartesian(cx, cy, innerRadius, effectiveEndAngle);

  const largeArcFlag = angleDiff > 180 ? 1 : 0;

  return [
    `M ${startOuter.x} ${startOuter.y}`,
    `A ${outerRadius} ${outerRadius} 0 ${largeArcFlag} 1 ${endOuter.x} ${endOuter.y}`,
    `L ${endInner.x} ${endInner.y}`,
    `A ${innerRadius} ${innerRadius} 0 ${largeArcFlag} 0 ${startInner.x} ${startInner.y}`,
    'Z',
  ].join(' ');
}

export const InteractiveSunburstWheel: React.FC<InteractiveSunburstWheelProps> = ({
  data,
  standardType,
  selectedDescriptor,
  selectedCategory,
  onSelectDescriptor,
  onSelectCategory,
}) => {
  const [rotationAngle, setRotationAngle] = useState(0);
  const [hoveredSegment, setHoveredSegment] = useState<FlattenedSegment | null>(null);

  const CX = 320;
  const CY = 320;
  const R0 = 62;  // Center Hub radius
  const R1 = 136; // Macro outer radius
  const R2 = 210; // Subcategory outer radius
  const R3 = 302; // Descriptor outer radius

  // Calculate layout geometry based on leaf descriptors count
  const segments = useMemo(() => {
    // 1. Count total descriptors
    let totalDescriptors = 0;
    data.forEach((macro) => {
      macro.subcategories.forEach((sub) => {
        totalDescriptors += Math.max(1, sub.descriptors.length);
      });
    });

    const anglePerLeaf = 360 / Math.max(1, totalDescriptors);
    const result: FlattenedSegment[] = [];

    let currentLeafIndex = 0;

    data.forEach((macro) => {
      // Calculate macro start and end angles
      const macroStartAngle = currentLeafIndex * anglePerLeaf;
      let macroLeafCount = 0;

      macro.subcategories.forEach((sub) => {
        macroLeafCount += Math.max(1, sub.descriptors.length);
      });

      const macroEndAngle = macroStartAngle + macroLeafCount * anglePerLeaf;

      // Add Macro Segment (Ring 1)
      result.push({
        type: 'macro',
        id: `macro-${macro.id}`,
        name: macro.name,
        nameEn: macro.nameEn,
        color: macro.color,
        startAngle: macroStartAngle,
        endAngle: macroEndAngle,
        innerRadius: R0 + 2,
        outerRadius: R1,
        macro,
      });

      // Subcategories (Ring 2)
      let subCurrentIndex = currentLeafIndex;
      macro.subcategories.forEach((sub) => {
        const subLeafCount = Math.max(1, sub.descriptors.length);
        const subStartAngle = subCurrentIndex * anglePerLeaf;
        const subEndAngle = subStartAngle + subLeafCount * anglePerLeaf;

        result.push({
          type: 'sub',
          id: `sub-${sub.id}`,
          name: sub.name,
          nameEn: sub.nameEn,
          color: sub.color || macro.color,
          startAngle: subStartAngle,
          endAngle: subEndAngle,
          innerRadius: R1 + 2,
          outerRadius: R2,
          macro,
          sub,
        });

        // Descriptors (Ring 3)
        sub.descriptors.forEach((desc, dIdx) => {
          const descStartAngle = (subCurrentIndex + dIdx) * anglePerLeaf;
          const descEndAngle = descStartAngle + anglePerLeaf;

          result.push({
            type: 'descriptor',
            id: `desc-${desc.id}`,
            name: desc.name,
            nameEn: desc.nameEn,
            color: desc.color || sub.color || macro.color,
            startAngle: descStartAngle,
            endAngle: descEndAngle,
            innerRadius: R2 + 2,
            outerRadius: R3,
            macro,
            sub,
            descriptor: desc,
          });
        });

        subCurrentIndex += subLeafCount;
      });

      currentLeafIndex += macroLeafCount;
    });

    return result;
  }, [data]);

  // Rotate handlers
  const handleRotate = (delta: number) => {
    setRotationAngle((prev) => (prev + delta + 360) % 360);
  };

  const handleResetRotation = () => {
    setRotationAngle(0);
  };

  return (
    <div className="flex flex-col items-center space-y-4">
      {/* Top Interactive Tooltip / Status Display */}
      <div className="w-full bg-paper-100/90 border border-paper-300 rounded-xl p-3 flex flex-col sm:flex-row items-center justify-between gap-3 shadow-2xs">
        <div className="flex items-center gap-2.5 text-xs text-roast-800">
          <div className="w-6 h-6 rounded-full bg-cherry-700 text-white flex items-center justify-center font-bold text-[10px] shrink-0">
            {standardType === 'international' ? 'SCA' : 'ID'}
          </div>
          <div>
            <span className="font-mono text-[9px] uppercase tracking-wider text-roast-500 font-bold block">
              {hoveredSegment
                ? `SEGMENT TERSOROT (${hoveredSegment.type.toUpperCase()}):`
                : selectedDescriptor
                ? 'DESKRIPTOR TERPILIH:'
                : 'STATUS INTERAKSI:'}
            </span>
            <div className="font-serif font-bold text-sm text-roast-950 flex items-center gap-1.5">
              <span>
                {hoveredSegment
                  ? hoveredSegment.name
                  : selectedDescriptor
                  ? selectedDescriptor.name
                  : 'Arahkan kursor atau sentuh irisan roda rasa'}
              </span>
              {hoveredSegment?.descriptor && (
                <span className="font-mono text-[10px] text-cherry-700 font-normal">
                  ({hoveredSegment.descriptor.originMatch.split('(')[0].trim()})
                </span>
              )}
            </div>
          </div>
        </div>

        {/* Rotate Wheel Controls */}
        <div className="flex items-center gap-1.5 shrink-0 bg-white px-2 py-1 rounded-lg border border-paper-300">
          <span className="font-mono text-[10px] text-roast-500 font-semibold mr-1">
            Putar Roda:
          </span>
          <button
            type="button"
            onClick={() => handleRotate(-45)}
            className="p-1.5 rounded hover:bg-paper-100 text-roast-700 hover:text-roast-950 transition-all duration-160 ease-out active:scale-[0.97]"
            title="Putar Berlawanan Jarum Jam (-45°)"
          >
            <RotateCcw className="w-3.5 h-3.5" />
          </button>
          <button
            type="button"
            onClick={handleResetRotation}
            className="px-2 py-1 text-[10px] font-mono rounded hover:bg-paper-100 text-roast-600 font-bold transition-all duration-160 ease-out active:scale-[0.97]"
            title="Reset Sudut Putar (0°)"
          >
            {rotationAngle}°
          </button>
          <button
            type="button"
            onClick={() => handleRotate(45)}
            className="p-1.5 rounded hover:bg-paper-100 text-roast-700 hover:text-roast-950 transition-all duration-160 ease-out active:scale-[0.97]"
            title="Putar Searah Jarum Jam (+45°)"
          >
            <RotateCw className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* SVG SUNBURST FLAVOR WHEEL */}
      <div className="relative w-full max-w-[580px] sm:max-w-[620px] aspect-square flex items-center justify-center p-2 select-none drop-shadow-md">
        <svg
          viewBox="0 0 640 640"
          className="w-full h-full transition-transform duration-250 ease-out-strong will-change-transform"
          style={{ transform: `rotate(${rotationAngle}deg)` }}
        >
          <defs>
            <filter id="wheel-glow" x="-20%" y="-20%" width="140%" height="140%">
              <feDropShadow dx="0" dy="2" stdDeviation="3" floodOpacity="0.4" />
            </filter>
            <radialGradient id="center-grad" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#2A1B18" />
              <stop offset="100%" stopColor="#140D0C" />
            </radialGradient>
          </defs>

          {/* 1. SECTOR SLICES */}
          <g>
            {segments.map((seg) => {
              const isHovered = hoveredSegment?.id === seg.id;
              const isDescriptorSelected =
                seg.type === 'descriptor' && selectedDescriptor?.id === seg.descriptor?.id;
              const isMacroActive =
                (seg.type === 'macro' && selectedCategory?.id === seg.macro.id) ||
                (selectedDescriptor && seg.macro.id === selectedDescriptor.id);

              const pathD = createSvgArc(
                CX,
                CY,
                seg.innerRadius,
                seg.outerRadius,
                seg.startAngle,
                seg.endAngle
              );

              // Calculate angle center for text rotation
              const midAngle = (seg.startAngle + seg.endAngle) / 2;
              const midRadius = (seg.innerRadius + seg.outerRadius) / 2;
              const textPos = polarToCartesian(CX, CY, midRadius, midAngle);
              const angleSpan = seg.endAngle - seg.startAngle;

              // Text rotation adjustments
              let textRotate = midAngle - 90;
              if (midAngle > 90 && midAngle < 270) {
                textRotate += 180;
              }

              // Determine fill opacity and borders
              let fillOpacity = 0.92;
              let strokeColor = '#FFFFFF';
              let strokeWidth = 1;

              if (isDescriptorSelected) {
                fillOpacity = 1;
                strokeColor = '#FEF08A';
                strokeWidth = 2.5;
              } else if (isHovered) {
                fillOpacity = 1;
                strokeColor = '#FFFFFF';
                strokeWidth = 2;
              } else if (isMacroActive) {
                fillOpacity = 1;
                strokeColor = '#E6D7B8';
                strokeWidth = 1.5;
              }

              return (
                <g
                  key={seg.id}
                  className="cursor-pointer transition-opacity duration-150"
                  onMouseEnter={() => setHoveredSegment(seg)}
                  onMouseLeave={() => setHoveredSegment(null)}
                  onClick={() => {
                    if (seg.type === 'descriptor' && seg.descriptor) {
                      onSelectDescriptor(seg.descriptor, seg.macro);
                    } else if (seg.type === 'macro') {
                      onSelectCategory(seg.macro);
                      if (seg.macro.subcategories[0]?.descriptors[0]) {
                        onSelectDescriptor(seg.macro.subcategories[0].descriptors[0], seg.macro);
                      }
                    } else if (seg.type === 'sub' && seg.sub?.descriptors[0]) {
                      onSelectDescriptor(seg.sub.descriptors[0], seg.macro);
                    }
                  }}
                >
                  <path
                    d={pathD}
                    fill={seg.color}
                    fillOpacity={fillOpacity}
                    stroke={strokeColor}
                    strokeWidth={strokeWidth}
                    className="hover:brightness-110 active:brightness-95 transition-all"
                  />

                  {/* Text Label within the slice if angle is large enough */}
                  {angleSpan > 4.5 && (
                    <text
                      x={textPos.x}
                      y={textPos.y}
                      transform={`rotate(${textRotate}, ${textPos.x}, ${textPos.y})`}
                      textAnchor="middle"
                      dominantBaseline="central"
                      fill="#FFFFFF"
                      fontSize={
                        seg.type === 'macro'
                          ? angleSpan > 18 ? 10 : 8
                          : seg.type === 'sub'
                          ? angleSpan > 14 ? 8.5 : 7
                          : angleSpan > 7 ? 7 : 6
                      }
                      fontWeight={seg.type === 'macro' ? 700 : seg.type === 'sub' ? 600 : 500}
                      fontFamily="system-ui, sans-serif"
                      pointerEvents="none"
                      className="drop-shadow-xs"
                    >
                      {seg.name.length > (angleSpan > 15 ? 16 : 10)
                        ? seg.name.slice(0, angleSpan > 15 ? 14 : 9) + '…'
                        : seg.name}
                    </text>
                  )}
                </g>
              );
            })}
          </g>

          {/* 2. CENTER HUB CIRCLE */}
          <g
            className="cursor-pointer"
            onClick={() => {
              // Select first item or reset view
              if (data[0]?.subcategories[0]?.descriptors[0]) {
                onSelectDescriptor(data[0].subcategories[0].descriptors[0], data[0]);
              }
              handleResetRotation();
            }}
          >
            <circle
              cx={CX}
              cy={CY}
              r={R0}
              fill="url(#center-grad)"
              stroke="#D4AF37"
              strokeWidth="2.5"
              className="drop-shadow-lg hover:brightness-125 transition-all"
            />
            {/* Center Hub Label */}
            <text
              x={CX}
              y={CY - 12}
              textAnchor="middle"
              fill="#D4AF37"
              fontSize="8"
              fontFamily="monospace"
              fontWeight="bold"
              letterSpacing="1.5"
            >
              CHERRYEDU
            </text>
            <text
              x={CX}
              y={CY + 3}
              textAnchor="middle"
              fill="#FFFFFF"
              fontSize="9.5"
              fontFamily="Georgia, serif"
              fontWeight="bold"
            >
              {standardType === 'international' ? 'SCA WHEEL' : 'RODA RASA ID'}
            </text>
            <text
              x={CX}
              y={CY + 18}
              textAnchor="middle"
              fill="#FDE68A"
              fontSize="7.5"
              fontFamily="monospace"
            >
              [ Klik Reset ]
            </text>
          </g>
        </svg>

        {/* Decorative Compass Guide Rings */}
        <div className="absolute inset-0 pointer-events-none rounded-full border border-paper-300/40" />
      </div>

      {/* Quick Interactive Guide Caption */}
      <p className="text-[11px] font-mono text-roast-500 text-center max-w-lg">
        💡 <strong>Tips Navigasi:</strong> Cincin paling dalam adalah <em>Kategori Makro</em>, cincin tengah adalah <em>Sub-kategori</em>, dan cincin terluar adalah <em>Deskriptor Rasa Spesifik</em>. Sentuh atau klik irisan roda untuk membuka catatan kalibrasi sensorik dan senyawa kimianya.
      </p>
    </div>
  );
};
