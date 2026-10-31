/**
 * Template dirender ulang di setiap navigasi (berbeda dengan layout),
 * sehingga animasi masuk halaman terputar setiap pindah halaman.
 */
export default function Template({ children }: { children: React.ReactNode }) {
  return <div className="page-in">{children}</div>;
}
