import { Scissors, Instagram, Facebook, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-border py-8">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-gray-500 uppercase tracking-[0.2em]">
        <div>
          &copy; {new Date().getFullYear()} COIFFURE K.STYLZ — LUXURY GROOMING
        </div>
        
        <div className="flex space-x-8">
          <a href="#" className="hover:text-gold transition-colors">Instagram</a>
          <a href="#" className="hover:text-gold transition-colors">Facebook</a>
          <a href="#" className="hover:text-gold transition-colors">TikTok</a>
        </div>

        <div className="flex items-center space-x-2">
          <span className="w-2 h-2 bg-green-500 rounded-full"></span>
          <span>Montréal, QC</span>
        </div>
      </div>
    </footer>
  );
}
