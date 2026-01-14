import { Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-border/50 bg-card/30 backdrop-blur-sm mt-16">
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col items-center justify-center gap-2 text-center">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span>Made with</span>
            <Heart className="w-4 h-4 text-red-500 fill-red-500" />
            <span>for MCAT students</span>
          </div>
          <div className="text-sm text-muted-foreground">
            Support this project:{' '}
            <a 
              href="https://venmo.com/sasha-szura" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white hover:underline font-medium"
            >
              Venmo @sasha-szura
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
