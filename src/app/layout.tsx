import "./globals.css";
import dynamic from "next/dynamic";

export default dynamic(() =>
  Promise.resolve(({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) => {
    return (
      <html lang="en">
        <body className=
          "min-h-screen relative">
          <div className="absolute bg-blue-800 inset-0"></div>
          <div className="relative z-20 p-5">
            {children}
          </div>
        </body>
      </html>
    );
  }), {
  ssr: false
})
