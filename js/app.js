/**
 * Things I've Learned About Designing for Protest
 * AlpineJS Application Data & Logic
 */

function protestEssay() {
    return {
        heroVisible: false,

        activeHotspot: null,
        activeImage: null,
        popupOpen: false,
        popupExpanded: false,
        previouslyFocused: null,
        _savedScrollY: 0,

        images: [
            {
                id: 1,
                src: 'https://cdn.jsdelivr.net/gh/AnXh3L0/tyler-publication@main/images/terrence-worker-leader.png',
                alt: 'Stand Up KC workers in matching red shirts hold bold, coordinated protest signs at a Fight for $15 street rally',
                credit: 'photo by steve hebert',
                hotspots: [
                    {
                        id: 'h1-1', x: 40, y: 67,
                        label: 'Increases solidarity',
                        description: 'When there is careful coordination of the colors, typefaces, compositions, and messaging for the group, they become galvanized in spirit through that material and visual unification, and a shared sense of pride is created.',
                        audio: 'https://cdn.jsdelivr.net/gh/AnXh3L0/tyler-publication@main/audio/1_IncreasesSolidarity_01.ogg'
                    },
                    {
                        id: 'h1-2', x: 19, y: 82,
                        label: 'Increases credibility',
                        description: 'Viewers know when something is produced professionally and with intent, as opposed to an off-the-cuff message on cardboard. That level of "professionalism" signals the group is serious enough to consider their visual impact beforehand. They are therefore well-organized and serious about their message and goals, not just an ad-hoc group.',
                        audio: 'https://cdn.jsdelivr.net/gh/AnXh3L0/tyler-publication@main/audio/2_IncreasesCredibility_01.ogg'
                    },
                    {
                        id: 'h1-3', x: 61, y: 67,
                        label: 'Immediate public recognition',
                        description: 'From the first public action, "Stand Up KC" became known for their bright red shirts with large, slab-serif typography. It is bold, clear, and unmistakeably "Stand Up KC" coming down the street or marching into your restaurant.',
                        audio: 'https://cdn.jsdelivr.net/gh/AnXh3L0/tyler-publication@main/audio/3_ImmediatePublicRecognition_01.ogg'
                    }
                ]
            },
            {
                id: 2,
                src: 'https://cdn.jsdelivr.net/gh/AnXh3L0/tyler-publication@main/images/black-white-brown-posters.jpg',
                alt: 'Stand Up KC protesters lining a busy multi-lane road, holding large-type black, white, and brown posters visible to passing cars',
                hotspots: [
                    {
                        id: 'h2-1', x: 30, y: 38,
                        label: 'Scaling for traffic',
                        description: 'Kansas City is a car city, and drivers are the majority audience for these public actions, usually passing by at 25 to 35 mph and from 10 to 70 feet away. Most busy roads are two lanes each way, with a turn lane dividing them, so at least 50 feet wide. Very few viewers are pedestrians that might see these posters from a few feet away. This context nearly calls for billboard-like messaging.',
                        audio: 'https://cdn.jsdelivr.net/gh/AnXh3L0/tyler-publication@main/audio/4_ScalingForTraffic_01.ogg'
                    }
                ]
            },
            {
                id: 3,
                src: 'https://cdn.jsdelivr.net/gh/AnXh3L0/tyler-publication@main/images/capitol-crowd-protest.png',
                alt: 'Dense crowd of Fight for $15 supporters rallying at a capitol building, holding signs with short, bold-type messages',
                hotspots: [
                    {
                        id: 'h3-1', x: 47.5, y: 31,
                        label: 'Short message, big type',
                        description: 'Very short messages are required for a fast read. The shorter the message, the bigger you can make the type. The bigger the type, the greater the reading distance. Shorter and more direct messages are easier to remember. State your problem, demands, and/or solution in the clearest, most concise way possible without losing the spirit of the message. After the primary objective was set for a specific action and before visual design began, we spent ideation time playing with phrasing, trying to come up with the shortest words that would accurately convey the message.',
                        audio: 'https://cdn.jsdelivr.net/gh/AnXh3L0/tyler-publication@main/audio/5_ShortMessageBigType_01.ogg'
                    }
                ]
            },
            {
                id: 4,
                src: 'https://cdn.jsdelivr.net/gh/AnXh3L0/tyler-publication@main/images/hand-lettering-comparison.png',
                alt: 'Side-by-side comparison of a thin hand-lettered protest sign and a professionally typeset poster, illustrating the importance of stroke weight and legibility',
                hotspots: [
                    {
                        id: 'h4-1', x: 17, y: 15,
                        label: 'Contrast & legibility',
                        description: 'Strong figure/ground contrast and legible typography get the goods. While individual expression is certainly valid and encouraged in any protest context, a quick glance at this poster proves the importance of adequate stroke weight of letterforms. Notice it in relation to the typeset poster immediately below it. A message unread is essentially a message unwritten.',
                        audio: 'https://cdn.jsdelivr.net/gh/AnXh3L0/tyler-publication@main/audio/6_Contrast%26Legibility_01.ogg'
                    },
                    {
                        id: 'h4-2', x: 73, y: 53,
                        label: 'Quality hand lettering',
                        description: 'A simple, handmade poster can also be effective. This example shows the value of bold stroke weight in letterform and maximizing the space.',
                        audio: 'https://cdn.jsdelivr.net/gh/AnXh3L0/tyler-publication@main/audio/7_QualityHandLettering_01.ogg'
                    }
                ]
            },
            {
                id: 5,
                src: 'https://cdn.jsdelivr.net/gh/AnXh3L0/tyler-publication@main/images/march-19-rally-banner.jpg',
                alt: 'Stand Up KC March 19 rally with a wide banner and individual posters using bold condensed typography maximized within their physical dimensions',
                hotspots: [
                    {
                        id: 'h5-1', x: 29, y: 33,
                        label: 'Maximize your means',
                        description: 'The physical dimensions of a poster offer a very real constraint. Poster size, message length, and type size and all are in relation to one another. Are people driving by the event, walking by, or stopping to watch? Will the media be there, offering a few additional seconds for viewers to see/read messages on the news? Those factors each afford differing levels of message length and type size.',
                        audio: 'https://cdn.jsdelivr.net/gh/AnXh3L0/tyler-publication@main/audio/8_MaximizeYourMeans_01.ogg'
                    },
                    {
                        id: 'h5-2', x: 43, y: 74,
                        label: 'Type choice matters',
                        description: 'Typeface choice figures into this in terms of scale, consistency of use [if you are working with a visual identity or a campaign], condensed vs extended widths [how a typeface works within the space], and overall legibility. We opted for a bold [but not "black"] weight, condensed face because it created a visually loud presence on the poster and was perceived as larger within the space, while allowing room to pack in more letters horizontally. Sometimes this can present as many problems as opportunities. The point is to try out options for the spaces you are working with. An ideal scenario might be a variable typeface with options for set-width and weight, so "fit" within a space can be adjusted on the fly.',
                        audio: 'https://cdn.jsdelivr.net/gh/AnXh3L0/tyler-publication@main/audio/9_TypeChoiceMatters_01.ogg'
                    }
                ]
            },
            {
                id: 10,
                src: 'https://cdn.jsdelivr.net/gh/AnXh3L0/tyler-publication@main/images/large-type-sequence.jpg',
                alt: 'Workers each holding single-letter blackline prints on cardboard, collectively spelling out a message across multiple low-cost posters',
                hotspots: [
                    {
                        id: 'h10-1', x: 47, y: 47,
                        label: 'Constraints as opportunity',
                        description: 'These particular posters are printed for about $3 a sheet as black and white prints at a blueprint shop [called "blackline prints" on cheap bond paper] and spray-mounted to cardboard to add rigidity. This was an early strategy we learned to maximize the scale – spread the message across multiple, smaller pieces – and minimize the expense. Standardized sizes are cheaper to print than custom, and obviously 11 x 17 will be cheaper than moving to large-format printing. It\'s also a good example of turning a constraint into a creative opportunity – can\'t fit the message effectively on one poster? Spread it out over a bunch of them! Of course doing it letter-by-letter requires group coordination to get it right.',
                        audio: 'https://cdn.jsdelivr.net/gh/AnXh3L0/tyler-publication@main/audio/10_ConstraintsAsOpportunity_01.ogg'
                    }
                ]
            },
            {
                id: 6,
                src: 'https://cdn.jsdelivr.net/gh/AnXh3L0/tyler-publication@main/images/materiality-posters.png',
                alt: 'Stand Up KC workers raising silkscreened union posters overhead at a Labor Day strike, showing the durability and scale of hand-held protest materials',
                credit: 'photo by suzanne corum-rich',
                hotspots: [
                    {
                        id: 'h6-1', x: 17, y: 18,
                        label: 'Go overhead',
                        description: 'Our posters are mostly hand-held, overhead or in front of the body. Only on rare occasions did we use poles or sticks to elevate the posters, which is a great way to literally stand above the crowd and possibly increase viewing distance.',
                        audio: 'https://cdn.jsdelivr.net/gh/AnXh3L0/tyler-publication@main/audio/11_GoOverhead_01.ogg'
                    },
                    {
                        id: 'h6-2', x: 76, y: 43,
                        label: 'Durability and wind',
                        description: 'Poster stock must be durable to maintain shape at least through the end of your event. We had the means to silkscreen most of our posters at 2\' x 3\' size onto nice cardstock, but re-using them was a must, due to their expense. The posters need to withstand wind, but not be unwieldy to carry. Some participants have complained over the years, however, about the weight of our posters when they hold them over their heads.',
                        audio: 'https://cdn.jsdelivr.net/gh/AnXh3L0/tyler-publication@main/audio/12_Durability%26Wind_01.ogg'
                    }
                ]
            },
            {
                id: 7,
                src: 'https://cdn.jsdelivr.net/gh/AnXh3L0/tyler-publication@main/images/media-flow-protest.jpg',
                alt: 'Collage showing Stand Up KC protest signs reproduced across newspaper, television, and social media, illustrating how messages travel beyond the street',
                hotspots: [
                    {
                        id: 'h7-1', x: 44, y: 24,
                        label: 'Make it big, clear, & complete',
                        description: 'Typographic scale and image resolution play an important role in reproduction. The basic tenets when considering the small spaces of the screen are "make it big", "make it clear", and "make it complete." This ties back to the messaging piece – notice the maximum phrase is still short and only a few words per line. Ideas are visually broken into very small chunks for an immediate read. With photo sets on social media, it becomes possible to build a more complex narrative over the course of multiple photos within one post. No need to cram every idea into one poster or one photograph.',
                        audio: 'https://cdn.jsdelivr.net/gh/AnXh3L0/tyler-publication@main/audio/13_MakeItBigClear%26Complete_01.ogg'
                    }
                ]
            },
            {
                id: 11,
                src: 'https://cdn.jsdelivr.net/gh/AnXh3L0/tyler-publication@main/images/transit-print-to-digital.png',
                alt: 'Stand Up KC transit posters adapted into animated social media graphics, extending the physical protest message into digital platforms',
                hotspots: [
                    {
                        id: 'h11-1', x: 57, y: 45,
                        label: 'Consistency across media',
                        description: 'Building on the "mediated protest" concept, we learned that we can extend the physical protest into virtual space, simply by posting adaptations of the physical posters. Very similar principles apply online as in a car-centric, "drive-by protest" context. But new affordances also bubble up – the internet allows for meaningful animation of messages through simple gifs made in photoshop. You could post videos of the event itself or add sound to your animated posters – music, voice, or sound effects – to reinforce the visuals or expand on the message.',
                        audio: 'https://cdn.jsdelivr.net/gh/AnXh3L0/tyler-publication@main/audio/14_ConsistencyAcrossMedia_01.ogg'
                    }
                ]
            },
            {
                id: 8,
                src: 'https://cdn.jsdelivr.net/gh/AnXh3L0/tyler-publication@main/images/multiple-signs-mo-motto.jpg',
                alt: 'Rally with multiple coordinated Stand Up KC signs, each carrying a distinct but cohesive message, unified by a large overarching banner',
                credit: 'photo by suzanne corum-rich',
                hotspots: [
                    {
                        id: 'h8-1', x: 38, y: 61,
                        label: 'Coordinate phrasing',
                        description: 'We learned that if we had multiple demands or solutions within our larger issue, it was still possible to communicate those. There\'s no need to reduce it down to a single message repeated on a hundred posters. Each message can be succinctly expressed on its own poster, or even across multiple posters, but those messages need to be coordinated carefully to add up to a cohesive whole. A banner often contained the overarching sentiment of the action or campaign. It\'s best to try and keep one thought to a self-contained frame, avoiding the need to control sequencing or placement of people – that\'s a recipe for disaster.',
                        audio: 'https://cdn.jsdelivr.net/gh/AnXh3L0/tyler-publication@main/audio/15_CoordinatePhrasing_01.ogg'
                    }
                ]
            },
            {
                id: 9,
                src: 'https://cdn.jsdelivr.net/gh/AnXh3L0/tyler-publication@main/images/mcdonalds-strike-you-cant-hide.jpg',
                alt: 'Workers at a McDonald\'s action holding tiled 11x17 posters that combine complementary text and image across separate sheets',
                hotspots: [
                    {
                        id: 'h9-1', x: 39, y: 36,
                        label: 'Complementary image & text',
                        description: 'Knowing there will be many people at an action, we maximized the space of a relatively cheap 11 x 17 print, tiling the message and image across two pieces. Placement within the group did not matter, because each poster communicated a very similar thought through two distinct channels – text and image.',
                        audio: 'https://cdn.jsdelivr.net/gh/AnXh3L0/tyler-publication@main/audio/16_ComplementaryImage%26Text_01.ogg'
                    }
                ]
            },
            {
                id: 12,
                src: 'https://cdn.jsdelivr.net/gh/AnXh3L0/tyler-publication@main/images/protest-shirts-combined.png',
                alt: 'Stand Up KC t-shirts displaying the group name on the front and a core value message on the back, ensuring visibility from every direction',
                credit: 'left: photo by steve hebert',
                hotspots: [
                    {
                        id: 'h12-1', x: 73, y: 48,
                        label: 'Utilize front and back',
                        description: 'The Stand Up KC shirts were one of the very first things we made, and even then, we were maximizing the printable space by naming the group on the front, and adding a core value message on the back. No matter what way people are facing in the context of an action, viewers are being sent a message, and both messages would be seen in close proximity to one another.',
                        audio: 'https://cdn.jsdelivr.net/gh/AnXh3L0/tyler-publication@main/audio/17_UtilizeFront%26Back_01.ogg'
                    }
                ]
            },
            {
                id: 13,
                src: 'https://cdn.jsdelivr.net/gh/AnXh3L0/tyler-publication@main/images/participatory-fill-in-posters.png',
                alt: 'Collection of participatory fill-in-the-blank posters where workers have handwritten their personal stories into pre-designed Stand Up KC templates',
                hotspots: [
                    {
                        id: 'h13-1', x: 48, y: 55,
                        label: 'Personal stories matter',
                        description: 'Participatory fill-in-the-blank posters give the opportunity for personalized stories to be shared on social media. Anecdotal feedback tells me that directly reading workers\' stories is what leaves the strongest impression.',
                        audio: 'https://cdn.jsdelivr.net/gh/AnXh3L0/tyler-publication@main/audio/18_PersonalStoriesMatter_01.ogg'
                    }
                ]
            },
            {
                id: 14,
                src: 'https://cdn.jsdelivr.net/gh/AnXh3L0/tyler-publication@main/images/fill-in-large-poster.png',
                alt: 'Close-up of a fill-in-the-blank poster showing pre-set Stand Up KC typography framing space for a worker\'s handwritten personal story',
                hotspots: [
                    {
                        id: 'h14-1', x: 49, y: 48,
                        label: 'Plan space for the story',
                        description: 'The pre-set, on-brand typography signals that this is from "Stand Up KC". The scale of typography and allocation of space was carefully planned to sequence information clearly, and try to maintain some level of control over story length, but people are gonna be people, which comes with the territory of participatory design. My personal hope was that people would know that they needed to write in big, bold letters, and maybe take some cues from the type sizes of the pre-written components. At the end of the day, workers sharing their authentic stories and identity as human beings is always the most impactful.',
                        audio: 'https://cdn.jsdelivr.net/gh/AnXh3L0/tyler-publication@main/audio/19_PlanSpaceForTheStory_01.ogg'
                    }
                ]
            },
            {
                id: 15,
                src: 'https://cdn.jsdelivr.net/gh/AnXh3L0/tyler-publication@main/images/mcpoverty-imagery.png',
                alt: 'Protest poster series using Ronald McDonald\'s iconic hands and hair as indexical imagery to implicate the corporation without depicting it directly',
                hotspots: [
                    {
                        id: 'h15-1', x: 58, y: 90,
                        label: 'Give a visual hint',
                        description: 'Indexical images [something closely associated with the concept, but not the concept itself], or images using synecdoche [a part representing a whole] worked great for poking at McDonalds. I could use Ronald\'s hands, or hair, and not totally telegraph the meaning. That still leaves a second for the "aha" moment, so people make their own connection about who the wage-stealing or sexual harassment villian is.',
                        audio: 'https://cdn.jsdelivr.net/gh/AnXh3L0/tyler-publication@main/audio/20_GiveAVisualHint_01.ogg'
                    }
                ]
            },
            {
                id: 16,
                src: 'https://cdn.jsdelivr.net/gh/AnXh3L0/tyler-publication@main/images/fast-food-strike-hebert-steve.png',
                alt: 'Illustrated portraits of civil rights leaders on protest signs at a fast food strike, linking the current struggle to historically revered movements',
                credit: 'photo by steve hebert',
                hotspots: [
                    {
                        id: 'h16-1', x: 65, y: 45,
                        label: 'Honor heroes, target villians',
                        description: 'Sometimes, an illustrated or photographic portrait is the best answer when you want to show reverence for your subject or take a more "evidence-based" or logical approach. In our case, images of past civil rights leaders link the current struggle to historically revered ones. It also adds to extrinsic ethos [the reputation of the "speakers" or group outside of what they may say or do at that event]. Always know that illustration is powerful in that the technique employed can shift the conversation in a million ways, from exalted reverence to stylized attitude, to outright mockery of a subject.',
                        audio: 'https://cdn.jsdelivr.net/gh/AnXh3L0/tyler-publication@main/audio/21_HonorHeroesTargetVillains_01.ogg'
                    }
                ]
            }
        ],

        openHotspot(image, hotspot, event) {
            this.previouslyFocused = document.activeElement;
            this.activeImage = image;
            this.activeHotspot = hotspot;
            this._savedScrollY = window.scrollY;
            document.documentElement.classList.add('popup-scroll-lock');
            document.body.style.top = `-${this._savedScrollY}px`;
            this.popupOpen = true;
            this.$nextTick(() => {
                requestAnimationFrame(() => { this.popupExpanded = true; });
            });
        },

        closeHotspot() {
            if (window._activeAudioPlayer) {
                window._activeAudioPlayer.pauseAudio();
                window._activeAudioPlayer = null;
            }
            this.popupExpanded = false;
            setTimeout(() => {
                this.popupOpen = false;
                this.activeHotspot = null;
                this.activeImage = null;
                document.documentElement.classList.remove('popup-scroll-lock');
                document.body.style.top = '';
                window.scrollTo(0, this._savedScrollY || 0);
                if (this.previouslyFocused) {
                    this.previouslyFocused.focus();
                    this.previouslyFocused = null;
                }
            }, 350);
        },

        init() {
            setTimeout(() => { this.heroVisible = true; }, 100);
            document.addEventListener('keydown', (e) => {
                if (e.key === 'Escape' && this.activeHotspot) this.closeHotspot();
            });
            this.initScrollEngine();
        },

        initScrollEngine() {
            const els = document.querySelectorAll('[data-scroll]');
            if (!els.length) return;
            const tracked = Array.from(els);
            let scrolling = false;
            let rafId = null;

            const update = () => {
                const vh = window.innerHeight;
                const start = vh * 1.0;
                const end = vh * 0.25;
                for (let i = 0, len = tracked.length; i < len; i++) {
                    const el = tracked[i];
                    const top = el.getBoundingClientRect().top;
                    let p;
                    if (top >= start) p = 0;
                    else if (top <= end) p = 1;
                    else p = 1 - (top - end) / (start - end);
                    el.style.setProperty('--scroll-progress', p < 0 ? 0 : p > 1 ? 1 : p);
                }
                if (scrolling) rafId = requestAnimationFrame(update);
            };

            update();

            let timer = null;
            window.addEventListener('scroll', () => {
                if (!scrolling) { scrolling = true; rafId = requestAnimationFrame(update); }
                clearTimeout(timer);
                timer = setTimeout(() => { scrolling = false; cancelAnimationFrame(rafId); update(); }, 200);
            }, { passive: true });

            window.addEventListener('resize', () => { update(); }, { passive: true });
        }
    };
}

window._activeAudioPlayer = null;

function audioPlayer() {
    return {
        audio: null,
        playing: false,
        duration: 0,
        currentTime: 0,
        progress: 0,
        loaded: false,
        _raf: null,
        _scrubBar: null,

        loadAudio(src) {
            if (!src) return;
            try {
                this.audio = new Audio(src);
                this.audio.preload = 'metadata';
                this.audio.addEventListener('loadedmetadata', () => {
                    if (!this.audio) return;
                    this.duration = this.audio.duration;
                    this.loaded = true;
                });
                this.audio.addEventListener('ended', () => {
                    if (!this.audio) return;
                    this.playing = false;
                    this.currentTime = this.duration;
                    this.progress = 100;
                    cancelAnimationFrame(this._raf);
                    if (window._activeAudioPlayer === this) window._activeAudioPlayer = null;
                });
                this.audio.addEventListener('error', () => {
                    if (!this.audio) return;
                    this.playing = false;
                    this.loaded = false;
                    cancelAnimationFrame(this._raf);
                });
                if (this.audio.readyState >= 1) {
                    this.duration = this.audio.duration;
                    this.loaded = true;
                }
            } catch (e) {
                this.audio = null;
            }
        },

        _tick() {
            if (!this.audio || !this.playing) return;
            this.currentTime = this.audio.currentTime;
            this.progress = this.duration > 0 ? (this.currentTime / this.duration) * 100 : 0;
            this._raf = requestAnimationFrame(() => this._tick());
        },

        togglePlay() {
            if (!this.audio) return;
            if (this.playing) {
                this.audio.pause();
                this.playing = false;
                cancelAnimationFrame(this._raf);
                if (window._activeAudioPlayer === this) window._activeAudioPlayer = null;
            } else {
                if (window._activeAudioPlayer && window._activeAudioPlayer !== this) {
                    window._activeAudioPlayer.pauseAudio();
                }
                this.audio.play().catch(() => {});
                this.playing = true;
                window._activeAudioPlayer = this;
                this._tick();
            }
        },

        pauseAudio() {
            if (!this.audio) return;
            this.audio.pause();
            this.playing = false;
            cancelAnimationFrame(this._raf);
        },

        seek(event) {
            if (!this.audio || !this.duration) return;
            const bar = this._scrubBar || event.currentTarget;
            const rect = bar.getBoundingClientRect();
            const clientX = event.clientX != null ? event.clientX
                : (event.touches?.[0]?.clientX ?? event.changedTouches?.[0]?.clientX);
            if (clientX == null) return;
            const pct = Math.max(0, Math.min(1, (clientX - rect.left) / rect.width));
            this.audio.currentTime = pct * this.duration;
            this.currentTime = this.audio.currentTime;
            this.progress = pct * 100;
        },

        startScrub(event) {
            if (!this.audio || !this.duration) return;
            this._scrubBar = event.currentTarget;
            this.seek(event);
            const onMove = (e) => { e.preventDefault(); this.seek(e); };
            const onUp = () => {
                document.removeEventListener('mousemove', onMove);
                document.removeEventListener('mouseup', onUp);
                document.removeEventListener('touchmove', onMove);
                document.removeEventListener('touchend', onUp);
                this._scrubBar = null;
            };
            document.addEventListener('mousemove', onMove);
            document.addEventListener('mouseup', onUp);
            document.addEventListener('touchmove', onMove, { passive: false });
            document.addEventListener('touchend', onUp);
        },

        formatTime(s) {
            if (!s || isNaN(s)) return '0:00';
            const m = Math.floor(s / 60);
            const sec = Math.floor(s % 60);
            return m + ':' + (sec < 10 ? '0' : '') + sec;
        },

        destroy() {
            cancelAnimationFrame(this._raf);
            if (this.audio) { this.audio.pause(); this.audio = null; }
            if (window._activeAudioPlayer === this) window._activeAudioPlayer = null;
        }
    };
}
