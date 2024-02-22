import react from "react";
import styles from "@/styles/login.module.css";
import teacher from '@/assets/teacher_img.jpg';
import parent from '@/assets/parent_img.png';
import Image from "next/image";
import Card from "../components/Card";
import Router from "next/router";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// import { faRightBracket } from '@fortawesome/free-solid-svg-icons';


export default function Login() 
{
    return(
        <main className="h-[100vh] w-[100vw] flex justify-center items-center">
            <div className={styles.container}>
                <div href="parent-login.html" className={styles.loginOption} onClick={()=>{Router.push('/LoginForParent')}}>
                    <Image src={parent} alt="Parent Image" className={styles.boxImage} />
                    <div>Parent</div>
                    {/* <FontAwesomeIcon icon={faRightToBracket} /> */}
                 </div>
                <div href="teacher-login.html" className={styles.loginOption} onClick={()=>{Router.push('/LoginForTeacher')}}>
                    <Image src={teacher} alt="Teacher Image" className={styles.boxImage} />
                    <div>Teacher</div>
                    {/* <FontAwesomeIcon icon={faRightToBracket} /> */}
                </div>
            </div>
        </main>
    );
}