# ROCKI

<p align="center">
  <strong>Rust Observation, Companion & Knowledge Interface</strong>
</p>

<p align="center">
  The mobile-first companion platform for Rust Console Edition.
</p>

---

## Vision

ROCKI aims to become the definitive companion platform for **Rust Console Edition**, bringing live server intelligence, event tracking, calculators, mapping, base planning and community services into one focused mobile-first ecosystem.

Rust Console Edition players have historically relied on Discord servers, calculators, spreadsheets, websites and guesswork to gather information. ROCKI exists to bring those workflows into a single app.

---

## Current Status

**Private development**

ROCKI is currently in private use only and is being developed behind closed doors with selected testing groups, server owners and investment partners.

The public repository exists to document the project, show the deployed web presence and preserve the direction of the platform while the main product continues active development.

---

## The Story

ROCKI did not begin as ROCKI.

The earliest concept started life as a lightweight Discord bot for Rust Console Edition communities. The idea was simple: provide players with useful server information without forcing them to leave Discord.

As the idea grew, the project evolved into a far more ambitious platform and became known internally as **Seedy**.

What began as a bot quickly expanded into live event tracking, resource calculators, server utilities, mapping systems, base planning tools and community integrations.

As the project matured, development direction changed and community partnerships evolved. Rather than ending the project, development continued independently under a new identity.

That identity became **ROCKI**: **Rust Observation, Companion & Knowledge Interface**.

Today, ROCKI is being developed as an independent platform focused entirely on improving the Rust Console Edition experience.

---

## Why The Mascot?

ROCKI's mascot is inspired by Rust's most iconic item: **the rock**.

Every player starts with one.

> Every player starts with a rock.  
> ROCKI helps with everything that comes next.

The mascot represents accessibility, progression and community. It gives the product a friendly identity while still linking directly back to the world of Rust.

---

## Features

### Live Server Dashboard

The dashboard provides an immediate overview of a connected Rust Console Edition server.

It includes live population tracking, server status monitoring, gather rates, loot rates, stack multipliers, event countdowns, APC tracking, locked crate timers, ZORP controls and starter kit access.

The goal is to surface the information players usually ask for in Discord within seconds.

### Event Tracking

ROCKI tracks important server events and presents them in a clean chronological feed.

Current and planned event coverage includes:

- Chinook
- Attack Helicopter
- Bradley APC
- Locked Crates
- Supply Drops
- Cargo Ship
- Oil Rig events
- Future RCON-powered events

The real-time layer is built around Server-Sent Events, giving the PWA live updates without the overhead of a heavier socket system.

### Raid Calculator

The raid calculator is designed specifically for Rust Console Edition values and real player decision-making.

It calculates sulfur requirements, cheapest raid routes, door paths, wall paths and defensive structures including turrets, SAM Sites and shotgun traps.

The goal is not just to show a number. The calculator recommends the practical route based on cost.

### Smelting Calculator

The smelting calculator helps players estimate processing time and fuel requirements.

It supports Furnace, Large Furnace and Electric Furnace calculations, with presets, completion estimates, wood requirements and reminder support.

### Base Builder

The base builder is an experimental mobile-first Rust CE building planner.

Current features include foundation placement, wall placement, door frames, upgrade tiers, undo, redo, pan controls and piece selection.

The long-term goal is a complete mobile-first base design experience that feels natural on a phone rather than being a desktop tool squeezed onto a small screen.

### Mapping System

The mapping platform is one of the largest planned components of ROCKI.

It is designed around custom markers, shared team markers, event markers, tactical overlays, team visibility, server map integration and future live teammate tracking.

This system uses Leaflet and is being shaped around Rust Console Edition workflows rather than generic map tooling.

### ZORP

**Zoned Offline Raid Protection**

ZORP is a proprietary protection system being developed as part of the ROCKI ecosystem.

The goal is to give participating server owners configurable offline raid protection mechanics while keeping the player experience simple.

Current development includes activation controls, countdown timers, zone management, server-side administration and future token economy integration.

### Service Monitoring

ROCKI contains internal diagnostics used during development and testing.

The settings area tracks API availability, SSE connectivity, RCON status, service health and account linking so administrators and testers can immediately identify infrastructure issues.

---

## Technical Architecture

ROCKI is built as a modern Progressive Web Application.

### Frontend

- React
- Vite
- TailwindCSS
- Leaflet
- PWA install support

### Backend

- Node.js
- Express
- REST APIs
- Server-Sent Events
- RCON integration points

### Data Layer

- Prisma
- SQLite during development
- Event logs
- User/session state
- Server configuration

---

## Source Areas

| Feature | Source Area |
| --- | --- |
| Dashboard | `apps/web/src/pages/Dashboard` |
| Tools | `apps/web/src/pages/Tools` |
| Game / Map | `apps/web/src/pages/Game` |
| Builder | `apps/web/src/pages/Builder` |
| Settings | `apps/web/src/pages/Settings` |
| API | `apps/api` |
| Database | `apps/api/prisma` |

---

## Key Technical Decisions

### Server-Sent Events

ROCKI uses Server-Sent Events for live updates.

This keeps the real-time layer lightweight, mobile friendly and easier to operate than a heavier WebSocket stack for the current use case.

SSE powers event tracking, notifications, live server updates and status changes.

### Progressive Web App

ROCKI is designed as an installable app rather than a traditional website.

Players can add it to their home screen and use it with a native-app style experience on iPhone, iPad and Android.

### Mobile First

Most Rust Console Edition players use tools from a phone while actively playing.

ROCKI is designed touch-first, with large controls, simple cards and clear spacing instead of desktop layouts compressed into mobile screens.

---

## Beyond A Companion App

ROCKI is being designed as a platform rather than a single application.

Long-term objectives include:

- Multi-server support
- Team systems
- Shared mapping
- Discord integrations
- Server administration tooling
- Economy systems
- Event automation
- Premium server services
- Community features
- Advanced analytics

The current private builds represent the foundation of a much larger ecosystem.

---

## Roadmap

### In Development

- Team marker sharing
- Expanded event system
- Advanced mapping
- Additional calculators
- RCON integrations
- Server owner tooling

### Planned

- Multi-server support
- Team management
- Verification systems
- Economy integrations
- Community services
- Enhanced builder tools

---

## Why ROCKI Exists

Rust Console Edition deserves better tools.

The objective is not to replace gameplay.

The objective is to remove friction.

Less time searching.  
Less time calculating.  
Less time tabbing between apps.  
More time playing.

---

## Author

Created by **Bradley Ashton**.

Founder of LiteRECORDS, frontend developer and community builder.

---

<p align="center">
  <strong>ROCKI</strong><br>
  Rust Observation, Companion & Knowledge Interface
</p>
