const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

let navLinks = document.getElementsByTagName("a")
let i = 0
for (link of navLinks) {
  link.textContent = Object.values(siteContent['nav'])[i++]
}

// document.getElementsByTagName('a').forEach(link => link.textContent = Object.values(siteContent['nav'])[i++])

let headingText = document.querySelector("h1")
headingText.textContent = siteContent['cta']['h1']

document.querySelector('button').textContent = siteContent['cta']['button']
document.querySelector('#cta-img').setAttribute('src', siteContent['cta']['img-src'])

let h4Links = []
let pText = []

for (obj of Object.entries(siteContent)) {
  for (otherObj of Object.entries(obj[1])) {
    if (otherObj[0].includes('h4')) h4Links.push(otherObj[1])
    if (otherObj[0].includes('content')) pText.push(otherObj[1])
  }
}

i = 0
document.querySelectorAll('h4').forEach(heading => heading.textContent = h4Links[i++])

i = 0
mainText = document.querySelector('.main-content')
mainText.querySelectorAll('p').forEach(p => p.textContent = pText[i++])

document.querySelector('.middle-img').setAttribute('src', siteContent["main-content"]["middle-img-src"])

let contactInfo = Object.values(siteContent['contact'])
i = 1
contact = document.querySelector('.contact')
contact.querySelectorAll('p').forEach(p => p.textContent = contactInfo[i++])

let footer = document.querySelector('footer')
footer.querySelector('p').textContent = siteContent['footer']['copyright']