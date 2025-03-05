import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function CTA() {
  return (
    <section className="py-20 bg-primary text-white text-center">
      <h2 className="text-3xl font-bold">Ready to Start Learning?</h2>
      <p className="mt-2 text-lg">Join thousands of students sharing knowledge.</p>
      <Button asChild className="mt-6 bg-white text-primary">
        <Link href="/signup">Sign Up for Free</Link>
      </Button>
    </section>
  );
}
