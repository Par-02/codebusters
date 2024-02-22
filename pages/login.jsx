import react from "react";
import { Style } from "@/styles/login.css";
import teacher from '@/assets/teacher_img.jpg';
import parent from '@/assets/parent_img.png';
export default function Login() 
{
    return(
        <main>
            <div className="container">
                <a href="parent-login.html" className="login-option">
                    <img src={parent} alt="Parent Image" className="box-image" />
                    <div>Parent</div>
                <   div class="login-icon">➔</div>
                 </a>
                <a href="teacher-login.html" className="login-option">
                    <img src={teacher} alt="Teacher Image" className="box-image" />
                    <div>Teacher</div>
                    <div class="login-icon">➔</div>
                </a>
            </div>
        </main>
    );
}