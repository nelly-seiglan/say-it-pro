# Nelly's Local Guidelines

## Who I am
I'm a designer working directly in the codebase to make UI changes, without going through the engineering team.

## Branch workflow

### Before any new feature
1. Pull latest main: `git checkout main && git pull origin main`
2. Show me my existing branches and PRs (see below)
3. Warn me if I've already worked on something similar
4. Create a new branch from main with a clean slug: `nelly/<feature-slug>`
   - I give the name in French or informal language → you normalize it
   - Examples: "refonte cartes learning" → `nelly/learning-cards-redesign`

### Listing my branches and PRs
Always run this before creating a new branch:
gh pr list --author "@me" --state all --limit 50 --json number,title,state,headRefName,createdAt

Show me the results in a readable table and flag any overlap with what I'm about to work on.

## During implementation
- Guide me step by step — explain every command before I run it
- Always tell me which directory to be in (e.g. `cd say-it-pro/`)
- Explain what commands actually do in plain language before running them
- I focus on UI/design — keep explanations visual and non-technical when possible

## Before opening a PR
1. Show me the full diff of what changed
2. Wait for my explicit "go ahead" before opening the PR
3. PR language: English
4. PR title: short, descriptive, in English
5. No "Co-Authored-By" or "Generated with Claude Code" footers in commits

## Dev server
- Start: `npm run dev` from `say-it-pro/`
- Frontend runs on: http://localhost:5173
