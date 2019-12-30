/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

const projects = [
    {
        name: "Nature's Switch",
        subInfo: '2015/16',
        description: 'Nature’s Switch is a film which explores red light affects plants in a range of settings at different times during the day and night. Commissioned by Wellcome Collection as part of On light, May 1 – 4 2015. Awards & Screenings: Labocine, 2017, Imagine Science Festival, October 2016, NYC, USA, Shuffle Festival, July 2016, East London, UK MUBI, 2015, Shuffle Festival, August 2015 – Won best short film (‘where we are going’), ASFF, November 2015, York, UK, London Short Film Festival Jan 2016, UK',
        photos: ''
    },
    {
        name: 'The Truth about The Hague',
        subInfo: 'Galerija Miroslav Kraljevic, Zagreb – Jun 2014-Oct 2015',
        description: "Card game/installation. Part of ‘Shame on You’ cross-Balkan collaboration project. Research residency in 2014 led to new work made and exhibited as part of 'Avoiding Eye Contact' exhibition at the gallery in 2015. www.g-mk.hr",
        photos: ''
    },
    {
        name: 'CCCS – an archive',
        subInfo: 'Birmingham University / “CCCS 50 Years On” exhibition, MAC Birmingham, UK – Jan-May 2014',
        description: '6-month residency project with the archive of the Centre for Contemporary Cultural Studies. Outcomes include a pamphlet series, installation, performance-intervention, public discussion and a blog. www.cccs-anarchive.tumblr.com',
        photos: ''
    },
    {
        name: 'Shortcuts through Sønderjylland-Schleswig',
        subInfo: 'Aabenraa Artweek, Denmark – August 2013',
        description: 'Installation. Photograph series and binaural audio. Made during a residency in Denmark and Germany, www.artweek.dk',
        photos: ''
    },
    {
        name: 'Stillaphone',
        subInfo: 'Brass: Pitch, International Brass Festival, Durham – July 2013',
        description: 'Large-scale sitespecific acoustic installation, commissioned as part of a festival of brass music. www.brassfestival.co.uk',
        photos: ''
    },
    {
        name: 'Call and Response',
        subInfo: "'3 Days Without Water' exhibition, Piccadilly Place, Manchester – August 2012",
        description: 'Sound sculpture made on a mini-residency with 8 other artists in an empty retail unit for Rochdale Canal Festival.',
        photos: ''
    },
    {
        name: 'Another time in the same place at the same time in another place',
        subInfo: "Schiume Festival, Venice – June 2012",
        description: "A dramatic, site-specific 'invisible' performance that surrounds an audience of one at a time (binaural audio/sculpture), made and experienced in a Napoleonic storehouse at Forte Marghera, on the festival theme of 'conflict'.",
        photos: ''
    },
    {
        name: 'Back Stowell Street',
        subInfo: "'Borders: A Space Between', Situation Rhubarb, Newcastle – Feb 2012",
        description: 'Site-specific invisible performance/installation exploring the subject of borders, using binaural recordings and materials found from the site. Made in residence at Morden Tower, situated on the old city walls bordering Chinatown.',
        photos: ''
    },
    {
        name: 'Ambonezenbosje',
        subInfo: "'RE:P.A.I.R.' residency, PeerGrouP, Ambonezenbosje (Oldambt), Netherlands – July 2011",
        description: 'Residency resulting in collaboration with local communities on a series of short films, presented on site in the woods.',
        photos: ''
    },
    {
        name: "If we stop now, they'll crush us like bedbugs!",
        subInfo: "Wyspa Progress Foundation, Gdansk Shipyard, Poland – May 2011",
        description: 'Month-long residency culminating in a site-specific installation with multichannel soundtrack exploring the role of women in the shipyard strike of 1980 and surrounding events. www.postindustrialrevolution.eu',
        photos: ''
    },
    {
        name: 'Histoires Concrètes',
        subInfo: "'P.A.I.R.' residency, PeerGrouP, Ambonezenbosje (Oldambt), Netherlands – Nov-Dec 2010",
        description: 'Rural artist residency developing a chorography of the area and community, resulting in a composed audio work based on field recordings and a dispersed series of outdoor sculptures made of the local clay soil. www.peergroup.nl',
        photos: ''
    },
    {
        name: "If we stop now, they'll crush us like bedbugs!",
        subInfo: "Wyspa Progress Foundation, Gdansk Shipyard, Poland – May 2011",
        description: 'Month-long residency culminating in a site-specific installation with multichannel soundtrack exploring the role of women in the shipyard strike of 1980 and surrounding events. www.postindustrialrevolution.eu',
        photos: ''
    },
    {
        name: "Capillary and Casaubon’s Cabinet (Work in Progress)",
        subInfo: "'Ganze/Teile', Schuckert-Hoefe, Berlin – July-Aug 2010",
        description: 'Site-specific installations with multichannel sound for a group show in a derelict building.',
        photos: ''
    },
    {
        name: "300-room residence, sea views, great security...",
        subInfo: "Home Sweet Home, Werkstatt der Kulturen, Berlin – July 2010",
        description: 'Durational performance-installation on migration, with performer Caylin Rose Janet, who inhabited the sculpture continuously and could be viewed only from a window above.',
        photos: ''
    },
    {
        name: "Good Vibrations",
        subInfo: "GlogauAIR, Berlin – Jan-March 2010",
        description: 'A three-month residency research project exploring domestic partnership and creative collaboration, Concluded in an open studio exhibition of experimental films, sound art, textile sculptures, assemblages, and a large sound sculpture.',
        photos: ''
    },
    {
        name: "Odysseus & Penelope",
        subInfo: "tactileBOSCH, Cardiff UK – July 2009",
        description: 'Durational performance-installation devised with two dancers and five classical musicians.',
        photos: ''
    },
]

exports.createPages = async ({ actions: { createPage } }) => {
    // `getPokemonData` is a function that fetches our data
    const allProjects = await projects;
  
    // Create a page that lists all Pokémon.
    createPage({
      path: `/proj`,
      component: require.resolve("./src/pages/projects.js"), // component: require.resolve("./src/templates/all-pokemon.js"), 
      context: { allProjects },
    })
  
    // Create a page for each Pokémon.
    allProjects.forEach(project => {
      createPage({
        path: `/projects/${project.name}/`,
        component: require.resolve("./src/pages/project.js"),
        context: { project },
      })
    })
  }