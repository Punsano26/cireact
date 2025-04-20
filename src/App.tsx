

import "./App.css";

function App() {
  return (
    <>
   
      <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
        {/* Header Section */}
        <header className="bg-blue-600 w-full py-4 shadow-md">
          <h1 className="text-white text-2xl font-bold text-center">
            ระบบเยี่ยมบ้าน โรงเรียนมัธยม x
          </h1>
        </header>

        {/* Main Content Section */}
        <main className="flex flex-col items-center mt-8 p-4">
          <h2 className="text-3xl font-semibold text-blue-700 mb-4">
            ยินดีต้อนรับสู่ระบบเยี่ยมบ้าน
          </h2>
          <p className="text-gray-700 text-center mb-6 max-w-2xl">
            เราให้บริการระบบที่ช่วยครูและเจ้าหน้าที่สามารถจัดการข้อมูลการเยี่ยมบ้านนักเรียนได้อย่างมีประสิทธิภาพ
            ครบถ้วน และง่ายต่อการใช้งาน
          </p>
          <button className="bg-blue-600 text-white py-2 px-6 rounded-md hover:bg-blue-700 transition">
            เริ่มต้นใช้งาน
          </button>
        </main>

        {/* Footer Section */}
        <footer className="mt-auto bg-gray-800 w-full py-3">
          <p className="text-white text-center text-sm">
            © 2025 โรงเรียนมัธยม - ระบบเยี่ยมบ้าน. All rights reserved.
          </p>
        </footer>
      </div>
    </>
  );
}

export default App;
