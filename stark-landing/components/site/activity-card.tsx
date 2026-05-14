import Image from 'next/image'
import { CalendarDays, MapPin, Users } from 'lucide-react'
import type { Activity } from '@/lib/programs'

export function ActivityCard({ activity }: { activity: Activity }) {
  return (
    <article className="rounded-lg border border-border bg-card overflow-hidden hover:shadow-md transition">
      {activity.photo && (
        <div className="relative aspect-[16/9] bg-muted">
          <Image
            src={activity.photo}
            alt={activity.title}
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            className="object-cover"
          />
        </div>
      )}
      <div className="p-5">
        <h3 className="text-base font-semibold leading-snug">{activity.title}</h3>
        <div className="mt-3 flex flex-wrap gap-x-4 gap-y-1 text-xs text-muted-foreground">
          <span className="inline-flex items-center gap-1">
            <CalendarDays className="h-3.5 w-3.5" /> {activity.date}
          </span>
          <span className="inline-flex items-center gap-1">
            <MapPin className="h-3.5 w-3.5" /> {activity.venue}
          </span>
          {activity.beneficiaries !== undefined && (
            <span className="inline-flex items-center gap-1">
              <Users className="h-3.5 w-3.5" /> {activity.beneficiaries.toLocaleString('en-IN')}
            </span>
          )}
        </div>
        <p className="mt-3 text-sm text-muted-foreground">{activity.description}</p>
        {activity.partners && activity.partners.length > 0 && (
          <div className="mt-3 text-xs text-muted-foreground">
            <span className="font-medium text-foreground/80">Partners:</span>{' '}
            {activity.partners.join(' · ')}
          </div>
        )}
      </div>
    </article>
  )
}
