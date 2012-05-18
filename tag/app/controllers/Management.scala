package controllers

import com.gu.management.play.ManagementController
import com.gu.management.logback.LogbackLevelPage
import com.gu.management._
import conf.{ Metrics, Switches, Configuration }

object Management extends ManagementController {

  lazy val pages = List(
    new ManifestPage,
    new HealthcheckManagementPage,
    new Switchboard(Switches.all),
    StatusPage("frontend-tag", Metrics.all),
    new PropertiesPage(Configuration.toString),
    new LogbackLevelPage
  )
}