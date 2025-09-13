import Link from 'next/link';
import { blogPosts } from '../../data/blog';


export default function BlogPage({ searchParams }: {searchParams: {category?: string}}) {
    const category = searchParams.category;
    const filteredPosts = category? blogPosts.filter(blog => blog.category.toLowerCase() === category.toLowerCase()): blogPosts;
 return (
   <main className="container mx-auto">
       <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8 h-screen">
           <h1 className="text-3xl font-bold mb-8 text-soft-brown text-center">Blog Posts</h1>
           {/*Category Filter*/}
           <div className="mt-4 mb-6 flex justify-center space-x-4">
            <Link href="/blog" className={`text-soft-brown ${!category ? 'font-bold' : ''}`}>All</Link>
            <Link href="/blog?category=nextjs" className={`text-soft-brown ${category === 'nextjs' ? 'font-bold' : ''}`}>Next.js</Link>
            <Link href="/blog?category=css" className={`text-soft-brown ${category === 'css' ? 'font-bold' : ''}`}>CSS</Link>
           </div>
           <div className="grid gap-6">
               {filteredPosts.map((post, index) => (
               <div key={post.id} className="border border-black p-4 rounded-lg">
                   <Link href={`/blog/${post.slug}`}>
                   <h2 className="text-xl font-semibold mb-2 text-soft-brown hover:underline">
                       {post.title}
                   </h2>
                   </Link>
                   <p className="text-black text-sm font-semibold mb-2">{post.date}</p>
                   <p>{post.excerpt}</p>
               </div>
               ))}
           </div>
       </div>
   </main>
 );
}
