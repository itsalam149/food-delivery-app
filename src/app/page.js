import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>Welcome to Our Restaurant</h1>
      <p>Experience the best dining with us!</p>
      <Image
        src="/restaurant.jpg"
        alt="Restaurant Image"
        width={500}
        height={300}
      />
    </main>
  );
}
