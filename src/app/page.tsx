import { Card } from "@/components/Card";

export default function Home() {
  return (
    <main className="flex gap-4 justify-center items-center min-h-screen">
      <h1>TEST</h1>
      <Card
        title="Bukan Hitler"
        description="Ini bukan hitler yh jangan ngeyel"
        imageUrl="/hitnotler.jpg"
      />
      <Card
        title="Kucing Melet"
        description="Ini kucing kerjaannya melet terus"
        imageUrl="/kucingmelet.jpg"
      />
      <Card
        title="Kucing Sigma"
        description="Ini kucing sigma banget tcoyyyyy"
        imageUrl="/kucingsigma.jpg"
      />
      <Card
        title="Backend ter gg"
        description="Ini framework ope banget dah"
        imageUrl="/nestjs.png"
      />
    </main>
  );
}
