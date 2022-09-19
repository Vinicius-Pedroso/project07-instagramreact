import Sugestions from "./Sugestions";
import User from "./User";

export default function SideBar() {
    return (
        <div class="sidebar">
            <User />
            <Sugestions />
        </div>
    );
}