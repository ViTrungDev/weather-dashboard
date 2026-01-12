import GoogleIcon from "../../../components/GoogleIcon";
function Footer() {
  return (
    <footer className="w-full h-20 bg-[#0f172a] backdrop-blur-sm border-t border-[#0f172a] flex items-center justify-center px-6">
      <div className="flex">
        <GoogleIcon name="copyright" size="text-2xl" color="text-white/30" />
        <h2 className="text-white/30">
          2026 V-weather. Mọi dữ liệu được cung cấp bởi api.openweathermap.org
        </h2>
      </div>
    </footer>
  );
}
export default Footer;
