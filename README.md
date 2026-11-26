<p align="center">
  <img src="images/SMAIL%20Updated.svg" alt="SMAIL logo" width="360">
</p>

<h1 align="center">SMAIL Website</h1>

<p align="center">
  The website of the Saudi Medical AI Lab: <a href="https://smail.org.sa">smail.org.sa</a>
</p>

<p align="center">
  <a href="https://smail.org.sa"><img alt="Live site" src="https://img.shields.io/badge/live-smail.org.sa-cc3333.svg"></a>
  <a href="LICENSE"><img alt="License: MIT" src="https://img.shields.io/badge/code-MIT-blue.svg"></a>
  <img alt="Hosted on GitHub Pages" src="https://img.shields.io/badge/hosted%20on-GitHub%20Pages-222.svg">
</p>

## About SMAIL

SMAIL is an open, volunteer-driven research program. It connects students at Saudi universities with experienced mentors worldwide to do AI-for-health research, with the goal of producing first-author papers. The program is supervised by the Saudi Data and AI Authority (SDAIA).

This repo is the public website: the home page, mentors, students, staff, board, news, publications, FAQ, and the conference pages.

## How the site is built

It is a plain static site. There is no build step, no framework, and nothing to install. The site is in English and Arabic, with a language button in the menu.

```
index.html, mentors.html, students.html, ...   the pages
CSS/        styles
JS/         content.js (draws people, news and banner), i18n.js (translations), navbarScript.js
data/       the content, as simple JSON files
images/     logos and member photos
conference/ the conference microsite
```

### Content lives in `data/`

| File | What it holds |
| --- | --- |
| `people.json` | Board, staff, mentors and students, with photo, title, affiliation and cohort |
| `cohorts.json` | The cohorts and whether each is completed, ongoing or coming soon |
| `news.json` | News items, in English and Arabic |
| `site.json` | The announcement banner |

The pages read these files in the browser, so changing a file changes the page. Titles and affiliations need both English and Arabic.

## Updating the website

Most updates are made through the SMAIL team's Slack bot, which proposes the change, shows a private preview, and publishes only after an approver presses Approve. Its code is in [smail-workspace](https://github.com/Saudi-Medical-AI-Lab/smail-workspace).

You can also edit the files by hand with a pull request. See [CONTRIBUTING](.github/CONTRIBUTING.md).

## Run it on your computer

```sh
git clone https://github.com/Saudi-Medical-AI-Lab/smail.git
cd smail
python3 -m http.server 8000
```

Then open http://localhost:8000. Use a local server rather than opening the file directly, because the pages load the `data/*.json` files.

## Publishing

Everything on the `main` branch is published by GitHub Pages at smail.org.sa, usually within a minute or two. Please do not push untested changes straight to `main`.

## Contact

- Email: Saudimedicalailab@gmail.com
- LinkedIn: [Saudi Medical AI Lab](https://www.linkedin.com/company/saudi-medical-ai-lab)

## License

The website code is under the [MIT License](LICENSE). The SMAIL name, logos, member photos and written content are not covered. See [NOTICE](NOTICE).
