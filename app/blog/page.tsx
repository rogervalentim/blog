import { Cta } from "../_components/cta";
import { Footer } from "../_components/footer";
import { Header } from "../_components/header";
import { Articles } from "./_components/articles";
import { TopBlog } from "./_components/top-blog";

export default function BlogPage() {
  return (
    <>
      <Header />
      <main>
        <TopBlog />
        <Articles />
        <Cta />
      </main>
      <Footer />
    </>
  );
}
