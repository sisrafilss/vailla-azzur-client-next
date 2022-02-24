import { useRouter } from "next/router";

function BlogDetail() {
  const router = useRouter();
  const { blogId } = router.query;

  return (
    <>
      <h2>Blog Detail for blog id: {blogId}</h2>
    </>
  );
}

export default BlogDetail;
