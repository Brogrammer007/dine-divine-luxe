import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Button } from "@/components/ui/button";
import { Download, QrCode } from "lucide-react";
import QRCode from "react-qr-code";

const QRTables = () => {
  const tables = Array.from({ length: 20 }, (_, i) => i + 1);

  const handleDownload = (tableNumber: number) => {
    const svg = document.getElementById(`qr-${tableNumber}`);
    if (!svg) return;

    const svgData = new XMLSerializer().serializeToString(svg);
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    const img = new Image();

    img.onload = () => {
      canvas.width = img.width;
      canvas.height = img.height;
      ctx?.drawImage(img, 0, 0);
      const pngFile = canvas.toDataURL("image/png");

      const downloadLink = document.createElement("a");
      downloadLink.download = `table-${tableNumber}-qr.png`;
      downloadLink.href = pngFile;
      downloadLink.click();
    };

    img.src = "data:image/svg+xml;base64," + btoa(svgData);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-secondary/30 to-background">
        <div className="container mx-auto px-4 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gold/20 rounded-full mb-6">
            <QrCode className="h-8 w-8 text-gold" />
          </div>
          <h1 className="font-serif text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
            Table <span className="text-gold">QR Codes</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto animate-fade-in">
            Quick access QR codes for all tables - scan to view our menu instantly
          </p>
        </div>
      </section>

      {/* QR Codes Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {tables.map((tableNumber, index) => (
              <div
                key={tableNumber}
                className="bg-card rounded-3xl p-8 shadow-elegant hover:shadow-lift transition-all duration-500 text-center animate-fade-in-scale"
                style={{ animationDelay: `${index * 30}ms` }}
              >
                <h3 className="font-serif text-2xl font-bold mb-6">
                  Table <span className="text-gold">{tableNumber}</span>
                </h3>

                {/* QR Code */}
                <div className="bg-white p-6 rounded-2xl mb-6 inline-block">
                  <QRCode
                    id={`qr-${tableNumber}`}
                    value={`${window.location.origin}/menu?table=${tableNumber}`}
                    size={200}
                    level="H"
                  />
                </div>

                {/* Download Button */}
                <Button
                  onClick={() => handleDownload(tableNumber)}
                  variant="outline"
                  className="w-full border-gold text-gold hover:bg-gold hover:text-primary transition-all"
                >
                  <Download className="h-4 w-4 mr-2" />
                  Download QR
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default QRTables;
