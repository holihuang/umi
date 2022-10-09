import { Link, Outlet } from 'umi';

export default function HomePage() {
  return (
      <div>
          <div>
              <Link to="/home">首页</Link>
              <Link to="/docs">docs</Link>
              <Link to="/user">用户中心</Link>
          </div>
          <Outlet/>
    </div>
  );
}
