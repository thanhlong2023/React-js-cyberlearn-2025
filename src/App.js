import logo from './logo.svg';
import './App.css';


import BaiTapRenderFilms from './BaiTapRenderFilms/BaiTapRenderFilms';
import BaiTapChonXeNangCao from './BaiTapChonXeNangCao/BaiTapChonXeNangCao';
import BaiTapThuKinh from './BaiTapThuKinh/BaiTapThuKinh';

function App() {
  return (
    <div className="App">
      {/* <BaiTapChonXeNangCao /> */}
      <BaiTapThuKinh />
    </div>
  );
}

export default App;
