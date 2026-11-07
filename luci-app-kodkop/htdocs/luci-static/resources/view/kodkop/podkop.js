"use strict";
"require view";
"require form";
"require baseclass";
"require network";
"require view.kodkop.main as main";

// Settings content
"require view.kodkop.settings as settings";

// Sections content
"require view.kodkop.section as section";

// Dashboard content
"require view.kodkop.dashboard as dashboard";

// Diagnostic content
"require view.kodkop.diagnostic as diagnostic";

const EntryPoint = {
  async render() {
    main.injectGlobalStyles();

    // Options of features the installed sing-box does not have are not created
    const singBoxFeatures = await main.CustomKodkopMethods.getSingBoxFeatures();

    const kodkopMap = new form.Map(
      "kodkop",
      _("Kodkop Settings"),
      _("Configuration for Kodkop service"),
    );
    // Enable tab views
    kodkopMap.tabbed = true;

    // Sections tab
    const sectionsSection = kodkopMap.section(
      form.TypedSection,
      "section",
      _("Sections"),
    );
    sectionsSection.anonymous = false;
    sectionsSection.addremove = true;
    sectionsSection.template = "cbi/simpleform";

    // Render section content
    section.createSectionContent(sectionsSection, singBoxFeatures);

    // Settings tab
    const settingsSection = kodkopMap.section(
      form.TypedSection,
      "settings",
      _("Settings"),
    );
    settingsSection.anonymous = true;
    settingsSection.addremove = false;
    // Make it named [ config settings 'settings' ]
    settingsSection.cfgsections = function () {
      return ["settings"];
    };

    // Render settings content
    settings.createSettingsContent(settingsSection, singBoxFeatures);

    // Diagnostic tab
    const diagnosticSection = kodkopMap.section(
      form.TypedSection,
      "diagnostic",
      _("Diagnostics"),
    );
    diagnosticSection.anonymous = true;
    diagnosticSection.addremove = false;
    diagnosticSection.cfgsections = function () {
      return ["diagnostic"];
    };

    // Render diagnostic content
    diagnostic.createDiagnosticContent(diagnosticSection);

    // Dashboard tab
    const dashboardSection = kodkopMap.section(
      form.TypedSection,
      "dashboard",
      _("Dashboard"),
    );
    dashboardSection.anonymous = true;
    dashboardSection.addremove = false;
    dashboardSection.cfgsections = function () {
      return ["dashboard"];
    };

    // Render dashboard content
    dashboard.createDashboardContent(dashboardSection);

    // Inject core service
    main.coreService();

    return kodkopMap.render();
  },
};

return view.extend(EntryPoint);
