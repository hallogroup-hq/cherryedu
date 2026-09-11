'use client';

import { useState } from "react";
import { Save, Upload, Palette, Award, Globe } from "lucide-react";

export default function SettingsAdminPage() {
  const [saved, setSaved] = useState(false);
  const [brandingForm, setBrandingForm] = useState({
    platform_name: 'CherryEdu',
    tagline: 'Specialty Coffee Academy',
    primary_color: '#2C1810',
  });
  const [certForm, setCertForm] = useState({
    signatory_name: 'Fahrul M.W',
    signatory_title: 'Head Roaster & Q Grader',
    institution: 'Cherry Coffee Roastery',
  });
  const [seoForm, setSeoForm] = useState({
    meta_title: 'CherryEdu — Indonesian Specialty Coffee Academy',
    meta_description: 'Edukasi kopi komprehensif dari hulu ke hilir. Dibina oleh Cherry Coffee Roastery.',
    og_image: '',
  });

  const handleSave = async () => {
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  const tabs = [
    { id: 'branding', label: 'Branding', icon: Palette },
    { id: 'certificate', label: 'Sertifikat', icon: Award },
    { id: 'seo', label: 'SEO', icon: Globe },
  ] as const;

  const [activeTab, setActiveTab] = useState<'branding' | 'certificate' | 'seo'>('branding');

  return (
    <div className="max-w-2xl mx-auto space-y-6">
      <div>
        <h1 className="font-serif font-black text-2xl text-roast-950">Settings</h1>
        <p className="text-sm text-roast-500 mt-0.5">Konfigurasi platform CherryEdu</p>
      </div>

      {/* Tab navigation */}
      <div className="flex items-center gap-1 border-b border-paper-200">
        {tabs.map((t) => {
          const Icon = t.icon;
          return (
            <button key={t.id} onClick={() => setActiveTab(t.id)}
              className={`flex items-center gap-1.5 px-4 py-2 font-mono text-xs uppercase tracking-wider font-bold border-b-2 transition-colors ${activeTab === t.id ? 'border-roast-950 text-roast-950' : 'border-transparent text-roast-400 hover:text-roast-700'}`}>
              <Icon className="w-3.5 h-3.5" />
              {t.label}
            </button>
          );
        })}
      </div>

      <div className="bg-white rounded-xl border border-paper-200 p-6 space-y-5">
        {activeTab === 'branding' && (
          <>
            <h2 className="font-mono text-[11px] uppercase tracking-widest text-roast-400 font-bold">Identitas Platform</h2>
            <div className="space-y-4 text-xs">
              <div>
                <label className="block font-mono text-[10px] uppercase tracking-wider text-roast-500 font-bold mb-1.5">Nama Platform</label>
                <input value={brandingForm.platform_name} onChange={(e) => setBrandingForm((f) => ({ ...f, platform_name: e.target.value }))}
                  className="w-full border border-paper-200 rounded-lg px-3 py-2.5 focus:outline-none focus:border-roast-400" />
              </div>
              <div>
                <label className="block font-mono text-[10px] uppercase tracking-wider text-roast-500 font-bold mb-1.5">Tagline</label>
                <input value={brandingForm.tagline} onChange={(e) => setBrandingForm((f) => ({ ...f, tagline: e.target.value }))}
                  className="w-full border border-paper-200 rounded-lg px-3 py-2.5 focus:outline-none focus:border-roast-400" />
              </div>
              <div>
                <label className="block font-mono text-[10px] uppercase tracking-wider text-roast-500 font-bold mb-1.5">Logo</label>
                <div className="border-2 border-dashed border-paper-300 rounded-lg p-4 text-center hover:border-roast-400 transition-colors cursor-pointer">
                  <Upload className="w-5 h-5 text-roast-300 mx-auto mb-1.5" />
                  <p className="text-roast-400 text-xs">Klik untuk upload logo (PNG, SVG)</p>
                </div>
              </div>
              <div>
                <label className="block font-mono text-[10px] uppercase tracking-wider text-roast-500 font-bold mb-1.5">Warna Utama</label>
                <div className="flex items-center gap-2">
                  <input type="color" value={brandingForm.primary_color} onChange={(e) => setBrandingForm((f) => ({ ...f, primary_color: e.target.value }))}
                    className="w-10 h-10 rounded cursor-pointer border border-paper-200" />
                  <input value={brandingForm.primary_color} onChange={(e) => setBrandingForm((f) => ({ ...f, primary_color: e.target.value }))}
                    className="flex-1 border border-paper-200 rounded-lg px-3 py-2.5 focus:outline-none focus:border-roast-400 font-mono" placeholder="#2C1810" />
                </div>
              </div>
            </div>
          </>
        )}

        {activeTab === 'certificate' && (
          <>
            <h2 className="font-mono text-[11px] uppercase tracking-widest text-roast-400 font-bold">Konfigurasi Sertifikat</h2>
            <div className="space-y-4 text-xs">
              <div>
                <label className="block font-mono text-[10px] uppercase tracking-wider text-roast-500 font-bold mb-1.5">Nama Penandatangan</label>
                <input value={certForm.signatory_name} onChange={(e) => setCertForm((f) => ({ ...f, signatory_name: e.target.value }))}
                  className="w-full border border-paper-200 rounded-lg px-3 py-2.5 focus:outline-none focus:border-roast-400" />
              </div>
              <div>
                <label className="block font-mono text-[10px] uppercase tracking-wider text-roast-500 font-bold mb-1.5">Jabatan</label>
                <input value={certForm.signatory_title} onChange={(e) => setCertForm((f) => ({ ...f, signatory_title: e.target.value }))}
                  className="w-full border border-paper-200 rounded-lg px-3 py-2.5 focus:outline-none focus:border-roast-400" />
              </div>
              <div>
                <label className="block font-mono text-[10px] uppercase tracking-wider text-roast-500 font-bold mb-1.5">Institusi</label>
                <input value={certForm.institution} onChange={(e) => setCertForm((f) => ({ ...f, institution: e.target.value }))}
                  className="w-full border border-paper-200 rounded-lg px-3 py-2.5 focus:outline-none focus:border-roast-400" />
              </div>
              <div>
                <label className="block font-mono text-[10px] uppercase tracking-wider text-roast-500 font-bold mb-1.5">Logo di Sertifikat</label>
                <div className="border-2 border-dashed border-paper-300 rounded-lg p-4 text-center hover:border-roast-400 transition-colors cursor-pointer">
                  <Upload className="w-5 h-5 text-roast-300 mx-auto mb-1.5" />
                  <p className="text-roast-400 text-xs">Upload logo untuk sertifikat</p>
                </div>
              </div>

              {/* Preview */}
              <div className="p-4 bg-paper-50 border border-paper-200 rounded-lg">
                <p className="font-mono text-[9px] uppercase tracking-widest text-roast-400 mb-2">Preview Penandatangan</p>
                <div className="text-center">
                  <div className="w-16 border-b border-roast-950 mx-auto mb-1"></div>
                  <p className="font-serif font-bold text-sm text-roast-950">{certForm.signatory_name}</p>
                  <p className="text-[11px] text-roast-500">{certForm.signatory_title}</p>
                  <p className="text-[11px] text-roast-400">{certForm.institution}</p>
                </div>
              </div>
            </div>
          </>
        )}

        {activeTab === 'seo' && (
          <>
            <h2 className="font-mono text-[11px] uppercase tracking-widest text-roast-400 font-bold">SEO & Meta</h2>
            <div className="space-y-4 text-xs">
              <div>
                <label className="block font-mono text-[10px] uppercase tracking-wider text-roast-500 font-bold mb-1.5">Meta Title</label>
                <input value={seoForm.meta_title} onChange={(e) => setSeoForm((f) => ({ ...f, meta_title: e.target.value }))}
                  className="w-full border border-paper-200 rounded-lg px-3 py-2.5 focus:outline-none focus:border-roast-400" />
                <p className="text-[10px] text-roast-400 mt-1">{seoForm.meta_title.length}/60 karakter</p>
              </div>
              <div>
                <label className="block font-mono text-[10px] uppercase tracking-wider text-roast-500 font-bold mb-1.5">Meta Description</label>
                <textarea value={seoForm.meta_description} onChange={(e) => setSeoForm((f) => ({ ...f, meta_description: e.target.value }))}
                  rows={3} className="w-full border border-paper-200 rounded-lg px-3 py-2.5 focus:outline-none focus:border-roast-400 resize-none" />
                <p className="text-[10px] text-roast-400 mt-1">{seoForm.meta_description.length}/160 karakter</p>
              </div>
              <div>
                <label className="block font-mono text-[10px] uppercase tracking-wider text-roast-500 font-bold mb-1.5">OG Image (Social Share)</label>
                <div className="border-2 border-dashed border-paper-300 rounded-lg p-4 text-center hover:border-roast-400 transition-colors cursor-pointer">
                  <Upload className="w-5 h-5 text-roast-300 mx-auto mb-1.5" />
                  <p className="text-roast-400 text-xs">Upload OG image (1200×630px)</p>
                </div>
              </div>
            </div>
          </>
        )}

        <div className="pt-4 border-t border-paper-100">
          <button onClick={handleSave}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-lg font-mono text-xs uppercase tracking-wider font-bold transition-all ${saved ? 'bg-emerald-600 text-white' : 'bg-roast-950 hover:bg-roast-900 text-paper-50'}`}>
            <Save className="w-3.5 h-3.5" />
            {saved ? '✓ Tersimpan!' : 'Simpan Perubahan'}
          </button>
        </div>
      </div>
    </div>
  );
}
