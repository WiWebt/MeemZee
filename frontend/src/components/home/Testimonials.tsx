import Image from 'next/image';

const testimonials = [
  {
    content:
      'MeemZee helped me achieve typing proficiency in Korean in just 3 months. The certification has been invaluable for my work in translation services.',
    author: {
      name: 'Sarah Chen',
      role: 'Professional Translator',
      imageUrl: '/testimonials/avatar-1.png',
    },
  },
  {
    content:
      'As a teacher, I love how MeemZee makes it easy to track student progress. The gamification elements keep them engaged and motivated.',
    author: {
      name: 'Michael Rodriguez',
      role: 'Language Teacher',
      imageUrl: '/testimonials/avatar-2.png',
    },
  },
  {
    content:
      'The AI-powered practice sessions and real-time feedback have significantly improved my typing speed in Arabic. Highly recommended!',
    author: {
      name: 'Fatima Al-Hassan',
      role: 'Content Creator',
      imageUrl: '/testimonials/avatar-3.png',
    },
  },
];

export default function Testimonials() {
  return (
    <div className="relative bg-gradient-to-b from-white to-blue-50/50 py-24 sm:py-32">
      <div 
        className="absolute inset-0 -z-10"
        style={{ 
          willChange: 'transform',
          transform: 'translate3d(0,0,0)',
          backfaceVisibility: 'hidden'
        }}
      >
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#f8fafc_1px,transparent_1px),linear-gradient(to_bottom,#f8fafc_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)]" />
        
        {/* Soft glow effect */}
        <div className="absolute inset-0 bg-[radial-gradient(100%_50%_at_50%_0%,rgba(56,189,248,0.13),rgba(241,245,249,0))]" />
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-xl text-center">
          <h2 className="text-lg font-semibold leading-8 tracking-tight text-blue-600">
            Testimonials
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Loved by language learners worldwide
          </p>
        </div>
        <div className="mx-auto mt-16 flow-root max-w-2xl sm:mt-20 lg:mx-0 lg:max-w-none">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((testimonial, testimonialIdx) => (
              <div
                key={testimonialIdx}
                className="relative flex flex-col justify-between rounded-2xl bg-white/80 p-8 shadow-md ring-1 ring-gray-200/50 transition-all duration-300 hover:scale-[1.02] hover:bg-white hover:shadow-lg"
                style={{ 
                  transform: 'translate3d(0,0,0)',
                  backfaceVisibility: 'hidden'
                }}
              >
                <div>
                  <div className="relative h-12">
                    <svg
                      className="absolute left-0 top-0 h-8 w-8 -translate-x-3 -translate-y-2 transform text-blue-200"
                      fill="currentColor"
                      viewBox="0 0 32 32"
                      aria-hidden="true"
                    >
                      <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                    </svg>
                  </div>
                  <p className="mt-4 text-lg leading-6 font-medium text-gray-900">
                    {testimonial.content}
                  </p>
                </div>
                <div className="mt-8 flex items-center gap-x-4">
                  <div className="relative h-12 w-12 overflow-hidden rounded-full bg-gray-50 ring-2 ring-white">
                    <Image
                      src={testimonial.author.imageUrl}
                      alt={testimonial.author.name}
                      fill
                      priority={testimonialIdx === 0}
                      loading={testimonialIdx === 0 ? "eager" : "lazy"}
                      className="object-cover"
                      sizes="48px"
                    />
                  </div>
                  <div>
                    <h3 className="text-base font-semibold leading-6 tracking-tight text-gray-900">
                      {testimonial.author.name}
                    </h3>
                    <p className="text-sm leading-6 text-gray-600">
                      {testimonial.author.role}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
