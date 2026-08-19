# CONTENT_GAPS.md — Century Engineering Contractors (CEC Ltd)

This file tracks every placeholder and every image that should eventually be replaced
with real CEC-supplied content. **All photography currently on the site is licence-free
stock (Unsplash), chosen to match each subject.** It is illustrative and should be
swapped for CEC's own project photography as it becomes available.

---

## A. Homepage image corrections — completed in this pass (2026-08-04)

The homepage first pass shipped with several stock images whose downloaded content did
not match the intended subject (a curation/label mix-up at download time). All homepage
slots below were re-verified against the actual pixels and corrected:

| Slot | Was showing (wrong) | Now shows (correct) |
|---|---|---|
| Logo (header + footer) | Faint stacked "C E C" ghost strip in the mark | Single clean amber square glyph "C" + "CEC / Engineering Contractors" wordmark |
| Service 02 — Power Generation | Person welding | Steel turbine gears / mechanical generation equipment (`power-generation.jpg`) |
| Service 03 — Marine & Civil | Wind turbines | Container vessel + tugboats at a port (`port-ship.jpg`) |
| Service 05 — Water & Sanitation | Lake landscape | Industrial water pipework & valves (`water-infra.jpg`) |
| Service 06 — Community Development | Electrician portrait | School classroom interior (`classroom.jpg`) |
| Service 07 — Electromechanical | Drone in a forest | Electrician installing an electrical control box (`electrical-install.jpg`) |
| Project — Port of Rubavu | Wind turbines | Port terminal quay + cranes + containers (`port-terminal.jpg`) |
| Project — Trinity Academy | White arched hallway | Multi-storey academic building exterior (`school.jpg`) |
| Project — Kisima Apartments | Toy house with keys | Modern residential apartment towers (`towers-white.jpg`) |

Homepage slots deliberately **kept** (already correct): Service 01 (transmission towers),
Service 04 (see below), Projects: Shango–Birembo (transmission towers), Keya HPPs
(reservoir), EPC HQ (office building).

---

## B. Still needing real CEC photography (image improvements)

Priority order for when CEC supplies real photos:

1. **Hero image** — brief requests Port of Rusizi photography (currently a transmission-line
   stock photo is used as the approved fallback).
2. **Service 04 — Real Estate & Housing** — currently a stock "house + keys" model
   (`apartments.jpg`). This is a real-estate cliché and was intentionally left this pass
   per instruction. Replace with a real CEC development (e.g. Kisima or Lebanon Hotel).
3. **Service 02 — Power Generation** — currently turbine-gear machinery as a stand-in for
   "turbine hall / mechanical generation equipment". Ideally replace with a real photo of
   Keya, Nkora or Cyimbili HPP (plant, dam, penstock or turbine hall). No suitable
   licence-free hydropower-plant photo was found; a real CEC photo is the right fix.
4. **Keya HPPs project card** — uses a reservoir/lake stock photo (`lake-kivu.jpg`).
   Replace with a real plant photo.
5. **All 24 project photos** — every project image site-wide is illustrative stock.
   Replace with real CEC site photography.

---

## C. Filename-vs-content mismatches to clean up in the INNER-PAGES milestone

The homepage no longer references any mismatched file (except `apartments.jpg` for
Service 04, whose alt text was corrected to describe the actual house-and-keys image).
However, the following stock files were downloaded under names that do NOT match their
actual content, and are **still referenced by services.html and projects.html** with alt
text that is now inaccurate. These pages were out of scope for this homepage milestone and
must be corrected in the inner-pages pass:

| File | Actual content | Wrongly used on inner pages as |
|---|---|---|
| `port-aerial.jpg` | Wind turbines on snowy hills | "Port" (Rubavu/Rusizi cards, service 03) |
| `electrician.jpg` | A camera drone in a forest | "Electrical / distribution" cards |
| `site-aerial-team.jpg` | Electrician portrait at a control box | "Aerial engineering team" |
| `academy.jpg` | White arched hallway/corridor | "Trinity Academy" school |
| `apartments.jpg` | Toy house with keys | "Kisima apartments" development |

Recommended cleanup: either repoint inner-page `<img src>` to the correct verified files
(`port-ship.jpg` / `port-terminal.jpg`, `electrical-install.jpg`, `school.jpg`,
`towers-white.jpg`) or re-download correct images to these filenames so the names become
truthful everywhere.

---

## D. Text / data placeholders still open

| Location | Placeholder | Needed |
|---|---|---|
| services.html — Water & Sanitation | `[PLACEHOLDER: named water supply and sanitation project reference]` | A real CEC water/sanitation project name |
| contact.html — map | `[PLACEHOLDER: confirm exact map pin for KG 436 St, Plot No. 6A]` | Exact coordinates / verified Google Maps pin |
| Hero (index.html) | Port of Rusizi hero photography | Real CEC hero image |

---

## E. Deliverables still to produce (from the original build brief)

- `DESIGN_NOTES.md` — colour tokens, fonts, breakpoints, reference-ambiguity decisions.
- `README.md` — static deployment instructions for cec.rw infrastructure.

(These were interrupted during the first build and are not part of the homepage
correction milestone; noted here so they are not forgotten.)
