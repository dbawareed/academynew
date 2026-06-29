'use client'

import { useState, useRef } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { X, ZoomIn, Heart, Share2, Camera, Film, Image, Palette } from 'lucide-react'

const categories = [
  { id: 'all', label: 'الكل', icon: Image },
  { id: 'photography', label: 'تصوير', icon: Camera },
  { id: 'video', label: 'فيديو', icon: Film },
  { id: 'design', label: 'تصميم', icon: Palette },
]

const works = [
  { id: 1, category: 'photography', title: 'جمال الضوء الطبيعي', artist: 'أحمد العلي', image: 'https://images.unsplash.com/photo-1493863641943-9b68992a8d07?auto=format&fit=crop&w=600&q=80', likes: 234, type: 'image' },
  { id: 2, category: 'video', title: 'قصة مدينة', artist: 'سارة خالد', image: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=600&q=80', likes: 189, type: 'video' },
  { id: 3, category: 'design', title: 'هوية بصرية', artist: 'محمد العبدالله', image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=600&q=80', likes: 156, type: 'image' },
  { id: 4, category: 'photography', title: 'بورتريت درامي', artist: 'نورة الفهد', image: 'https://images.unsplash.com/photo-1554048612-387768052bf7?auto=format&fit=crop&w=600&q=80', likes: 312, type: 'image' },
  { id: 5, category: 'video', title: 'إعلان تجاري', artist: 'خالد السالم', image: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=600&q=80', likes: 267, type: 'video' },
  { id: 6, category: 'design', title: 'تصميم سوشيال', artist: 'فاطمة الزهراني', image: 'https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?auto=format&fit=crop&w=600&q=80', likes: 198, type: 'image' },
  { id: 7, category: 'photography', title: 'تصوير المنتجات', artist: 'أحمد العلي', image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=600&q=80', likes: 445, type: 'image' },
  { id: 8, category: 'video', title: 'وثائقي طبيعة', artist: 'سارة خالد', image: 'https://images.unsplash.com/photo-1478720568477-152d9b164e26?auto=format&fit=crop&w=600&q=80', likes: 523, type: 'video' },
  { id: 9, category: 'design', title: 'موشن جرافيك', artist: 'محمد العبدالله', image: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&w=600&q=80', likes: 167, type: 'image' },
]

export function PortfolioSection() {
  const [activeCategory, setActiveCategory] = useState('all')
  const [selectedWork, setSelectedWork] = useState<typeof works[0] | null>(null)
  const [likedWorks, setLikedWorks] = useState<number[]>([])
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const filteredWorks = activeCategory === 'all' 
    ? works 
    : works.filter(w => w.category === activeCategory)

  const toggleLike = (id: number) => {
    setLikedWorks(prev => prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id])
  }

  return (
    <section id="portfolio" className="relative py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-12"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card text-primary-400 text-sm font-medium font-arabic mb-6">
            <Image className="w-4 h-4" />
            معرض الأعمال
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 font-arabic">
            <span className="text-white">إبداعات</span>{' '}
            <span className="text-gradient">تُلهم</span>
          </h2>
        </motion.div>

        {/* Category Filter */}
        <div className="flex justify-center gap-3 mb-12 flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-medium font-arabic transition-all ${
                activeCategory === cat.id
                  ? 'bg-primary-500 text-white shadow-lg shadow-primary-500/30'
                  : 'glass-card text-gray-400 hover:text-white'
              }`}
            >
              <cat.icon className="w-4 h-4" />
              {cat.label}
            </button>
          ))}
        </div>

        {/* Masonry Grid */}
        <motion.div layout className="masonry-grid">
          <AnimatePresence mode="popLayout">
            {filteredWorks.map((work, index) => (
              <motion.div
                key={work.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="masonry-item group relative rounded-2xl overflow-hidden cursor-pointer"
                onClick={() => setSelectedWork(work)}
              >
                <div className="relative">
                  <div
                    className="w-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                    style={{ 
                      backgroundImage: `url('${work.image}')`,
                      minHeight: index % 3 === 0 ? '400px' : index % 3 === 1 ? '300px' : '350px'
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-14 h-14 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                      <ZoomIn className="w-6 h-6 text-white" />
                    </div>
                  </div>

                  <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-white font-bold text-lg font-arabic">{work.title}</h3>
                    <p className="text-gray-300 text-sm font-arabic">{work.artist}</p>
                    <div className="flex items-center gap-3 mt-2">
                      <button
                        onClick={(e) => { e.stopPropagation(); toggleLike(work.id) }}
                        className={`flex items-center gap-1 text-sm ${likedWorks.includes(work.id) ? 'text-red-400' : 'text-white'}`}
                      >
                        <Heart className={`w-4 h-4 ${likedWorks.includes(work.id) ? 'fill-current' : ''}`} />
                        {work.likes + (likedWorks.includes(work.id) ? 1 : 0)}
                      </button>
                      <button className="flex items-center gap-1 text-sm text-white">
                        <Share2 className="w-4 h-4" />
                        مشاركة
                      </button>
                    </div>
                  </div>

                  {work.type === 'video' && (
                    <div className="absolute top-4 left-4 w-10 h-10 rounded-full bg-red-500/80 flex items-center justify-center">
                      <Film className="w-5 h-5 text-white" />
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedWork && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setSelectedWork(null)}
          >
            <button
              className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
              onClick={() => setSelectedWork(null)}
            >
              <X className="w-6 h-6" />
            </button>
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="max-w-4xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <div
                className="w-full rounded-2xl bg-cover bg-center aspect-video"
                style={{ backgroundImage: `url('${selectedWork.image}')` }}
              />
              <div className="mt-4 flex items-center justify-between">
                <div>
                  <h3 className="text-white font-bold text-xl font-arabic">{selectedWork.title}</h3>
                  <p className="text-gray-400 font-arabic">{selectedWork.artist}</p>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => toggleLike(selectedWork.id)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-xl ${likedWorks.includes(selectedWork.id) ? 'bg-red-500/20 text-red-400' : 'bg-white/10 text-white'}`}
                  >
                    <Heart className={`w-5 h-5 ${likedWorks.includes(selectedWork.id) ? 'fill-current' : ''}`} />
                    {selectedWork.likes + (likedWorks.includes(selectedWork.id) ? 1 : 0)}
                  </button>
                  <button className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/10 text-white">
                    <Share2 className="w-5 h-5" />
                    مشاركة
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
