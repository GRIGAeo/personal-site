## UCFS

A first-year coursework project that also happened to be real open-source work. UCFS (Universal Context-Free Solver) sits at the intersection of context-free grammars and edge-labelled graphs: parsing, context-free path querying, static code analysis. Kotlin, Gradle, a GLL-based core with recursive state machines.

My part was not the algorithms but the infrastructure: test coverage, package publishing and CI/CD. Three GitHub Actions workflows live in the fork I worked with — documentation build, jar publishing and the test infrastructure. It is the kind of work nobody sees in the UI, but without it the project neither builds nor checks itself automatically.

Link: [the main UCFS repository](https://github.com/vkutuev/UCFS).

## miminet

miminet is a network emulator for teaching: you draw a network in the browser and it runs on a real Linux network stack, with packet animation. It is used at St Petersburg University, ITMO and other universities.

Together with coursemates I am building the part that lets AI agents triage and debug miminet networks straight from a ticket or an issue: the agent reads the task, reproduces the configuration and looks for the cause. The project is not finished, so there is no result to report yet — but the process is instructive already: reading someone else's codebase, agreeing on scope, and not breaking what already works.

Link: [the repository on SourceCraft](https://sourcecraft.dev/drag311/miminet).

## Rust and somebody else's filesystem

I spent some time with chunkfs, a Rust filesystem built to compare deduplication algorithms. My contribution there was small, honestly: more reading than writing. Still, it showed me what code looks like when a mistake costs lost data rather than an awkward interface.

## The takeaway

Infrastructure is a product too. Tests, CI and package publishing do not look impressive, but they decide whether a project can be trusted.
