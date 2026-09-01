// ============================================================
// veille-data.js
// Données de la veille technologique — IA & Développement
// Mise à jour manuelle — Ajoutez vos articles ici
// ============================================================

const VEILLE_LAST_UPDATE = '1er septembre 2026';
const VEILLE_SOURCES = [
  'GitHub Blog',
  'Mistral AI',
  'Commission Européenne',
  'OWASP',
  'Cloud Security Alliance',
  'Checkmarx',
  'Pradeo',
  'Le Monde Informatique',
  'ZDNet',
  'Numerama'
];

const VEILLE_ITEMS = [
  // ==========================================
  // OUTILS (copilotes, assistants, IDE)
  // ==========================================
  {
    id: 1,
    category: 'outil',
    label: 'Outil',
    date: 'Août 2026',
    title: 'GitHub Copilot : vers une intégration native dans VS Code',
    summary: 'Microsoft annonce l\'intégration native de GitHub Copilot dans Visual Studio Code, avec des fonctionnalités de complétion de code et de chat contextuel.',
    source: 'GitHub Blog',
    url: 'https://github.blog/featured/copilot/'
  },
  {
    id: 2,
    category: 'outil',
    label: 'Outil',
    date: 'Août 2026',
    title: 'Mistral AI dévoile son assistant de code Codestral',
    summary: 'La start-up française Mistral AI lance Codestral, un assistant de code basé sur l\'IA, disponible en version gratuite et payante.',
    source: 'Mistral AI',
    url: 'https://mistral.ai/codestral'
  },
  {
    id: 3,
    category: 'outil',
    label: 'Outil',
    date: 'Juillet 2026',
    title: 'Amazon CodeWhisperer : nouvelle version pour les équipes',
    summary: 'Amazon CodeWhisperer propose désormais des fonctionnalités collaboratives et un nouveau modèle de tarification pour les équipes de développement.',
    source: 'AWS Blog',
    url: 'https://aws.amazon.com/blogs/devops/codewhisperer/'
  },
  {
    id: 4,
    category: 'outil',
    label: 'Outil',
    date: 'Juin 2026',
    title: 'Tabnine : l\'IA de complétion de code s\'ouvre aux LLM open-source',
    summary: 'Tabnine étend son offre avec des modèles de langage open-source pour une plus grande transparence et personnalisation.',
    source: 'ZDNet',
    url: 'https://www.zdnet.fr/ia/tabnine-llm-open-source'
  },

  // ==========================================
  // ÉTUDES (impacts, statistiques)
  // ==========================================
  {
    id: 5,
    category: 'etude',
    label: 'Étude',
    date: 'Août 2026',
    title: 'Étude GitHub : les développeurs utilisant l\'IA sont 55% plus productifs',
    summary: 'Une étude de GitHub révèle que les développeurs utilisant des assistants IA terminent leurs tâches 55% plus rapidement et sont 45% plus satisfaits.',
    source: 'GitHub Blog',
    url: 'https://github.blog/research/'
  },
  {
    id: 6,
    category: 'etude',
    label: 'Étude',
    date: 'Juillet 2026',
    title: 'OWASP : les 10 vulnérabilités liées à l\'IA générative',
    summary: 'L\'OWASP publie une liste des 10 vulnérabilités critiques liées à l\'utilisation de l\'IA générative en développement (injection de prompts, fuite de données, etc.).',
    source: 'OWASP',
    url: 'https://owasp.org/ai-vulnerabilities/'
  },
  {
    id: 7,
    category: 'etude',
    label: 'Étude',
    date: 'Juin 2026',
    title: 'Cloud Security Alliance : l\'IA générative dans le cloud, nouveaux risques',
    summary: 'La Cloud Security Alliance publie un rapport sur les risques émergents liés à l\'utilisation des modèles d\'IA générative dans le cloud.',
    source: 'Cloud Security Alliance',
    url: 'https://cloudsecurityalliance.org/gen-ai-cloud/'
  },
  {
    id: 8,
    category: 'etude',
    label: 'Étude',
    date: 'Mai 2026',
    title: 'Étude : l\'IA réduit les bugs mais augmente la dette technique ?',
    summary: 'Une étude de Checkmarx montre que l\'IA réduit le nombre de bugs en phase de développement mais peut augmenter la dette technique à long terme.',
    source: 'Checkmarx',
    url: 'https://checkmarx.com/ai-technical-debt/'
  },

  // ==========================================
  // RISQUES (sécurité, éthique, dépendance)
  // ==========================================
  {
    id: 9,
    category: 'risque',
    label: 'Risque',
    date: 'Août 2026',
    title: 'Fuite de données via Copilot : le risque des prompts sensibles',
    summary: 'Des chercheurs mettent en garde contre la fuite de données sensibles via les prompts des assistants IA, même avec des modèles d\'entreprise.',
    source: 'Pradeo',
    url: 'https://www.pradeo.com/security/ia-data-leak'
  },
  {
    id: 10,
    category: 'risque',
    label: 'Risque',
    date: 'Juillet 2026',
    title: 'Dépendance à l\'IA : les développeurs perdent-ils leurs compétences ?',
    summary: 'Des études soulèvent la question de l\'impact de l\'IA sur les compétences fondamentales des développeurs, notamment le débogage et la conception.',
    source: 'Le Monde Informatique',
    url: 'https://www.lemondeinformatique.fr/ia-dev-skills/'
  },
  {
    id: 11,
    category: 'risque',
    label: 'Risque',
    date: 'Juin 2026',
    title: 'Injection de prompts : la nouvelle menace pour les applications IA',
    summary: 'L\'injection de prompts (prompt injection) émerge comme une nouvelle vulnérabilité majeure pour les applications intégrant des LLM.',
    source: 'OWASP',
    url: 'https://owasp.org/prompt-injection/'
  },
  {
    id: 12,
    category: 'risque',
    label: 'Risque',
    date: 'Mai 2026',
    title: 'Biais algorithmiques : les modèles d\'IA reproduisent-ils des stéréotypes ?',
    summary: 'Une étude démontre que certains modèles d\'IA de code reproduisent des biais de genre et d\'origine dans leurs suggestions.',
    source: 'Numerama',
    url: 'https://www.numerama.com/ia-biais-algorithmiques/'
  },

  // ==========================================
  // RÉGLEMENTATION (lois, normes)
  // ==========================================
  {
    id: 13,
    category: 'reglementation',
    label: 'Réglementation',
    date: 'Août 2026',
    title: 'IA Act : la loi européenne entre en vigueur pour les développeurs',
    summary: 'L\'AI Act de l\'Union Européenne entre en vigueur, imposant de nouvelles obligations aux développeurs utilisant des modèles d\'IA.',
    source: 'Commission Européenne',
    url: 'https://ec.europa.eu/ai-act-fr'
  },
  {
    id: 14,
    category: 'reglementation',
    label: 'Réglementation',
    date: 'Juillet 2026',
    title: 'RGPD et IA : la CNIL précise les règles pour les copilotes de code',
    summary: 'La CNIL publie des recommandations pour l\'utilisation des copilotes de code dans le respect du RGPD.',
    source: 'CNIL',
    url: 'https://www.cnil.fr/ia-rgpd-copilotes'
  },
  {
    id: 15,
    category: 'reglementation',
    label: 'Réglementation',
    date: 'Juin 2026',
    title: 'Propriété intellectuelle : qui possède le code généré par l\'IA ?',
    summary: 'La question de la propriété intellectuelle des codes générés par l\'IA fait débat, avec des décisions de justice qui commencent à émerger.',
    source: 'Le Monde Informatique',
    url: 'https://www.lemondeinformatique.fr/ia-propriete-intellectuelle/'
  }
];