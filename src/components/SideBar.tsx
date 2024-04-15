export default function SideBar() {
  return (
    <aside className="bg-gray-700 p-5">
      <ul className="space-y-2">
        <li className="text-white bg-slate-400 p-2 rounded-lg cursor-pointer">
          Lessen
        </li>
        <li className="text-white bg-slate-400 p-2 rounded-lg cursor-pointer">
          Quizes
        </li>
        <li className="text-white bg-slate-400 p-2 rounded-lg cursor-pointer">
          Admin
        </li>
      </ul>
    </aside>
  );
}
