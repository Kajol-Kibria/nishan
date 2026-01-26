import Link from 'next/link'
import React from 'react'
import { FaExternalLinkAlt, FaBook, FaUser, FaCalendarAlt, FaFileAlt, FaRegBuilding, FaUniversity, FaQuoteRight } from 'react-icons/fa'

const publications = [
    {
        id: 'cassia-fistula-keap1-2025',
        title:
            'Hepatoprotective effects of a Cassia fistula fruit extract and molecular insights into its phytoconstituents’ interactions with Keap1',
        authors:
            'BM Faysal Ahmed, Ariful Islam, Muaz Faruque, As-Sazzad Mahmud, Md Monirul Islam, Veronique Seidel, Md Afjalus Siraj',
        publicationDate: '2025-08-13',
        journal: 'Pharmacological Research-Natural Products',
        pages: '100341',
        publisher: 'Elsevier',
        citedBy: 1,
        link: 'https://www.sciencedirect.com/science/article/abs/pii/S2950199725002010',
    },
    {
        id: 'magnolia-champaca-2025',
        title:
            'Analytical and biological assessment of Magnolia champaca L. stem bark: Integrating ATR-FTIR, GC–MS, thrombolytic activity, brine shrimp lethality and molecular docking',
        authors:
            'Md Mahadi Hasan, As-Sazzad Mahmud Nishan, Most Humayra Binta Rashid, Bijoy Chandra Ghos, Jaytirmoy Barmon',
        publicationDate: '2025-06-01',
        journal: 'Journal of Genetic Engineering and Biotechnology',
        volume: '23',
        issue: '2',
        pages: '100505',
        publisher: 'Elsevier',
        citedBy: 4,
        link: 'https://www.sciencedirect.com/science/article/pii/S1687157X25000496',
    },
    {
        id: 'physalis-angulata-2024',
        title: 'Evaluation of Therapeutic Activity of Physalis angulata (In Vitro Studies)',
        authors: 'Rahul Dev Bairagi',
        publicationDate: '2024-01-01',
        journal: 'Journal of Medicinal Natural Products',
        citedBy: 3,
        link: 'https://d1wqtxts1xzle7.cloudfront.net/122756572/Evaluation_of_Therapeutic_Activity_of_Physalis_angulata_In_Vitro_Studies_-libre.pdf?1747039308=&response-content-disposition=inline%3B+filename%3DEvaluation_of_Therapeutic_Activity_of_Ph.pdf&Expires=1769430935&Signature=CtCo1il0bMCn81ULBifHnWK6WT7zBc0ODM2vY2yDroGazWBUuf0lje7vQQ54H9O-M3opSLR3Vs6nYdAFJKi30B6DwR31JHa0bgCDf~jdQrO~IjDpTuTXTkrrB3kG9BqrLWkWOW-48dUxIW1yS26KeSuRAQsKcMwPYQ4HJfGnv3Oj5tg7CA018xCJmsZqgiVXViKIfW1MIqSRkJ1gM9Mf9E6OWwmCq8dci6fBfSwuoZ1matAgMKcnyNuGOd0CS-stRC0EOFZZuyEocAZx2k5jjIhwhDPHpVDaILVpJRsDsOaHoODhhKkuy5LS2cBsC4l0RwKzuaQ8SpYDciIJq8k6ew__&Key-Pair-Id=APKAJLOHF5GGSLRBV4ZA',
    },
    {
        id: 'aegiceras-endophytic-fungus-2025',
        title:
            'In Vitro Activity of Isolated Bioactive Metabolites from Endophytic Fungus Associated with Aegiceras corniculatum',
        authors:
            'Sharika Noshin, Rahul Dev Bairagi, Sadia Airin, Dipa Debnath, As-Sazzad Mahmud, Md Sohahur Rahaman, Amit Kumar Acharzo, Raiyan Rahman Reon, Md Amirul Islam',
        publicationDate: '2025-02-07',
        journal: 'Journal of Medicinal Natural Products',
        pages: '100003-100003',
        citedBy: 2,
        link: 'https://scholar.google.com/scholar?cluster=8348224517317001675&hl=en&oi=scholarr',
    },
    {
        id: 'premna-esculanta-2025',
        title:
            'Bioactive Potential of Premna esculanta: A Study on Antioxidant, Antimicrobial and Antidiarrheal Efficacy',
        authors: 'Hafijul Yousuf, Md Shawon Miah, Md Foyzur Rahman, As-Sazzad Mahmud',
        publicationDate: '2025-01-10',
        journal: 'Journal of Medicinal Natural Products',
        volume: '2',
        issue: '1',
        pages: '100001',
        publisher: 'Sclight Press',
        citedBy: 1,
        link: 'https://media.sciltp.com/articles/sciltp/703/pdf/678871747c923.pdf',
    },
    {
        id: 'ficus-benjamina-2025',
        title: 'Pharmacological Investigation of the Active Fractions of Ficus benjamina Leaf Extract',
        authors:
            'As-Sazzad Mahmud, Israt Jahan Meem, Md Rabbi Hasan, Md Mohiuddin Maruf, Ariful Islam, Mst Sharmin Akter',
        publicationDate: '2025-07-14',
        journal: 'Journal of Medicinal Natural Products',
        volume: '2',
        issue: '3',
        pages: '100015',
        publisher: 'Sclight Press',
        link: 'https://media.sciltp.com/articles/2507000961/2507000961.pdf',
    },
    {
        id: 'heritiera-fomes-2025-short',
        title: 'Comparative Pharmacological Evaluation of Mangrove Plant Heritiera Fomes and Associated Fungus',
        authors:
            'Rahul Dev Bairagi, Amit Kumar Acharzo, Sharika Noshin, Sadia Airin, Md. Sohahur Rahaman, As-Sazzad Mahmud, Dipa Debnath, Raiyan Rahman Reon, Md. Iqbal Ahmed, Md. Amirul Islam',
        publicationDate: '2025-03-06',
        link: '',
    },
    {
        id: 'heritiera-fomes-2025-adv',
        title: 'Comparative Pharmacological Evaluation of Mangrove Plant Heritiera Fomes and Associated Fungus, Adv',
        authors: 'RD Bairagi, AK Acharzo, S Noshin, S Airin, MS Rahaman, AS Mahmud, D Debnath, RR Reon, MA Islam',
        publicationDate: '2025',
        journal: 'J. Chem. B: Nat. Prod. Med. Chem',
        volume: '7',
        pages: '23-37',
        link: 'd1wqtxts1xzle7.cloudfront.net/122737760/AJCB_Volume_7_Issue_1_Pages_23_37-libre.pdf',
    },
    {
        id: 'chenopodium-album-ssrn',
        title:
            'Antihyperlipidemic Activity of Chenopodium Album in High Carbohydrate High Fat Diet Induced Obese Rat Model',
        authors: 'Razina Rouf',
        journal: 'Available at SSRN 5166334',
        link: 'https://papers.ssrn.com/sol3/papers.cfm?abstract_id=5166334',
    },
]

function Field({ icon, label, value, strong }) {
    if (!value) return null
    return (
        <div className="flex items-baseline md:items-center gap-2 text-sm min-h-9">
            {icon && <span className="text-primary shrink-0">{icon}</span>}
            <span className="text-[#7fae92] min-w-[83px] text-xs md:text-sm font-semibold shrink-0">{label}:</span>
            <span className={`${strong ? "font-semibold text-[#18362c]" : "text-[#153626]/90"}`}>{value}</span>
        </div>
    )
}

function ViewButton({ link }) {
    if (!link) {
        return (
            <button
                type="button"
                disabled
                className="rounded-md bg-[#ecfaef] px-7 py-2.5 text-sm text-[#aacbc2] cursor-not-allowed"
                title="No link provided"
            >
                View
            </button>
        );
    }
    return (
        <Link
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center btn"
        >
            <FaExternalLinkAlt className="mr-2 text-xs" />
            View
        </Link>
    );
}

export default function OurResearch() {
    return (
        <div className="mx-auto max-w-5xl pt-32 pb-10 px-4 sm:px-6 lg:px-8">
            <section className="mb-12">
                <div className="flex flex-col items-center justify-center text-center space-y-2">
                    <h1 className="text-3xl md:text-4xl font-bold text-[#18362c] leading-tight">Our Publications</h1>
                    <p className="text-primary/70 max-w-lg text-sm md:text-base">
                        Explore the latest scholarly works, original research and peer-reviewed publications from Nishan Research Lab.
                    </p>
                    <div className="w-16 border-b-2 border-primary mx-auto mt-2"></div>
                </div>
            </section>
            <div className="space-y-6">
                {publications.map((p) => (
                    <article
                        key={p.id}
                        className="bg-white border border-primary/40 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-200 px-6 py-5 relative"
                    >
                        {/* "New" flag for recent papers */}
                        {p.publicationDate && new Date(p.publicationDate) > new Date(Date.now() - 1000 * 60 * 60 * 24 * 180) && (
                            <span className="absolute top-3 right-4 bg-orange-400/90 text-xs text-white rounded px-2 py-0.5 font-medium shadow">New</span>
                        )}
                        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 md:gap-5">
                            <div>
                                <h2 className="text-lg md:text-xl font-bold text-[#254431] mb-1 flex items-center gap-2">
                                    {p.title}
                                </h2>
                                <div className="flex flex-col gap-1.5 pt-4">
                                    <Field icon={<FaUser />} label="Authors" value={p.authors} />
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2">
                                        <Field icon={<FaCalendarAlt />} label="Date" value={p.publicationDate} />
                                        <Field icon={<FaBook />} label="Journal" value={p.journal} strong />
                                        <Field icon={<FaRegBuilding />} label="Publisher" value={p.publisher} />
                                        <Field icon={<FaUniversity />} label="Volume" value={p.volume} />
                                        {/* <Field icon={<FaFileAlt />} label="Issue" value={p.issue} /> */}
                                        <Field icon={<FaFileAlt />} label="Pages" value={p.pages} />
                                        <Field icon={<FaQuoteRight />} label="Cited by" value={typeof p.citedBy === 'number' ? p.citedBy : undefined} />
                                    </div>
                                </div>
                            </div>
                            <div className="mt-3 md:mt-0 shrink-0 flex items-center">
                                <ViewButton link={p.link} />
                            </div>
                        </div>
                    </article>
                ))}
            </div>
            <div className="text-center mt-12">
                <p className="text-[#7fae92] text-xs md:text-sm">Last updated: {new Date().toLocaleDateString()}</p>
            </div>
        </div>
    );
}