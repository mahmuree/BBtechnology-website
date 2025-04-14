import { cn } from "@/lib/utils";

export default function TrustedBy() {
  return (
    <section className="py-10 border-t border-b border-gray-200">
      <div className="container mx-auto px-4">
        <p className="text-center text-gray-500 mb-8">
          Adopted by renowned, trusted, and leading enterprises
        </p>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
          <div className={cn("text-gray-600 font-medium")}>✦ Asterisk</div>
          <div className={cn("text-gray-600 font-medium")}>Oasis</div>
          <div className={cn("text-gray-600 font-medium")}>
            <u>Cooks</u>
          </div>
          <div className={cn("text-gray-600 font-medium")}>◎ Opal</div>
          <div className={cn("text-gray-600 font-medium")}>⟩ Dune</div>
        </div>
      </div>
    </section>
  );
}
