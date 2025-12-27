import Image from 'next/image'
import { Badge } from '@/components/ui/badge'

export default function NewsGrid() {
  return (
    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
      {[1, 2, 3].map((i) => (
        <div key={i} className="group">
          <div className="relative mb-4 overflow-hidden rounded-lg">
            <Image
              src="/bg1.jpg"
              alt="News image"
              width={400}
              height={300}
              className="aspect-video w-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </div>
          <div className="mb-2 flex items-center space-x-2">
            <Badge variant="secondary" className="bg-red-50 text-red-600">
              Symposium
            </Badge>
            <span className="text-sm text-gray-500">• 1 min read</span>
          </div>
          <h3 className="mb-2 text-lg font-bold">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </h3>
          <p className="text-sm text-gray-600">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate excepturi, vero harum vel unde odio, praesentium asperiores debitis corrupti repudiandae quaerat sint fugit ratione obcaecati totam sapiente sunt at rerum!
          </p>
        </div>
      ))}
    </div>
  )
}

