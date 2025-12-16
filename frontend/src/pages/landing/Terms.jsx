import { useNavigate } from "react-router-dom";
import BottomButton from "../../components/shared/BottomButton";

const TERMS = [
  {
    title: "Pendahuluan",
    points: ["Dengan menggunakan layanan ini (“Cavelink”), Anda setuju dengan Ketentuan Penggunaan berikut. Jika tidak setuju, mohon untuk tidak menggunakan layanan."],
  },
  {
    title: "Layanan yang Disediakan",
    points: [
      "Platform menyediakan sarana bagi pengguna untuk membuat tautan (link) dan webstore pribadi dengan template yang sudah tersedia.",
      "Platform hanya menyediakan infrastruktur (link & template). Isi konten, produk, maupun transaksi yang dilakukan melalui webstore sepenuhnya menjadi tanggung jawab pengguna.",
    ],
  },
  {
    title: "Akun Pengguna",
    points: [
      "Pengguna wajib memberikan informasi yang benar saat pendaftaran.",
      "Pengguna bertanggung jawab penuh atas keamanan akun, termasuk segala aktivitas yang terjadi di dalamnya.",
      "Platform berhak menonaktifkan akun jika ditemukan pelanggaran terhadap ketentuan ini.",
    ],
  },
  {
    title: "Konten & Webstore Pengguna",
    points: [
      "Semua konten, produk, deskripsi, harga, maupun informasi lain yang diunggah di webstore merupakan tanggung jawab pengguna.",
      "Pengguna dilarang menampilkan konten yang melanggar hukum, menyesatkan, mengandung SARA, pornografi, atau melanggar hak cipta.",
      "Platform berhak menghapus atau menonaktifkan webstore yang melanggar ketentuan ini.",
    ],
  },
  {
    title: "Transaksi dan Tanggung Jawab",
    points: [
      "Setiap transaksi yang terjadi melalui webstore merupakan perjanjian langsung antara penjual (pemilik webstore) dan pembeli.",
      "Platform tidak bertanggung jawab atas kualitas produk, pengiriman, pembayaran, maupun sengketa yang timbul antara penjual dan pembeli.",
      "Platform berhak menghapus atau menonaktifkan webstore yang melanggar ketentuan ini.",
    ],
  },
  {
    title: "Larangan Penggunaan",
    points: [
      "Menjual barang/layanan ilegal atau dilarang hukum.",
      "Melakukan penipuan atau praktik yang merugikan pihak lain.",
      "Menyalahgunakan layanan untuk spam, peretasan, atau aktivitas merusak.",
      "Platform berhak menghapus atau menonaktifkan webstore yang melanggar ketentuan ini.",
    ],
  },
  {
    title: "Perubahan Layanan & Ketentuan",
    points: [
      "Platform dapat menambahkan, mengubah, atau menghentikan layanan sewaktu-waktu.",
      "Platform berhak memperbarui Ketentuan Penggunaan, dan versi terbaru akan berlaku setelah dipublikasikan.",
    ],
  },
  {
    title: "Hukum yang Berlaku",
    points: ["Ketentuan ini tunduk pada hukum yang berlaku di Indonesia.", "Semua hukum yang berlaku pada semua pengguna dimanapun kalian berada."],
  },
];

function Terms() {
  const navigate = useNavigate();

  return (
    <main className="pb-36">
      <div className="bg-primary pt-8 pb-4">
        <h1 className="text-light font-semibold text-xl text-center">Terms of use</h1>
      </div>

      <div className="">
        <ol className="list-decimal list-inside mx-4">
          {TERMS.map((data, index) => (
            <li className="font-semibold my-4" key={index}>
              {data.title}
              <ul className="ml-4 mt-2">
                {data.points.map((point, index) => (
                  <li key={index} className=" font-normal text-sm list-disc list-outside">
                    {point}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
      </div>

      <BottomButton text={"Back"} onClick={() => navigate(-1)} />
    </main>
  );
}
export default Terms;
