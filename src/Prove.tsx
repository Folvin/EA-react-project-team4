import NavigationBar from "./components/shared/NavigationBar";

function Prove() {
  return (
    <div>
      <NavigationBar
        navColor="bg-black"
        textColor="text-white"
        hoverColor="hover:text-red-600"
        burgerColor="#FFFFFF"
        logo="assets/core/EANavIcon.png"
      />
    </div>
  );
}

export default Prove;
