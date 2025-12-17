export default function Footer() {
    return (
        <footer className="bg-slate-900 text-slate-200 py-12">
            <div className="container mx-auto px-6 text-center">
                <h2 className="text-2xl font-bold mb-4 tracking-tighter text-white">
                    Artemente<span className="text-primary">.</span>
                </h2>
                <p className="text-slate-400 text-sm mb-8">
                    © {new Date().getFullYear()} Artemente. Todos los derechos reservados.
                </p>
                <div className="flex justify-center gap-6">
                    {/* Social links placeholder */}
                </div>
            </div>
        </footer>
    );
}
