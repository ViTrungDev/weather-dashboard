import React, { useState, useEffect } from "react";
import {
  Search,
  MapPin,
  Wind,
  Droplets,
  Thermometer,
  Cloud,
} from "lucide-react";
import { fetchWeather } from "./api/weather";

function App() {
  const [city, setCity] = useState("Hanoi");
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSearch = async (e) => {
    if (e.key === "Enter") {
      setLoading(true);
      setError("");
      try {
        const result = await fetchWeather(e.target.value);
        setData(result);
      } catch (err) {
        setError("Không tìm thấy thành phố!");
      } finally {
        setLoading(false);
      }
    }
  };

  // Mặc định load Hà Nội khi vào trang
  useEffect(() => {
    const init = async () => {
      setLoading(true);
      try {
        const result = await fetchWeather("Hanoi");
        setData(result);
      } finally {
        setLoading(false);
      }
    };
    init();
  }, []);

  return (
    <div className="min-h-screen bg-slate-950 p-6 md:p-12 text-slate-100 flex flex-col items-center">
      {/* Search Bar */}
      <div className="w-full max-w-lg relative mb-12">
        <Search className="absolute left-4 top-3.5 text-slate-400" size={20} />
        <input
          type="text"
          placeholder="Tìm thành phố (Nhấn Enter)..."
          className="w-full bg-slate-900 border border-slate-800 rounded-2xl py-3.5 pl-12 pr-4 outline-none focus:ring-2 ring-blue-500 transition-all shadow-2xl"
          onKeyDown={handleSearch}
        />
        {error && (
          <p className="absolute -bottom-6 left-4 text-red-400 text-sm">
            {error}
          </p>
        )}
      </div>

      {loading ? (
        <div className="mt-20 animate-bounce text-blue-500 font-bold">
          Đang lấy dữ liệu...
        </div>
      ) : (
        data && (
          <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Main Weather Card */}
            <div className="md:col-span-2 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-[2rem] p-8 shadow-2xl flex flex-col justify-between min-h-[350px]">
              <div className="flex justify-between items-start">
                <div>
                  <h2 className="text-4xl font-bold flex items-center gap-2">
                    {data.name} <MapPin size={24} />
                  </h2>
                  <p className="opacity-80 mt-1 capitalize">
                    {data.weather[0].description}
                  </p>
                </div>
                <Cloud size={80} />
              </div>
              <div>
                <h1 className="text-9xl font-black tracking-tighter">
                  {Math.round(data.main.temp)}°
                </h1>
              </div>
            </div>

            {/* Side Info Chips */}
            <div className="grid grid-cols-1 gap-4">
              <InfoCard
                icon={<Wind />}
                label="Tốc độ gió"
                value={`${data.wind.speed} m/s`}
                color="text-blue-400"
              />
              <InfoCard
                icon={<Droplets />}
                label="Độ ẩm"
                value={`${data.main.humidity}%`}
                color="text-cyan-400"
              />
              <InfoCard
                icon={<Thermometer />}
                label="Cảm giác như"
                value={`${Math.round(data.main.feels_like)}°`}
                color="text-orange-400"
              />
            </div>
          </div>
        )
      )}
    </div>
  );
}

function InfoCard({ icon, label, value, color }) {
  return (
    <div className="bg-slate-900 border border-slate-800 p-6 rounded-[1.5rem] flex items-center gap-5 hover:bg-slate-800/50 transition-colors">
      <div className={`${color} bg-slate-950 p-3 rounded-xl shadow-inner`}>
        {icon}
      </div>
      <div>
        <p className="text-slate-500 text-sm">{label}</p>
        <p className="text-xl font-bold">{value}</p>
      </div>
    </div>
  );
}

export default App;
