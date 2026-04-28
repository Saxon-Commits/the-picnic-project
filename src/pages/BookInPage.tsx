import React, { useState } from 'react';
import { 
  format, 
  addMonths, 
  subMonths, 
  startOfMonth, 
  endOfMonth, 
  startOfWeek, 
  endOfWeek, 
  isSameMonth, 
  isSameDay, 
  addDays, 
  eachDayOfInterval 
} from 'date-fns';
import { ChevronLeft, ChevronRight, Check } from 'lucide-react';
import { PageWrapper } from '../components/PageWrapper';
import { cn } from '../lib/utils';

export function BookInPage() {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [step, setStep] = useState(1);

  const handleDateClick = (day: Date) => {
    setSelectedDate(day);
    // Auto advance to step 2
    setStep(2);
    // Scroll to form (sm devices)
    if (window.innerWidth < 768) {
       document.getElementById('booking-form')?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const renderHeader = () => {
    return (
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-3xl font-serif text-stone-900">
          {format(currentDate, 'MMMM yyyy')}
        </h2>
        <div className="flex gap-2">
          <button 
            onClick={() => setCurrentDate(subMonths(currentDate, 1))}
            className="p-3 hover:bg-rose/10 rounded-full transition-colors text-stone-600"
          >
            <ChevronLeft size={24} />
          </button>
          <button 
            onClick={() => setCurrentDate(addMonths(currentDate, 1))}
            className="p-3 hover:bg-rose/10 rounded-full transition-colors text-stone-600"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
    );
  };

  const renderDays = () => {
    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    return (
      <div className="grid grid-cols-7 mb-4">
        {days.map(day => (
          <div key={day} className="text-center text-[10px] uppercase tracking-widest font-bold text-stone-400 py-2">
            {day}
          </div>
        ))}
      </div>
    );
  };

  const renderCells = () => {
    const monthStart = startOfMonth(currentDate);
    const monthEnd = endOfMonth(monthStart);
    const startDate = startOfWeek(monthStart);
    const endDate = endOfWeek(monthEnd);

    const rows = eachDayOfInterval({
      start: startDate,
      end: endDate
    });

    return (
      <div className="grid grid-cols-7 gap-1 md:gap-4">
        {rows.map((day, idx) => {
          const isSelected = selectedDate && isSameDay(day, selectedDate);
          const isMonth = isSameMonth(day, monthStart);
          const isPast = day < new Date() && !isSameDay(day, new Date());
          
          return (
            <button
              key={idx}
              disabled={isPast}
              onClick={() => handleDateClick(day)}
              className={cn(
                "relative aspect-square flex flex-col items-center justify-center rounded-2xl md:rounded-3xl transition-all duration-300",
                !isMonth ? "text-stone-300 opacity-30" : "text-stone-700",
                isPast ? "cursor-not-allowed" : "hover:bg-rose/10",
                isSelected ? "bg-rose text-white shadow-xl shadow-rose/30 scale-105 z-10" : "bg-white/50"
              )}
            >
              <span className="text-sm md:text-lg font-medium">{format(day, 'd')}</span>
              {isSelected && <div className="absolute top-2 right-2 w-1.5 h-1.5 bg-white rounded-full animate-ping" />}
            </button>
          );
        })}
      </div>
    );
  };

  return (
    <PageWrapper>
      <section className="py-24 px-4 bg-beige min-h-screen">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <span className="font-handwriting text-3xl text-rose mb-4 block">Let's Celebrate</span>
            <h1 className="text-5xl md:text-7xl text-stone-900 mb-8">Secure Your Date</h1>
            <p className="text-stone-600 max-w-xl mx-auto font-light">
              Select a preferred date in the calendar below to see available slots and start your booking process.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Calendar Section */}
            <div className="lg:col-span-7 bg-cream p-6 md:p-12 rounded-4xl border border-stone-100 shadow-sm">
              {renderHeader()}
              {renderDays()}
              {renderCells()}
              
              <div className="mt-12 flex items-center gap-6 justify-center text-xs uppercase font-bold tracking-widest text-stone-400">
                <div className="flex items-center gap-2">
                   <div className="w-3 h-3 rounded-full bg-rose" /> Selected
                </div>
                <div className="flex items-center gap-2">
                   <div className="w-3 h-3 rounded-full bg-white border border-stone-200" /> Available
                </div>
              </div>
            </div>

            {/* Form Section */}
            <div id="booking-form" className="lg:col-span-5">
              <div className={cn(
                "bg-white rounded-4xl p-8 md:p-12 shadow-xl border border-stone-100 transition-all duration-700",
                step === 1 ? "opacity-50 pointer-events-none" : "opacity-100"
              )}>
                <h3 className="text-3xl font-serif text-stone-900 mb-8">
                  {step === 1 ? "Select a date first" : `Enquiry for ${format(selectedDate!, 'EEE, MMM do')}`}
                </h3>
                
                <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                   <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-widest text-stone-500 mb-2">Your Name</label>
                        <input type="text" className="w-full bg-stone-50 border-none rounded-2xl p-4 focus:ring-2 focus:ring-rose/20 outline-none transition-all" placeholder="Sarah Jenkins" />
                      </div>
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-widest text-stone-500 mb-2">Email Address</label>
                        <input type="email" className="w-full bg-stone-50 border-none rounded-2xl p-4 focus:ring-2 focus:ring-rose/20 outline-none transition-all" placeholder="sarah@example.com" />
                      </div>
                   </div>

                   <div>
                      <label className="block text-xs font-bold uppercase tracking-widest text-stone-500 mb-2">Picnic Style</label>
                      <select className="w-full bg-stone-50 border-none rounded-2xl p-4 focus:ring-2 focus:ring-rose/20 outline-none transition-all appearance-none cursor-pointer">
                        <option>Luxury Picnic (Up to 4 people)</option>
                        <option>Group Picnic (5-8 people)</option>
                        <option>Large Group (9-16 people)</option>
                        <option>Proposal Package</option>
                        <option>The Slow Social (Community)</option>
                      </select>
                   </div>

                   <div>
                      <label className="block text-xs font-bold uppercase tracking-widest text-stone-500 mb-2">Any Extras?</label>
                      <div className="grid grid-cols-2 gap-4">
                        {['Fluffy Chair', 'Personalised Sign', 'Gold Ice Bucket', 'Fresh Blooms'].map(item => (
                          <label key={item} className="flex items-center gap-3 p-3 bg-stone-50 rounded-xl cursor-pointer hover:bg-rose/5 transition-colors group">
                            <input type="checkbox" className="w-4 h-4 rounded border-none bg-stone-200 text-rose focus:ring-rose" />
                            <span className="text-sm font-medium text-stone-600 group-hover:text-rose transition-colors">{item}</span>
                          </label>
                        ))}
                      </div>
                   </div>

                   <div>
                      <label className="block text-xs font-bold uppercase tracking-widest text-stone-500 mb-2">Specific Location Request?</label>
                      <textarea className="w-full bg-stone-50 border-none rounded-2xl p-4 focus:ring-2 focus:ring-rose/20 outline-none transition-all min-h-[100px]" placeholder="e.g. Redhead Beach overlooking the cliffs..." />
                   </div>

                   <button className="w-full bg-stone-900 text-white py-5 rounded-3xl font-bold text-lg hover:shadow-2xl transition-all hover:bg-stone-800 flex items-center justify-center gap-3 group">
                      Send Enquiry <Check className="w-6 h-6 group-hover:scale-125 transition-transform" />
                   </button>
                   
                   <p className="text-[11px] text-stone-400 text-center uppercase tracking-widest leading-relaxed px-8">
                     Submitting this form does not confirm your booking. We will be in touch within 24 hours to finalize details.
                   </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageWrapper>
  );
}
