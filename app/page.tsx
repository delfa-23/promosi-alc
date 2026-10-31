import Image from "next/image";
import Navbar from "./components/Navbar";

const packages = [
  {
    title: "SNBT Intensif",
    duration: "1 Bulan",
    price: "Rp 750.000",
    features: ["3x pertemuan/minggu", "Materi inti TPS + Literasi", "2x try out"],
  },
  {
    title: "SNBT Reguler",
    duration: "3 Bulan",
    price: "Rp 1.950.000",
    features: ["3x pertemuan/minggu", "Full materi", "6x try out", "Konsultasi jurusan"],
    popular: true,
  },
  {
    title: "SNBT Long Term",
    duration: "6 Bulan",
    price: "Rp 3.600.000",
    features: ["4x pertemuan/minggu", "Full materi + bank soal", "12x try out", "Mentoring PTN/jurusan"],
  },
];

const tutors = [
  { image: "/images/tutor/tutor1.JPG", name: "Roechian, S.Pd", subject: "Matematika", bio: "Alumni UPI, 8 tahun mengajar. Ahli dalam membuat matematika jadi menyenangkan." },
  { image: "/images/tutor/tutor2.JPG", name: "Jono Suryadi, M.Pd", subject: "Bahasa Indonesia", bio: "Alumni UNJ, spesialis literasi dan penalaran verbal. Sabar dan telaten." },
  { image: "/images/tutor/tutor3.JPG", name: "Ahmad Fauzi, S.Si", subject: "Fisika", bio: "Alumni ITB, 6 tahun pengalaman. Fokus pada pemahaman konsep dasar fisika." },
];

const students = [
  { image: "/images/murid/murid1.jpg", name: "Rizky Pratama", university: "Universitas Indonesia", department: "Teknik Informatika 2025", quote: "Alhamdulillah, berkat bimbingan ALC saya bisa lolos SNBT di UI. Tutor-tutornya sangat sabar dan materinya mudah dipahami. Suasana belajarnya juga nyaman!" },
  { image: "/images/murid/murid2.jpg", name: "Rafa Putra", university: "Institut Teknologi Bandung", department: "Farmasi 2025", quote: "Saya sangat merekomendasikan ALC. Selain materi akademik, nilai-nilai islami yang ditanamkan membuat saya lebih termotivasi dan tenang dalam menghadapi ujian." },
  { image: "/images/murid/murid3.jpg", name: "Fajar Nugroho", university: "Universitas Gadjah Mada", department: "Kedokteran 2024", quote: "Try out rutin di ALC sangat membantu saya mengukur kemampuan. Konsultasi jurusan juga membuka wawasan saya. Terima kasih ALC!" },
];

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <section id="hero" className="pattern-bg py-16 md:py-24 relative overflow-hidden">
          <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block bg-[#8CC63F]/10 text-[#6B9E2F] text-xs font-bold px-3 py-1 rounded-full mb-4 uppercase tracking-wider">Bimbingan Belajar Islami</span>
              <h1 className="text-4xl md:text-5xl font-extrabold leading-tight text-gray-900 mb-4">Sahabat Para <span className="text-[#8CC63F]">Juara</span> Menuju PTN Impian</h1>
              <p className="text-gray-500 text-lg mb-8 leading-relaxed">Mitra bimbingan belajar profesional untuk mewujudkan murid yang cerdas dan berakhlak. Bersama ALC, raih kampus impian dengan cara yang santai tapi serius.</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="#paket" className="bg-[#00A0DF] text-white px-8 py-3 rounded-full font-bold text-center hover:bg-blue-600 transition shadow-lg shadow-blue-200">Lihat Paket</a>
                <a href="#" className="border-2 border-[#8CC63F] text-[#6B9E2F] px-8 py-3 rounded-full font-bold text-center hover:bg-[#8CC63F]/5 transition">Konsultasi Gratis</a>
              </div>
              <p className="text-xs text-gray-400 mt-3">Kamu akan diarahkan ke WhatsApp</p>
              <div className="flex items-center gap-4 mt-8 text-sm text-gray-500">
                <div className="flex -space-x-2"><div className="w-8 h-8 rounded-full bg-gray-200 border-2 border-white"></div><div className="w-8 h-8 rounded-full bg-gray-300 border-2 border-white"></div><div className="w-8 h-8 rounded-full bg-gray-400 border-2 border-white"></div></div>
                <span>Dipercaya 500+ siswa &amp; orang tua</span>
              </div>
            </div>

            <div className="relative hero-card-container">
              <div className="hero-card relative rounded-3xl aspect-[4/5] overflow-hidden shadow-soft border border-white flex flex-col justify-between p-6">
                <div className="hero-fallback absolute inset-0 -z-10"></div>
                <div className="flex justify-between items-start z-10">
                  <div className="bg-white/95 backdrop-blur px-3 py-1.5 rounded-full shadow-sm flex items-center gap-1.5 border border-gray-100">
                    <span className="w-2 h-2 rounded-full bg-[#8CC63F] animate-pulse"></span><span className="text-xs font-bold text-gray-700">Terakreditasi A</span>
                  </div>
                  <div className="deco-book"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg></div>
                </div>
                <div className="flex flex-col items-center justify-center gap-6 z-10 mt-4">
                  <Feature icon="book" color="bg-[#00A0DF]/10 text-[#00A0DF]" label="Kelas" title="Intensif & Terarah" />
                  <Feature icon="users" color="bg-[#8CC63F]/10 text-[#6B9E2F]" label="Pengajar" title="Tutor Alumni PTN" />
                  <Feature icon="document" color="bg-purple-500/10 text-purple-600" label="Evaluasi" title="Try Out Rutin" />
                </div>
                <div className="bg-white/95 backdrop-blur p-4 rounded-2xl shadow-lg flex items-center gap-3 z-10 relative">
                  <div className="w-10 h-10 rounded-full bg-[#8CC63F]/20 flex items-center justify-center text-[#6B9E2F] font-bold shrink-0">A</div>
                  <div><p className="text-[10px] text-gray-400 uppercase tracking-wider">Alumni Lolos PTN</p><p className="font-bold text-gray-800">500+ Siswa</p></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="paket" className="py-20 bg-gray-50/50">
          <div className="max-w-6xl mx-auto px-4">
            <Heading title="Pilih Paket Belajarmu" description="Sesuaikan dengan target dan waktumu. Semua paket sudah termasuk bimbingan intensif." />
            <div className="flex justify-center gap-2 mb-10">
              <button className="bg-[#00A0DF] text-white px-6 py-2 rounded-full font-semibold text-sm">SNBT</button>
              <button className="bg-white text-gray-500 border border-gray-200 px-6 py-2 rounded-full font-semibold text-sm hover:border-[#00A0DF]">TKA</button>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {packages.map((item) => (
                <div key={item.title} className={`bg-white p-6 rounded-2xl shadow-soft flex flex-col relative ${item.popular ? "border-2 border-[#8CC63F] shadow-lg" : "border border-gray-100"}`}>
                  {item.popular && <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#8CC63F] text-white text-xs font-bold px-4 py-1 rounded-full whitespace-nowrap">Paling Populer</span>}
                  <h3 className="font-bold text-lg text-gray-800">{item.title}</h3><p className="text-sm text-gray-400 mb-4">{item.duration}</p><p className="text-2xl font-extrabold text-[#00A0DF] mb-4">{item.price}</p>
                  <ul className="text-sm text-gray-600 space-y-2 mb-6 flex-1">{item.features.map((feature) => <li key={feature} className="flex items-start gap-2"><span className="text-[#8CC63F] font-bold">✓</span>{feature}</li>)}</ul>
                  <a href="#" className={`block w-full text-center font-bold py-3 rounded-full transition ${item.popular ? "bg-[#00A0DF] text-white hover:bg-blue-600 shadow-lg shadow-blue-200" : "bg-gray-100 text-gray-700 hover:bg-[#00A0DF] hover:text-white"}`}>Pilih Paket Ini</a>
                  <p className="text-[10px] text-gray-400 text-center mt-2">Kamu akan diarahkan ke WhatsApp</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="tutor" className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-4">
            <Heading title="Kenali Tutor Kami" description="Tutor berpengalaman dan berdedikasi untuk membimbingmu meraih impian." />
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
              {tutors.map((tutor) => <div key={tutor.name} className="bg-gray-50 rounded-2xl p-6 text-center shadow-soft border border-gray-100 hover:shadow-lg transition"><Image src={tutor.image} alt={tutor.name} width={96} height={96} className="w-24 h-24 rounded-full object-cover mx-auto mb-4 border-4 border-white shadow" /><h3 className="font-bold text-lg text-gray-800">{tutor.name}</h3><p className="text-sm text-[#00A0DF] font-semibold">{tutor.subject}</p><p className="text-sm text-gray-500 mt-2">{tutor.bio}</p></div>)}
            </div>
          </div>
        </section>

        <section id="murid" className="py-20 bg-gray-50/50">
          <div className="max-w-6xl mx-auto px-4">
            <Heading title="Cerita Sukses Murid Kami" description="Mereka telah membuktikan bahwa dengan bimbingan tepat, impian bisa diraih." />
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
              {students.map((student) => <div key={student.name} className="bg-white rounded-2xl p-6 shadow-soft border border-gray-100 hover:shadow-lg transition"><div className="flex items-center gap-4 mb-4"><Image src={student.image} alt={student.name} width={64} height={64} className="w-16 h-16 rounded-full object-cover border-2 border-[#8CC63F]" /><div><h3 className="font-bold text-gray-800">{student.name}</h3><p className="text-sm text-[#00A0DF] font-semibold">{student.university}</p><p className="text-xs text-gray-400">{student.department}</p></div></div><p className="text-sm text-gray-600 italic">&ldquo;{student.quote}&rdquo;</p></div>)}
            </div>
          </div>
        </section>
      </main>

      <footer className="py-8 bg-white border-t border-gray-100 text-center text-sm text-gray-400"><p>© 2026 ALC - Assyifa Learning Center. Bagian dari Yayasan Assyifa Al-Khoeriyyah.</p></footer>
    </>
  );
}

function Heading({ title, description }: { title: string; description: string }) {
  return <div className="text-center mb-12"><h2 className="text-3xl font-extrabold text-gray-900 mb-2">{title}</h2><p className="text-gray-500">{description}</p></div>;
}

function Feature({ icon, color, label, title }: { icon: "book" | "users" | "document"; color: string; label: string; title: string }) {
  const paths = {
    book: <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/>,
    users: <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"/>,
    document: <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>,
  };
  return <div className="bg-white/80 backdrop-blur-sm p-4 rounded-2xl shadow-sm border border-white w-full max-w-[240px] flex items-center gap-3"><div className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 ${color}`}><svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">{paths[icon]}</svg></div><div><p className="text-xs text-gray-500">{label}</p><p className="text-sm font-bold text-gray-800">{title}</p></div></div>;
}
