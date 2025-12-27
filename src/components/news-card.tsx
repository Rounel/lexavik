import Image from 'next/image'
import { Badge } from '@/components/ui/badge'

interface NewsCardProps {
  featured?: boolean
  compact?: boolean
  small?: boolean
}

export default function NewsCard({ featured, compact, small }: NewsCardProps) {
  return (
    <div className={`group relative ${featured ? 'row-span-2' : ''} ${compact && "flex flex-row gap-4"}`}>
      <div className="relative overflow-hidden rounded-lg">
        <Image
          src="/bg1.jpg"
          alt="News image"
          width={featured ? 800 : 400}
          height={featured ? 600 : 300}
          className={`aspect-video w-full object-cover transition-transform duration-300 group-hover:scale-105 ${
            small ? 'aspect-[4/3]' : ''
          } ${compact && "max-w-[200px] h-full"}`}
        />
        {!compact && (
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        )}
      </div>
      <div className={`${compact ? 'mt-4' : 'absolute bottom-0 p-4'}`}>
        <div className="mb-2 flex items-center space-x-2">
          <Image
            src="/rifen-women-icon.png"
            alt="Source icon"
            width={20}
            height={20}
            className="rounded-full"
          />
          <span className={`text-sm ${compact ? 'text-gray-900' : 'text-white'}`}>RIFEN</span>
          <span className={`text-sm ${compact ? 'text-gray-500' : 'text-gray-300'}`}>
            • 10 hours ago
          </span>
        </div>
        <h3
          className={`mb-2 font-bold ${
            featured ? 'text-xl' : 'text-base'
          } ${compact ? 'text-gray-900' : 'text-white'}`}
        >
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto fugiat, nisi inventore 
        </h3>
        {!small && (
          <p className={`text-sm ${compact ? 'text-gray-600' : 'text-gray-200'}`}>
            Lorem ipsum dolor sit amet, consectetur adipisicing...
          </p>
        )}
        <div className="mt-2">
          <Badge variant="secondary" className={compact ? '' : 'bg-white/10 text-white'}>
            RIFEN Tour
          </Badge>
        </div>
      </div>
    </div>
  )
}

