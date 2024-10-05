import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#F15A3F] text-white">
      {/* Navigation */}
      <nav className="p-4">
        <div className="container mx-auto flex justify-end">
          <div className="bg-black bg-opacity-20 rounded-full p-2">
            <Button variant="ghost" className="text-white">Product</Button>
            <Button variant="ghost" className="text-white">Resources</Button>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left Column */}
          <div>
            <h1 className="text-5xl font-bold mb-6">
              Private, End-to-End<br />
              Encrypted <span className="inline-block bg-white w-12 h-12 rounded-xl mr-2"></span>Passwords Vault
            </h1>
            <p className="text-xl mb-8">
              Protect your passwords and docs with Spiff Passwords - end-to-end encrypted and fully collaborative.
            </p>
          </div>

          {/* Right Column */}
          <div className="bg-white rounded-lg p-6 text-black">
            <div className="flex items-center mb-4">
              <div className="bg-gray-200 rounded-full p-2 mr-2">
                <span className="text-sm">Spiff Pages</span>
              </div>
              <span className="mr-2">General</span>
              <span className="text-blue-500">Design</span>
            </div>
            <div className="mb-4">
              <p className="text-sm text-gray-600">
                body copy you see to learn more about what I mean. Because our fictional cursor is on some text, and that text is somewhere midway down the viewport, the bar appears over there.
              </p>
            </div>
            <table className="w-full mb-4">
              <thead className="bg-gray-100">
                <tr>
                  <th className="p-2 text-left">Product name</th>
                  <th className="p-2 text-left">Color</th>
                  <th className="p-2 text-left">Category</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-2 border-b"></td>
                  <td className="p-2 border-b"></td>
                  <td className="p-2 border-b"></td>
                </tr>
                <tr>
                  <td className="p-2 border-b"></td>
                  <td className="p-2 border-b"></td>
                  <td className="p-2 border-b"></td>
                </tr>
              </tbody>
            </table>
            <div className="bg-gray-100 p-4 rounded">
              <p className="text-sm text-gray-600 mb-2">
                The context toolbar follows <span className="text-blue-500">user A</span> depending on where they click in the editor. Hence, context! Go down to the next instance of body copy you see to learn more about what I mean. Because our fictional cursor is on some text, which appears somewhere midway down the viewport, the code is in <span className="text-green-500">nightwatch-ui</span> in codebase.
              </p>
              <pre className="text-xs bg-gray-200 p-2 rounded">
                {`<Animate Presence/>
  <m.div
    animate = {{ opacity: 1, scale: 1 }}
    exit={{ opacity: 0, scale: 0.95 }}
    initial={{ opacity: 0, scale: 0.95 }}
    transition={{ ease: [0.16, 1, 0.3, 1], duration: 0.2}}
  />
</Animate Presence>`}
              </pre>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="container mx-auto px-4 py-16">
        <div className="bg-white text-black p-8 rounded-lg">
          <h2 className="text-4xl font-bold mb-4">
            Take your <span className="text-[#F15A3F]">passwords</span> and <span className="text-[#F15A3F]">documents</span> to the next level with a private, end-to-end encrypted passwords vault.
          </h2>
          <Link href="/dashboard">
            <Button size="lg" className="bg-[#F15A3F] text-white hover:bg-[#D14A2F]">Get Started</Button>
          </Link>
        </div>
      </footer>
    </div>
  );
}