---
type: PostLayout
title: How to Create and Host a Free Website Using Netlify Templates
colors: colors-a
date: '2024-06-03'
author: content/data/team/doris-soto.json
excerpt: >-
  Here’s how you can create and host a website using a free template on Netlify,
  without needing to build your website from scratch
featuredImage:
  type: ImageBlock
  url: /images/3dBwLogo-3.png
  altText: Post thumbnail image
bottomSections:
  - elementId: ''
    type: RecentPostsSection
    colors: colors-f
    variant: variant-d
    subtitle: Recent posts
    showDate: true
    showAuthor: false
    showExcerpt: true
    recentCount: 2
    styles:
      self:
        height: auto
        width: wide
        margin:
          - mt-0
          - mb-0
          - ml-0
          - mr-0
        padding:
          - pt-12
          - pb-56
          - pr-4
          - pl-4
        justifyContent: center
      title:
        textAlign: left
      subtitle:
        textAlign: left
      actions:
        justifyContent: center
    showFeaturedImage: true
    showReadMoreLink: true
  - type: ContactSection
    backgroundSize: full
    title: Stay up-to-date with my words ✍️
    colors: colors-f
    form:
      type: FormBlock
      elementId: sign-up-form
      fields:
        - name: firstName
          label: First Name
          hideLabel: true
          placeholder: First Name
          isRequired: true
          width: 1/2
          type: TextFormControl
        - name: lastName
          label: Last Name
          hideLabel: true
          placeholder: Last Name
          isRequired: false
          width: 1/2
          type: TextFormControl
        - name: email
          label: Email
          hideLabel: true
          placeholder: Email
          isRequired: true
          width: full
          type: EmailFormControl
        - name: updatesConsent
          label: Sign me up to recieve my words
          isRequired: false
          width: full
          type: CheckboxFormControl
      submitLabel: "Submit \U0001F680"
      styles:
        submitLabel:
          textAlign: center
    styles:
      self:
        height: auto
        width: narrow
        margin:
          - mt-0
          - mb-0
          - ml-4
          - mr-4
        padding:
          - pt-24
          - pb-24
          - pr-4
          - pl-4
        alignItems: center
        justifyContent: center
        flexDirection: row
      title:
        textAlign: left
      text:
        textAlign: left
---
Netlify provides free templates that allow you to quickly launch a website without coding from scratch. Follow these steps to choose and deploy a template.

### Step 1: Sign Up for a Free Netlify Account

1.  Visit [Netlify](https://www.netlify.com/).

2.  Click on **Sign up** in the top-right corner.

3.  Create an account using your preferred method (GitHub, GitLab, Bitbucket, or email).

### Step 2: Explore Free Templates

Netlify has an extensive collection of free website templates that you can use for blogs, portfolios, businesses, and more.

1.  Go to the [Netlify Templates Gallery]().

2.  Browse through the available templates to find one that fits your project’s needs.

**Example of templates you might find:**

*   **Lumen**: A minimal blog template.

*   **Victor Hugo**: A Hugo-based template for developers.

*   **Next.js Blog Starter**: A template for creating a blog with Next.js.

### Step 3: Deploy a Template

Once you’ve found a template you like, follow these steps to deploy it:

1.  Click on the **template** you want to use from the gallery.

2.  On the template page, you’ll find a button labeled **"Deploy to Netlify"**. Click on it.

### Step 4: Connect to a GitHub Repository

Netlify will prompt you to connect to your GitHub (or GitLab/Bitbucket) account to deploy the template.

1.  After clicking **"Deploy to Netlify"**, you will be redirected to authorize Netlify to access your GitHub repository.

2.  Authorize Netlify by following the prompts.

3.  Netlify will create a new repository in your GitHub account containing the template’s code.

### Step 5: Configure Build Settings

Once the repository is created, Netlify will show you the deployment settings page.

1.  Netlify will automatically detect the build command and output folder based on the template.

2.  Review the settings, and click **"Deploy site"**.

### Step 6: Wait for the Deployment to Complete

Netlify will start building your site. You can monitor the progress through the dashboard.

*   After the deployment is complete, you’ll see a message confirming the successful build.

*   Netlify will automatically assign a random URL to your website (e.g., `https://amazing-site-123.netlify.app/`).

### Step 7: Customize Your Website (Optional)

After deploying the template, you may want to customize your website.

*   **Edit content**: Go to the GitHub repository that was created, and you can edit the files (like HTML, Markdown, CSS, or JavaScript) to update your content.

*   **Use the Netlify CMS**: Some templates come integrated with Netlify CMS, allowing you to manage content without coding.

### Step 8: Add a Custom Domain (Optional)

If you want your website to have a custom domain (e.g., `yourwebsite.com`), follow these steps:

1.  In your Netlify dashboard, go to **Domain settings**.

2.  Click **Add custom domain**.

3.  Enter your domain name and follow the prompts to configure DNS settings.

4.  Netlify provides free HTTPS/SSL certificates via Let’s Encrypt, so your site will be secure.

### Step 9: Update and Deploy Changes

Each time you make changes to the website code (either locally or through GitHub), Netlify will automatically trigger a new build and deploy the updated version of your website.



### Conclusion

Using Netlify’s free hosting and templates, you can quickly deploy a beautiful website in minutes without any complex setup. You don’t need any technical expertise to get started, and you can always customize your site later as you grow. Happy hosting!

You can visit [Netlify's Templates Gallery]() to start exploring templates now!

