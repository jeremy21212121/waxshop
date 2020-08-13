// Mixin for generating schema.org JSON-LD structured data for a webpage
// Importing components must have data.headData.title/description, data.breadcrumbs array and lastModified timestamp

export default {
  data() {
    return {
      siteName: "The Wax Shop Kelowna",
      baseUrl: process.env.BASE_URL || "https://waxshop.ca",
      apiBaseUrl: 'https://staff.waxshop.ca'
    };
  },
  methods: {
    generateHeadScripts(generationFunction=this.completeStructuredData) {
      return [
        {
          hid: "ld+json",
          innerHTML: JSON.stringify(generationFunction(), null, 0),
          type: "application/ld+json",
          charset: "utf-8"
        }
      ]
    },
    fullUrl(baseUrl=this.baseUrl, urlPath=this.$route.path) {
      // ensures no trailing slash, for consistency
      const regExp = /\/$/;
      const normalizedPath = `${baseUrl}${urlPath}`.replace(regExp, '');
      return normalizedPath;
    },
    orgStructuredData() {
      return {
        "@type": "HealthAndBeautyBusiness",
        "@id": this.baseUrl + "/#identity",
        name: this.siteName,
        url: this.baseUrl + "/",
        logo: {
          "@type": "ImageObject",
          "@id": this.baseUrl + "/#logo",
          inLanguage: "en-US",
          url: this.baseUrl + require("~/assets/landing_square.jpg"),
          width: 1072,
          height: 1072,
          caption: this.siteName
        },
        priceRange: "$$",
        image: { "@id": this.baseUrl + "/#logo" },
        description: 'A clean, tranquil environment suited to both men and women in which you can relax and be sure you are receiving a superior waxing service every visit by certified wax technicians.',
        address: {
          "@type": "PostalAddress",
          streetAddress: "100-2689 Pandosy Street",
          addressLocality: "Kelowna",
          addressRegion: "BC",
          postalCode: "V1Y9V9",
          addressCountry: "Canada"
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: "49.8665247",
          longitude: "-119.4932158"
        },
        hasMap:
          "https://www.google.ca/maps/place/The+Wax+Shop+-+Kelowna+Mission/@49.8665247,-119.4932211,17z/data=!3m1!4b1!4m5!3m4!1s0x537d8b316df27d5f:0x47c0c77cd4252e2c!8m2!3d49.8665247!4d-119.4910271",
        // needs to be dynamically generated from our hours api endpoint. But also, we don't wan't to hold up every render with an http request
        // using nuxt middleware to cache the hours for a reasonable amount of time should work
        // openingHours:
        //   "Mo 10:00-18:00 Tu 10:00-18:00 We 10:00-18:00 Th 10:00-18:00 Fr 10:00-18:00",
        telephone: "+12368372100",
        sameAs: [
          "https://www.instagram.com/thewaxshopkelowna/",
          "https://www.facebook.com/thewaxshopkelowna"
        ]
      };
    },
    breadcrumbStructuredData() {
      return {
        "@type": "BreadcrumbList",
        "@id": this.fullUrl() + "/#breadcrumbs",
        itemListElement: this.breadcrumbs.map((obj, bcIndex) => ({
          "@type": "ListItem",
          position: bcIndex + 1,
          name: obj.title,
          item: this.baseUrl + obj.path
        }))
      };
    },
    websiteStructuredData() {
      return {
        "@type": "WebSite",
        "@id": this.baseUrl + "/#website",
        url: this.baseUrl + "/",
        name: "The Wax Shop Kelowna",
        description: "The Place for Waxing in Kelowna",
        publisher: { "@id": this.baseUrl + "/#identity" },
        inLanguage: "en-US"
      };
    },
    webpageStructuredData(fullUrl=this.fullUrl(), baseUrl=this.baseUrl, headline=this.headData.title, description=this.headData.description, lastModified=this.lastModified, isMainEntity=true, mainEntityId=null) {
      const pageId = fullUrl + "/#webpage";
      const mainEntityOfPage = isMainEntity ? pageId : mainEntityId
      return {
        "@type": "WebPage",
        "@id" : pageId,
        about: { "@id": baseUrl + "/#identity" },
        breadcrumb: { "@id": fullUrl + "/#breadcrumbs" },
        author: { "@id": baseUrl + "/#identity" },
        copyrightHolder: { "@id": baseUrl + "/#identity" },
        copyrightYear: "2019-06-06T10:10:00-07:00",
        creator: { "@id": baseUrl + "/#identity" },
        dateModified: lastModified,
        datePublished: "2019-06-06T10:10:00-07:00",
        description: description,
        headline: headline,
        image: { "@id": baseUrl + "/#logo" },
        inLanguage: "en-US",
        isPartOf: { "@id": baseUrl + "/#website" },
        mainEntityOfPage: mainEntityOfPage,
        name: headline,
        primaryImageOfPage: { "@id": baseUrl + "/#logo" },
        publisher: { "@id": baseUrl + "/#identity" },
        url: fullUrl
      };
    },
    blogStructuredData(fullUrl=this.fullUrl(), baseUrl=this.baseUrl, headline=this.headData.title, description=this.headData.description, lastModified=this.lastModified, isMainEntity=true, mainEntityId=null) {
      const pageId = fullUrl + "/#webpage";
      const mainEntityOfPage = isMainEntity ? pageId : mainEntityId
      return {
        "@type": "Blog",
        "@id": baseUrl + "/posts/#blog",
        headline: headline,
        description: description,
        dateModified: lastModified,
        datePublished: "2020-06-12T22:34:35.463Z",
        url: baseUrl + "/posts",
        mainEntityOfPage: { "@id": mainEntityOfPage },
        image: { "@id": baseUrl + "/#logo" },
        inLanguage: "en-US",
        publisher: { "@id": baseUrl + "/#identity" },
        isPartOf: { "@id": fullUrl + "/#webpage" },
      }
    },
    blogPostingStructuredData(fullUrl=this.fullUrl(), baseUrl=this.baseUrl, blogPostObject=this.currentPost, isMainEntity=true, mainEntityId=null) {
      const pageId = fullUrl + "/#post";
      const mainEntityOfPage = isMainEntity ? pageId : mainEntityId
      return {
        "@type": "BlogPosting",
        "@id": pageId,
        image: {
          "@type": "ImageObject",
          "@id": fullUrl + "/#image",
          inLanguage: "en-US",
          url: this.apiBaseUrl + blogPostObject.image.formats.large.url,
          width: 1200,
          height: 630,
          caption: this.siteName
        },
        url: fullUrl,
        headline: blogPostObject.title,
        description: blogPostObject.introText,
        dateCreated: blogPostObject.date + 'T12:00Z',
        datePublished: blogPostObject.date + 'T12:05Z',
        dateModified: blogPostObject.updated_at,
        inLanguage: "en-US",
        copyrightYear: blogPostObject.date.substring(0,4),
        copyrightHolder: { "@id": baseUrl + "/#identity" },
        contentLocation: {
          "@type": "Place",
          name: "Kelowna, BC, Canada"
        },
        author: { "@id": baseUrl + "/#identity" },
        publisher: { "@id": baseUrl + "/#identity" },
        mainEntityOfPage: mainEntityOfPage,
        keywords: "Waxing,Hair Removal,Health & Beauty",
        articleBody: blogPostObject.fullText,
        isPartOf: { "@id": baseUrl + "/posts/#blog" }
      }
    },
    completeStructuredData() {
      // for pages
      return {
        "@context": "http://schema.org",
        "@graph": [
          this.orgStructuredData(),
          this.websiteStructuredData(),
          this.breadcrumbStructuredData(),
          this.webpageStructuredData()
        ]
      };
    },
    completeBlogStructuredData() {
      return {
        "@context": "http://schema.org",
        "@graph": [
          this.orgStructuredData(),
          this.websiteStructuredData(),
          this.breadcrumbStructuredData(),
          this.webpageStructuredData(this.fullUrl(), this.baseUrl, this.headData.title, this.headData.description, this.lastModified, false, (this.baseUrl + "/posts/#blog")),
          this.blogStructuredData()
        ]
      };
    },
    completeBlogPostingStructuredData() {
      // for use in _slug.vue
      // requires this.currentPost in that page component
      const blogTitle = 'Posts from The Wax Shop Kelowna'
      const blogDescription = 'Get a feel for who we are by reading our blog posts';
      return {
        "@context": "http://schema.org",
        "@graph": [
          this.orgStructuredData(),
          this.websiteStructuredData(),
          this.breadcrumbStructuredData(),
          this.webpageStructuredData(this.fullUrl(), this.baseUrl, blogTitle, blogDescription, this.currentPost.updated_at, false, (this.fullUrl() + "/#post")),
          this.blogStructuredData(this.fullUrl(), this.baseUrl, blogTitle, blogDescription, this.currentPost.updated_at, false, (this.fullUrl() + "/#post")),
          this.blogPostingStructuredData()
        ]
      };
    }
  }
};
