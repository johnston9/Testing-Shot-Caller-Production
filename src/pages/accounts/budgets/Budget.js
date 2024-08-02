/* Component in the BudgetPage Component to display the budget data */
import React, { useState } from 'react';
import styles from "../../../styles/Account.module.css";
import appStyles from "../../../App.module.css";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Link, useHistory } from 'react-router-dom';
import btnStyles from "../../../styles/Button.module.css";
import Button from "react-bootstrap/Button";
import Budgetcover from './BudgetCover';
import BudgetTop from './BudgetTop';
import Information from './Information';
import BudgetPost from './BudgetPost';

const Budget = (props) => {
  const [showInfo, setShowInfo] = useState(false);
  // const [showPost, setShowPost] = useState(false);

  const {
    budget1, budget2, budget3, projectId,
  } = props;

  const budget11 = budget1.results[0] || "" ;
  const budget12 = budget2.results[0] || "" ;
  const budget13 = budget3.results[0] || "" ;

  const {// totals
    id, budget_number,
    above_the_line_total, below_the_lineB_total, 
    below_the_lineB_costs_total, b_labour_and_costs_total, 
    post_productionC_total, belowB_andC_total,
    above_belowABC_total, otherD_total, above_belowABCandD_total,
    grand_total,
    // prepared
    dated, prelimfin, preparedby, approvedby, approvedbyco,
    // details
    title, series, prodco, format, location,
    // length
    research, prep, shoot, wrap, post, length_total,
    // rights
    story_rights, miscellaneous, rights_total, 
    // development
    research_development, prelim_budget, consultant_expenses,
    office_expenses, staff, travel_expenses_development,
    living_expenses_development, other_development, 
    fringes_taxes_development, development_total,
    // scenario
    writers_units_number, writers_units_name,
    writers_quantity, writers_rate, writers_total,
    consultants_units_number, consultants_units_name,
    consultants_quantity, consultants_rate, consultants_total,
    editors_scenario_units_number, editors_scenario_units_name,
    editors_scenario_quantity, editors_scenario_rate, editors_scenario_total,
    admin_scenario_units_number, admin_scenario_units_name,
    admin_scenario_quantity, admin_scenario_rate, admin_scenario_total,
    office_expenses_scenario, travel_expenses_scenario,
    living_expenses_scenario, other_scenario, fringes_taxes_scenario,
    scenario_total,
    // producers-dirs
    executive_producers_rate, producers_rate,
    line_producers_rate, co_producers_rate,
    associate_producers_rate, directors_rate,
    unit2_directors_rate, executive_producers_quantity,
    producers_quantity, line_producers_quantity,
    co_producers_quantity, associate_producers_quantity,
    directors_quantity, unit2_directors_quantity,
    travel_expenses_producers_dirs, living_expenses_producers_dirs,
    other_producers_dirs, fringes_taxes_producers_dirs,
    executive_producers_total, producers_total, line_producers_total,
    co_producers_total, associate_producers_total, directors_total,
    unit2_directors_total, producers_dirs_total,
    // stars music
    stars, stars_rights_payments, travel_expenses_stars,
    living_expenses_stars, other_stars, fringes_taxes_stars,
    music, music_supervisor, travel_expenses_music, living_expenses_music,
    music_rights_addl_songs, other_music, fringes_taxes_music,
    stars_music_total,
    // cast
    prin_2_qty, prin_2_uno, prin_2_una, prin_2_rt,
    prin_3_qty, prin_3_uno, prin_3_una, prin_3_rt,
    actors_2_qty, actors_2_uno, actors_2_una, actors_2_rt,
    actors_3_qty, actors_3_uno, actors_3_una, actors_3_rt, 
    actors_4_qty, actors_4_uno, actors_4_una, actors_4_rt,
    actors_5_qty, actors_5_uno, actors_5_una, actors_5_rt,
    actors_6_qty, actors_6_uno, actors_6_una, actors_6_rt,
    actors_7_qty, actors_7_uno, actors_7_una, actors_7_rt,
    actors_week_qty, actors_week_uno, actors_week_una, actors_week_rt,
    actors_day_qty, actors_day_uno, actors_day_una, actors_day_rt,
    princ2_total, princ3_total, actor2_total, actor3_total,
    actor4_total, actor5_total, actor6_total, actor7_total, 
    actorweek_total, actorday_total,
    rehersals_cast, rehersals_unit_cast,
    overtime_cast, overtime_unit_cast,
    days6th7th_cast, days6th7th_unit_cast,
    holidays_cast, holidays_unit_cast,
    principals_quantity, principals_units_number,
    principals_units_name, principals_rate, principals_total,
    actors_quantity, actors_units_number, 
    actors_units_name, actors_rate, actors_total,
    stuntcoordinators_quantity, stuntcoordinators_units_number,
    stuntcoordinators_units_name, stuntcoordinators_rate, stuntcoordinators_total,
    stuntperformers_quantity, stuntperformers_units_number,
    stuntperformers_units_name, stuntperformers_rate, stuntperformers_total,
    otherperformers_quantity, otherperformers_units_number,
    otherperformers_units_name, otherperformers_rate, otherperformers_total,
    extras_quantity, extras_units_number,
    extras_units_name, extras_rate, extras_total,
    casting_director, extras_casting,
    other_cast, fringes_taxes_cast, rights_payments_cast, cast_total,
    // production staff
    holidays_pro_sta, 
    overtime_pro_sta, 
    days6th7th_pro_sta, 
    box_rent_pro_sta,
    other_pro_sta,
    holidays_unit_pro_sta, 
    overtime_unit_pro_sta, 
    days6th7th_unit_pro_sta, 
    box_rent_unit_pro_sta,
    production_manager_qty_prep,
    production_manager_uno_prep,
    production_manager_una_prep,
    production_manager_rt_prep,
    production_manager_qty_wrap,
    production_manager_uno_wrap,
    production_manager_una_wrap,
    production_manager_rt_wrap,
    production_supervisor_qty_prep,
    production_supervisor_uno_prep,
    production_supervisor_una_prep,
    production_supervisor_rt_prep,
    production_supervisor_qty_wrap,
    production_supervisor_uno_wrap,
    production_supervisor_una_wrap,
    production_supervisor_rt_wrap,
    production_coordinator_qty_prep,
    production_coordinator_uno_prep,
    production_coordinator_una_prep,
    production_coordinator_rt_prep,
    production_coordinator_qty_wrap,
    production_coordinator_uno_wrap,
    production_coordinator_una_wrap,
    production_coordinator_rt_wrap,
    unit_manager_qty_prep,
    unit_manager_uno_prep,
    unit_manager_una_prep,
    unit_manager_rt_prep,
    unit_manager_qty_wrap,
    unit_manager_uno_wrap,
    unit_manager_una_wrap,
    unit_manager_rt_wrap,
    location_manager_qty_prep,
    location_manager_uno_prep,
    location_manager_una_prep,
    location_manager_rt_prep,
    location_manager_qty_wrap,
    location_manager_uno_wrap,
    location_manager_una_wrap,
    location_manager_rt_wrap,
    location_manager_ass_qty_prep,
    location_manager_ass_uno_prep,
    location_manager_ass_una_prep,
    location_manager_ass_rt_prep,
    location_manager_ass_qty_wrap,
    location_manager_ass_uno_wrap,
    location_manager_ass_una_wrap,
    location_manager_ass_rt_wrap,
    production_ass_qty_prep,
    production_ass_uno_prep,
    production_ass_una_prep,
    production_ass_rt_prep,
    production_ass_qty_wrap,
    production_ass_uno_wrap,
    production_ass_una_wrap,
    production_ass_rt_wrap,
    production_sec_qty_prep,
    production_sec_uno_prep,
    production_sec_una_prep,
    production_sec_rt_prep,
    production_sec_qty_wrap,
    production_sec_uno_wrap,
    production_sec_una_wrap,
    production_sec_rt_wrap,
    production_acc_qty_prep,
    production_acc_uno_prep,
    production_acc_una_prep,
    production_acc_rt_prep,
    production_acc_qty_wrap,
    production_acc_uno_wrap,
    production_acc_una_wrap,
    production_acc_rt_wrap,
    production_acc_ass_qty_prep,
    production_acc_ass_uno_prep,
    production_acc_ass_una_prep,
    production_acc_ass_rt_prep,
    production_acc_ass_qty_wrap,
    production_acc_ass_uno_wrap,
    production_acc_ass_una_wrap,
    production_acc_ass_rt_wrap,
    scriptsupervisor_con_qty_prep,
    scriptsupervisor_con_uno_prep,
    scriptsupervisor_con_una_prep,
    scriptsupervisor_con_rt_prep,
    scriptsupervisor_con_qty_wrap,
    scriptsupervisor_con_uno_wrap,
    scriptsupervisor_con_una_wrap,
    scriptsupervisor_con_rt_wrap,
    payroll_qty_prep,
    payroll_uno_prep,
    payroll_una_prep,
    payroll_rt_prep,
    payroll_qty_wrap,
    payroll_uno_wrap,
    payroll_una_wrap,
    payroll_rt_wrap,
    other_pro_qty_prep,
    other_pro_uno_prep,
    other_pro_una_prep,
    other_pro_rt_prep,
    other_pro_qty_wrap,
    other_pro_uno_wrap,
    other_pro_una_wrap,
    other_pro_rt_wrap,
    directors_ass_qty_prep,
    directors_ass_uno_prep,
    directors_ass_una_prep,
    directors_ass_rt_prep,
    directors_ass_qty_wrap,
    directors_ass_uno_wrap,
    directors_ass_una_wrap,
    directors_ass_rt_wrap,
    ass_director_1st_qty_prep,
    ass_director_1st_uno_prep,
    ass_director_1st_una_prep,
    ass_director_1st_rt_prep,
    ass_director_1st_qty_wrap,
    ass_director_1st_uno_wrap,
    ass_director_1st_una_wrap,
    ass_director_1st_rt_wrap,
    ass_director_2nd_qty_prep,
    ass_director_2nd_uno_prep,
    ass_director_2nd_una_prep,
    ass_director_2nd_rt_prep,
    ass_director_2nd_qty_wrap,
    ass_director_2nd_uno_wrap,
    ass_director_2nd_una_wrap,
    ass_director_2nd_rt_wrap,
    ass_director_3rd_qty_prep,
    ass_director_3rd_uno_prep,
    ass_director_3rd_una_prep,
    ass_director_3rd_rt_prep,
    ass_director_3rd_qty_wrap,
    ass_director_3rd_uno_wrap,
    ass_director_3rd_una_wrap,
    ass_director_3rd_rt_wrap,
    craft_services_qty_prep,
    craft_services_uno_prep,
    craft_services_una_prep,
    craft_services_rt_prep,
    craft_services_qty_wrap,
    craft_services_uno_wrap,
    craft_services_una_wrap,
    craft_services_rt_wrap,
    productionmanagerprep_total, productionmanagerwrap_total,
    productionmanagerall_total, productionsupervisorprep_total,
    productionsupervisorwrap_total, productionsupervisorall_total,
    productioncoordinatorprep_total, productioncoordinatorwrap_total,
    productioncoordinatorall_total, unitmanagerprep_total,
    unitmanagerwrap_total, unitmanagerall_total, locationmanagerprep_total,
    locationmanagerwrap_total, locationmanagerall_total, locmanassprep_total,
    locmanasswrap_total, locmanassall_total, proassprep_total,
    proasswrap_total, proassall_total, prosecprep_total, prosecwrap_total,
    prosecall_total, proaccprep_total, proaccwrap_total, proaccall_total,
    proaccassprep_total, proaccasswrap_total, proaccassall_total,
    scriptsupconprep_total, scriptsupconwrap_total, scriptsupconall_total,
    payrollprep_total, payrollwrap_total, payrollall_total,
    otherproprep_total, otherprowrap_total, otherproall_total,
    directorsassprep_total, directorsasswrap_total, directorsassall_total,
    assdirector1stprep_total, assdirector1stwrap_total, assdirector1stall_total,
    assdirector2ndprep_total, assdirector2ndwrap_total, assdirector2ndall_total,
    assdirector3rdprep_total, assdirector3rdwrap_total, assdirector3rdall_total,
    craftservicesprep_total, craftserviceswrap_total, craftservicesall_total,
    fringes_taxes_production, production_manager_quantity,
    production_manager_units_number, production_manager_units_name,
    production_manager_rate, production_supervisor_quantity,
    production_supervisor_units_number, production_supervisor_units_name,
    production_supervisor_rate, production_coordinator_quantity,
    production_coordinator_units_number, production_coordinator_units_name,
    production_coordinator_rate, unit_manager_quantity, unit_manager_units_number,
    unit_manager_units_name, unit_manager_rate,
    location_manager_quantity, location_manager_units_number,
    location_manager_units_name, location_manager_rate,
    location_manager_assistant_quantity, location_manager_assistant_units_number,
    location_manager_assistant_units_name, location_manager_assistant_rate,
    production_assistants_quantity, production_assistants_units_number,
    production_assistants_units_name, production_assistants_rate,
    production_secretary_quantity, production_secretary_units_number,
    production_secretary_units_name, production_secretary_rate,
    production_accountant_quantity, production_accountant_units_number,
    production_accountant_units_name, production_accountant_rate,
    production_accountant_assistant_quantity, production_accountant_assistant_units_number,
    production_accountant_assistant_units_name, production_accountant_assistant_rate,
    scriptsupervisor_continuity_quantity, scriptsupervisor_continuity_units_number,
    scriptsupervisor_continuity_units_name, scriptsupervisor_continuity_rate,
    payroll_quantity, payroll_units_number, payroll_units_name, payroll_rate,
    other_production_quantity, other_production_units_number,
    other_production_units_name, other_production_rate,
    directors_assistant_quantity, directors_assistant_units_number,
    directors_assistant_units_name, directors_assistant_rate,
    assistant_director_1st_quantity, assistant_director_1st_units_number,
    assistant_director_1st_units_name, assistant_director_1st_rate,
    assistant_director_2nd_quantity, assistant_director_2nd_units_number,
    assistant_director_2nd_units_name, assistant_director_2nd_rate,
    assistant_director_3rd_quantity, assistant_director_3rd_units_number,
    assistant_director_3rd_units_name, assistant_director_3rd_rate,
    craft_services_quantity, craft_services_units_number,
    craft_services_units_name, craft_services_rate,
    productionmanager_total, productionsupervisor_total, productioncoordinator_total, 
    unitmanager_total, locationmanager_total, locationmanagerassistant_total,
    productionassistants_total, productionsecretary_total, productionaccountant_total,
    productionaccountantassistant_total, scriptsupervisorcontinuity_total,
    payroll_total, otherproduction_total, directorsassistant_total,
    assistantdirector1st_total, assistantdirector2nd_total,
    assistantdirector3rd_total, craftservices_total, productionstaff_total,
    // design
    production_designer_quantity, production_designer_units_number,
    production_designer_units_name, production_designer_rate,
    pro_designer_qty_prep, pro_designer_uno_prep,
    pro_designer_una_prep, pro_designer_rt_prep,
    pro_designer_qty_wrap, pro_designer_uno_wrap,
    pro_designer_una_wrap, pro_designer_rt_wrap,
    supervart_qty, supervart_uno,
    supervart_una, supervart_rt,
    supervart_qty_prep, supervart_uno_prep,
    supervart_una_prep, supervart_rt_prep,
    art_director_quantity, art_director_units_number,
    art_director_units_name, art_director_rate,
    art_director_qty_prep, art_director_uno_prep,
    art_director_una_prep, art_director_rt_prep,
    art_director_qty_wrap, art_director_uno_wrap,
    art_director_una_wrap, art_director_rt_wrap,
    standby_art_qty, standby_art_uno,
    standby_art_una, standby_art_rt,
    standby_art_qty_prep, standby_art_uno_prep,
    standby_art_una_prep, standby_art_rt_prep,
    art_assistants_quantity, art_assistants_units_number,
    art_assistants_units_name, art_assistants_rate,
    art_ass_qty_prep, art_ass_uno_prep,
    art_ass_una_prep, art_ass_rt_prep,
    art_ass_qty_wrap, art_ass_uno_wrap,
    art_ass_una_wrap, art_ass_rt_wrap,
    set_design_qty, set_design_uno,
    set_design_una, set_design_rt,
    set_design_qty_prep, set_design_uno_prep,
    set_design_una_prep, set_design_rt_prep,
    junior_draught_qty, junior_draught_uno,
    junior_draught_una, junior_draught_rt,
    junior_draught_qty_prep, junior_draught_uno_prep,
    junior_draught_una_prep, junior_draught_rt_prep,
    graphic_artists_quantity, graphic_artists_units_number,
    graphic_artists_units_name, graphic_artists_rate,
    graphic_art_qty_prep, graphic_art_uno_prep,
    graphic_art_una_prep, graphic_art_rt_prep,
    art_dep_coor_qty, art_dep_coor_uno,
    art_dep_coor_una, art_dep_coor_rt,
    art_dep_coor_qty_prep, art_dep_coor_uno_prep,
    art_dep_coor_una_prep, art_dep_coor_rt_prep,
    art_dep_coor_qty_wrap, art_dep_coor_uno_wrap,
    art_dep_coor_una_wrap, art_dep_coor_rt_wrap,
    production_assistants_trainees_quantity, production_assistants_trainees_units_number,
    production_assistants_trainees_units_name, production_assistants_trainees_rate,
    pro_ass_trainees_qty_prep, pro_ass_trainees_uno_prep,
    pro_ass_trainees_una_prep, pro_ass_trainees_rt_prep,
    pro_ass_trainees_qty_wrap, pro_ass_trainees_uno_wrap,
    pro_ass_trainees_una_wrap, pro_ass_trainees_rt_wrap,
    sketch_artists, sketch_artists_unit,
    storyboard_artists, storyboard_artists_unit,
    holidays_design, holidays_unit_design,
    overtime_design, overtime_unit_design,
    days6th7th_design, days6th7th_unit_design,
    box_rent_unit_design, box_rent_design,
    other_design, fringes_taxes_design,
    productiondesigner_total, prodesprep_total, prodeswrap_total, prodesall_total,
    supartdir_total, supartdirprep_total, supartdirall_total,
    artdirector_total, artdirprep_total, artdirwrap_total, artdirall_total,
    standbyart_total, stbyartprep_total, stbyartall_total,
    artassistants_total, artassprep_total, artasswrap_total, artassall_total,
    setdes_total, setdesprep_total, setdesall_total,
    jundraught_total, jundraprep_total, jundraall_total,
    artcoor_total, artcoorprep_total, artcoorwrap_total, artcoorall_total,
    productionassistantstrainees_total, proasstrainprep_total,
    proasstrainwrap_total, proasstrainall_total,
    graphicartists_total, graphicartprep_total, graphicartall_total,
    designlabour_total,
    // construction
    days6th7th_unit_con, days6th7th_con, overtime_unit_con, overtime_con,
    holidays_unit_con, holidays_con, box_rent_unit_con, box_rent_con,
    con_coor_qty_prep, con_coor_uno_prep, con_coor_una_prep, con_coor_rt_prep,
    con_coor_qty_wrap, con_coor_uno_wrap, con_coor_una_wrap, con_coor_rt_wrap,
    headcar_qty_prep, headcar_uno_prep, headcar_una_prep, headcar_rt_prep,
    headcar_qty_wrap, headcar_uno_wrap, headcar_una_wrap, headcar_rt_wrap,
    carpen_qty_prep, carpen_uno_prep, carpen_una_prep, carpen_rt_prep,
    carpen_qty_wrap, carpen_uno_wrap, carpen_una_wrap, carpen_rt_wrap,
    scenic_qty_prep, scenic_uno_prep, scenic_una_prep, scenic_rt_prep,
    scenic_qty_wrap, scenic_uno_wrap, scenic_una_wrap, scenic_rt_wrap,
    headpain_qty_prep, headpain_uno_prep, headpain_una_prep, headpain_rt_prep,
    headpain_qty_wrap, headpain_uno_wrap, headpain_una_wrap, headpain_rt_wrap,
    pain_qty_prep, pain_uno_prep, pain_una_prep, pain_rt_prep,
    pain_qty_wrap, pain_uno_wrap, pain_una_wrap, pain_rt_wrap,
    labo_qty_prep, labo_uno_prep, labo_una_prep, labo_rt_prep,
    labo_qty_wrap, labo_uno_wrap, labo_una_wrap, labo_rt_wrap,
    concoorprep_total, concoorwrap_total, concoorall_total,
    headcarprep_total, headcarwrap_total, headcarall_total,
    carpenprep_total, carpenwrap_total, carpenall_total,
    scenicprep_total, scenicwrap_total, scenicall_total,
    headpainprep_total, headpainwrap_total, headpainall_total,
    paintprep_total, paintwrap_total, paintall_total,
    laboprep_total, labowrap_total, laboall_total,
    fringes_taxes_construction,
    constructioncoordinator_quantity, constructioncoordinator_units_number,
    constructioncoordinator_units_name, constructioncoordinator_rate,
    headcarpenter_quantity, headcarpenter_units_number,
    headcarpenter_units_name, headcarpenter_rate,
    carpenters_quantity, carpenters_units_number,
    carpenters_units_name, carpenters_rate,
    scenicpainters_quantity, scenicpainters_units_number,
    scenicpainters_units_name, scenicpainters_rate,
    headpainter_quantity, headpainter_units_number,
    headpainter_units_name, headpainter_rate,
    painters_quantity, painters_units_number, 
    painters_units_name, painters_rate,
    labourers_quantity, labourers_units_number, 
    labourers_units_name, labourers_rate, 
    other_construction, constructioncoordinator_total,
    headcarpenter_total, carpenters_total, scenicpainters_total,
    headpainter_total, painters_total, labourers_total,
    constructionlabour_total,
    // dressing
    days6th7th_unit_dres, days6th7th_dres, overtime_unit_dres, overtime_dres,
    holidays_unit_dres, holidays_dres, box_rent_unit_dres, box_rent_dres,
    set_dec_qty_prep, set_dec_uno_prep, set_dec_una_prep, set_dec_rt_prep,
    set_dec_qty_wrap, set_dec_uno_wrap, set_dec_una_wrap, set_dec_rt_wrap,
    ass_set_d_qty_prep, ass_set_d_uno_prep, ass_set_d_una_prep, ass_set_d_rt_prep,
    ass_set_d_qty_wrap, ass_set_d_uno_wrap, ass_set_d_una_wrap, ass_set_d_rt_wrap,
    lead_man_qty_prep, lead_man_uno_prep, lead_man_una_prep, lead_man_rt_prep,
    lead_man_qty_wrap, lead_man_uno_wrap, lead_man_una_wrap, lead_man_rt_wrap,
    set_dres_qty_prep, set_dres_uno_prep, set_dres_una_prep, set_dres_rt_prep,
    set_dres_qty_wrap, set_dres_uno_wrap, set_dres_una_wrap, set_dres_rt_wrap,
    swing_g_qty_prep, swing_g_uno_prep, swing_g_una_prep, swing_g_rt_prep,
    swing_g_qty_wrap, swing_g_uno_wrap, swing_g_una_wrap, swing_g_rt_wrap,
    set_d_buy_qty_prep, set_d_buy_uno_prep, set_d_buy_una_prep, set_d_buy_rt_prep,
    set_d_buy_qty_wrap, set_d_buy_uno_wrap, set_d_buy_una_wrap, set_d_buy_rt_wrap,
    decsetprep_total, decsetwrap_total, decsetall_total,
    assdsetprep_total, assdsetwrap_total, assdsetall_total,
    leadmanprep_total, leadmanwrap_total, leadmanall_total,
    dressprep_total, dresswrap_total, dressall_total,
    swinggprep_total, swinggwrap_total, swinggall_total,
    dressbuyprep_total, dressbuywrap_total, dressbuyall_total,
    fringes_taxes_dressing,
    set_decorator_quantity, set_decorator_units_number,
    set_decorator_units_name, set_decorator_rate,
    assist_set_decorator_quantity, assist_set_decorator_units_number,
    assist_set_decorator_units_name, assist_set_decorator_rate,
    lead_man_quantity, lead_man_units_number,
    lead_man_units_name, lead_man_rate,
    set_dressers_quantity, set_dressers_units_number,
    set_dressers_units_name, set_dressers_rate,
    swing_gang_quantity, swing_gang_units_number,
    swing_gang_units_name, swing_gang_rate,
    set_dressing_buyer_quantity, set_dressing_buyer_units_number,
    set_dressing_buyer_units_name, set_dressing_buyer_rate, 
    other_set_dressing, decoratorset_total, assistdecoratorset_total,
    leadman_total, dressers_total, swinggang_total,
    dressingbuyer_total, dressinglabour_total,
    // props
    days6th7th_unit_prop, days6th7th_prop, 
    overtime_unit_prop, overtime_prop,
    holidays_unit_prop, holidays_prop, box_rent_unit_prop, box_rent_prop,
    pro_mas_qty_prep, pro_mas_uno_prep, pro_mas_una_prep, pro_mas_rt_prep,
    pro_mas_qty_wrap, pro_mas_uno_wrap, pro_mas_una_wrap, pro_mas_rt_wrap,
    as_pro_ma_qty_prep, as_pro_ma_uno_prep, as_pro_ma_una_prep, as_pro_ma_rt_prep,
    as_pro_ma_qty_wrap, as_pro_ma_uno_wrap, as_pro_ma_una_wrap, as_pro_ma_rt_wrap,
    on_set_prop_qty_prep, on_set_prop_uno_prep, 
    on_set_prop_una_prep, on_set_prop_rt_prep,
    on_set_prop_qty_wrap, on_set_prop_uno_wrap, 
    on_set_prop_una_wrap, on_set_prop_rt_wrap, 
    prop_buy_qty_prep, prop_buy_uno_prep, prop_buy_una_prep, prop_buy_rt_prep,
    prop_buy_qty_wrap, prop_buy_uno_wrap, prop_buy_una_wrap, prop_buy_rt_wrap,
    armor_qty_prep, armor_uno_prep, armor_una_prep, armor_rt_prep,
    armor_qty_wrap, armor_uno_wrap, armor_una_wrap, armor_rt_wrap,
    propmasprep_total, propmaswrap_total, propmasall_total,
    aspropmaprep_total, aspropmawrap_total, aspropmaall_total,
    onsetpropprep_total, onsetpropwrap_total, onsetpropall_total,
    propbuyprep_total, propbuywrap_total, propbuyall_total,
    armorprep_total, armorwrap_total, armorall_total,
    fringes_taxes_property,
    property_master_quantity, property_master_units_number,
    property_master_units_name, property_master_rate,
    assist_property_master_quantity, assist_property_master_units_number,
    assist_property_master_units_name, assist_property_master_rate,
    on_set_props_person_quantity, on_set_props_person_units_number,
    on_set_props_person_units_name, on_set_props_person_rate,
    property_buyer_quantity, property_buyer_units_number,
    property_buyer_units_name, property_buyer_rate,
    armorer_quantity, armorer_units_number,
    armorer_units_name, armorer_rate, armorer_total,
    other_property, propertymaster_total, assistpropertymaster_total,
    onsetpropsperson_total, propertybuyer_total, propertylabour_total,
    } = budget11;

  // budget2
  const {
    // wrangling
    days6th7th_unit_wran, days6th7th_wran,
    overtime_unit_wran, overtime_wran, holidays_unit_wran, 
    holidays_wran, box_rent_unit_wran, box_rent_wran, other_solo_wran,
    he_wran_qty_prep, he_wran_uno_prep, he_wran_una_prep, he_wran_rt_prep,
    he_wran_qty_wrap, he_wran_uno_wrap, he_wran_una_wrap, he_wran_rt_wrap,
    oth_wran_qty_prep, oth_wran_uno_prep, oth_wran_una_prep, oth_wran_rt_prep,
    oth_wran_qty_wrap, oth_wran_uno_wrap, oth_wran_una_wrap, oth_wran_rt_wrap,
    hewranprep_total, hewranwrap_total, hewranall_total,
    othwranlabprep_total, othwranlabwrap_total, othwranlaball_total,
    head_wrangler_quantity, head_wrangler_units_number,
    head_wrangler_units_name, head_wrangler_rate,
    other_wrangling_labour_quantity, other_wrangling_labour_units_number,
    other_wrangling_labour_units_name, other_wrangling_labour_rate,
    headwrangler_total, otherwranglinglabour_total,
    wranglerlabour_total, fringes_taxes_wrangling,
    // FX
    days6th7th_unit_fx, days6th7th_fx, overtime_unit_fx, overtime_fx,
    holidays_unit_fx,  holidays_fx, box_rent_unit_fx, box_rent_fx, other_solo_fx,
    fx_sup_qty_prep, fx_sup_uno_prep, fx_sup_una_prep, fx_sup_rt_prep,
    fx_sup_qty_wrap, fx_sup_uno_wrap, fx_sup_una_wrap, fx_sup_rt_wrap,
    ass_fx_qty_prep, ass_fx_uno_prep, ass_fx_una_prep, ass_fx_rt_prep,
    ass_fx_qty_wrap, ass_fx_uno_wrap, ass_fx_una_wrap, ass_fx_rt_wrap,
    ot_fx_l_qty_prep, ot_fx_l_uno_prep, ot_fx_l_una_prep, ot_fx_l_rt_prep,
    ot_fx_l_qty_wrap, ot_fx_l_uno_wrap, ot_fx_l_una_wrap, ot_fx_l_rt_wrap,
    fxsupprep_total, fxsupwrap_total, fxsupall_total,
    assfxprep_total, assfxwrap_total, assfxall_total,
    othfxlabprep_total, othfxlabwrap_total, othfxlaball_total,
    fx_supervisor_quantity, fx_supervisor_units_number,
    fx_supervisor_units_name, fx_supervisor_rate,
    assist_fx_quantity, assist_fx_units_number,
    assist_fx_units_name, assist_fx_rate,
    other_fx_labour_quantity, other_fx_labour_units_number,
    other_fx_labour_units_name, other_fx_labour_rate,
    fxsupervisor_total, assistfx_total,
    otherfxlabour_total, fxlabour_total, fringes_taxes_fx,
    // Wardrobe
    train_qty_prep, train_uno_prep, train_una_prep, train_rt_prep, 
    train_qty, train_uno, train_una, train_rt,
    train_qty_wrap, train_uno_wrap, train_una_wrap, train_rt_wrap, 
    day_war_qty, day_war_uno, day_war_una, day_war_rt, warday_total,
    war_coor_qty, war_coor_uno, war_coor_una, war_coor_rt,
    war_coor_qty_prep, war_coor_uno_prep, war_coor_una_prep, war_coor_rt_prep,
    war_coor_qty_wrap, war_coor_uno_wrap, war_coor_una_wrap, war_coor_rt_wrap,
    warcoor_total, warcoprep_total, warcowrap_total, warcoall_total,
    wartrain_total, wartraprep_total, wartrawrap_total, wartraall_total,
    days6th7th_unit_war, days6th7th_war, overtime_unit_war, overtime_war,
    holidays_unit_war, holidays_war, box_rent_unit_war, box_rent_war, other_solo_war,
    cos_des_qty_prep, cos_des_uno_prep, cos_des_una_prep, cos_des_rt_prep,
    cos_des_qty_wrap, cos_des_uno_wrap, cos_des_una_wrap, cos_des_rt_wrap,
    as_cos_des_qty_prep, as_cos_des_uno_prep, as_cos_des_una_prep, as_cos_des_rt_prep,
    as_cos_des_qty_wrap, as_cos_des_uno_wrap, as_cos_des_una_wrap, as_cos_des_rt_wrap,
    he_war_qty_prep, he_war_uno_prep, he_war_una_prep, he_war_rt_prep,
    he_war_qty_wrap, he_war_uno_wrap, he_war_una_wrap, he_war_rt_wrap,
    war_as_qty_prep, war_as_uno_prep, war_as_una_prep, war_as_rt_prep, 
    war_as_qty_wrap, war_as_uno_wrap, war_as_una_wrap, war_as_rt_wrap,
    tru_cos_qty_prep, tru_cos_uno_prep, tru_cos_una_prep, tru_cos_rt_prep,
    tru_cos_qty_wrap, tru_cos_uno_wrap, tru_cos_una_wrap, tru_cos_rt_wrap,
    ot_war_qty_prep, ot_war_uno_prep, ot_war_una_prep, ot_war_rt_prep,
    ot_war_qty_wrap, ot_war_uno_wrap, ot_war_una_wrap, ot_war_rt_wrap,
    shopper_qty, shopper_uno, shopper_una, shopper_rt,
    shopper_qty_prep, shopper_uno_prep, shopper_una_prep, shopper_rt_prep,
    tailors, textile_ar,
    cosdesprep_total, cosdeswrap_total, cosdesall_total,
    ascosdesprep_total, ascosdeswrap_total, ascosdesall_total,
    hewarprepTotal, hewarwrap_total, hewarall_total,
    warasprep_total, waraswrap_total, warasall_total,
    trucosprep_total, trucoswrap_total, trucosall_total,
    shopper_total, shopprep_total, shopall_total,
    othwarprep_total, othwarwrap_total, othwarall_total,
    costume_designer_quantity, costume_designer_units_number,
    costume_designer_units_name, costume_designer_rate,
    assist_costume_designer_quantity, assist_costume_designer_units_number,
    assist_costume_designer_units_name, assist_costume_designer_rate,
    head_wardrobe_quantity, head_wardrobe_units_number,
    head_wardrobe_units_name, head_wardrobe_rate,
    wardrobe_assist_quantity, wardrobe_assist_units_number,
    wardrobe_assist_units_name, wardrobe_assist_rate,
    truck_costumer_quantity, truck_costumer_units_number,
    truck_costumer_units_name, truck_costumer_rate,
    other_wardrobe_labour_quantity, other_wardrobe_labour_units_number,
    other_wardrobe_labour_units_name, other_wardrobe_labour_rate,
    costumedesigner_total, assistcosdesigner_total, headwardrobe_total,
    wardrobeassist_total, truckcostumer_total, otherwardrobe_total,
    wardrobelabour_total, fringes_taxes_wardrobe,
    // Makeup
    days6th7th_unit_mak, days6th7th_mak, overtime_unit_mak, overtime_mak,
    holidays_unit_mak, holidays_mak, box_rent_unit_mak, box_rent_mak, other_solo_mak,
    mak_head_qty_prep, mak_head_uno_prep, mak_head_una_prep, mak_head_rt_prep,
    mak_head_qty_wrap, mak_head_uno_wrap, mak_head_una_wrap, mak_head_rt_wrap,
    key_mak_qty_prep, key_mak_uno_prep, key_mak_una_prep, key_mak_rt_prep,
    key_mak_qty_wrap, key_mak_uno_wrap, key_mak_una_wrap, key_mak_rt_wrap,
    mak_art_qty_prep, mak_art_uno_prep, mak_art_una_prep, mak_art_rt_prep, 
    mak_art_qty_wrap, mak_art_uno_wrap, mak_art_una_wrap, mak_art_rt_wrap,
    key_hair_qty_prep, key_hair_uno_prep, key_hair_una_prep, key_hair_rt_prep,
    key_hair_qty_wrap, key_hair_uno_wrap, key_hair_una_wrap, key_hair_rt_wrap,
    hair_qty_prep, hair_uno_prep, hair_una_prep, hair_rt_prep,
    hair_qty_wrap, hair_uno_wrap, hair_una_wrap, hair_rt_wrap,
    oth_mak_qty_prep, oth_mak_uno_prep, oth_mak_una_prep, oth_mak_rt_prep,
    oth_mak_qty_wrap, oth_mak_uno_wrap, oth_mak_una_wrap, oth_mak_rt_wrap,
    sfx_mak_qty_prep, sfx_mak_uno_prep, sfx_mak_una_prep, sfx_mak_rt_prep,
    sfx_mak_qty_wrap, sfx_mak_uno_wrap, sfx_mak_una_wrap, sfx_mak_rt_wrap,
    mak_train_qty, mak_train_uno, mak_train_una, mak_train_rt,
    mak_train_qty_prep, mak_train_uno_prep, mak_train_una_prep, mak_train_rt_prep,
    mak_train_qty_wrap, mak_train_uno_wrap, mak_train_una_wrap, mak_train_rt_wrap,
    headmakprep_total, headmakwrap_total, headmakall_total,
    keymakprep_total, keymakwrap_total, keymakall_total,
    makartprep_total, makartwrap_total, makartall_total,
    keyhairprep_total, keyhairwrap_total, keyhairall_total,
    hairprep_total, hairwrap_total, hairall_total,
    othmakprep_total, othmakwrap_total, othmakall_total,
    sfxmakprep_total, sfxmakwrap_total, sfxmakall_total,
    maktrain_total, maktraprep_total, maktrawrap_total, maktraall_total,
    fringes_taxes_makeup,
    makeup_dept_head_quantity, makeup_dept_head_units_number,
    makeup_dept_head_units_name, makeup_dept_head_rate,
    key_makeup_quantity, key_makeup_units_number,
    key_makeup_units_name, key_makeup_rate,
    makeup_artist_quantity, makeup_artist_units_number,
    makeup_artist_units_name, makeup_artist_rate,
    key_hairstylist_quantity, key_hairstylist_units_number,
    key_hairstylist_units_name, key_hairstylist_rate,
    hairdresser_quantity, hairdresser_units_number,
    hairdresser_units_name, hairdresser_rate,
    hair_makeup_dailies_quantity, hair_makeup_dailies_units_number,
    hair_makeup_dailies_units_name, hair_makeup_dailies_rate,
    other_makeup_labour_quantity, other_makeup_labour_units_number,
    other_makeup_labour_units_name, other_makeup_labour_rate,
    sfx_makeup_quantity, sfx_makeup_units_number,
    sfx_makeup_units_name, sfx_makeup_rate,
    headmakeup_total, keymakeup_total, makeupartist_total,
    keyhairstylist_total, hairdresser_total, hairmakeupdailies_total,
    othermakeuplabour_total, sfxmakeup_total, makeuplabour_total,
    // Camera
    days6th7th_unit_cam, days6th7th_cam,
    overtime_unit_cam, overtime_cam, holidays_unit_cam, 
    holidays_cam, box_rent_unit_cam, box_rent_cam, other_solo_cam,
    dop_qty_prep, dop_uno_prep, dop_una_prep, dop_rt_prep,
    dop_qty_wrap, dop_uno_wrap, dop_una_wrap, dop_rt_wrap,
    cam_op_qty_prep, cam_op_uno_prep, cam_op_una_prep, cam_op_rt_prep,
    cam_op_qty_wrap, cam_op_uno_wrap, cam_op_una_wrap, cam_op_rt_wrap,
    cam_ac1_qty_prep, cam_ac1_uno_prep, cam_ac1_una_prep, cam_ac1_rt_prep,
    cam_ac1_qty_wrap, cam_ac1_uno_wrap, cam_ac1_una_wrap, cam_ac1_rt_wrap,
    cam_ac2_qty_prep, cam_ac2_uno_prep, cam_ac2_una_prep, cam_ac2_rt_prep,
    cam_ac2_qty_wrap, cam_ac2_uno_wrap, cam_ac2_una_wrap, cam_ac2_rt_wrap,
    dit_qty_prep, dit_uno_prep, dit_una_prep, dit_rt_prep, 
    dit_qty_wrap, dit_uno_wrap, dit_una_wrap, dit_rt_wrap,
    stead_qty_prep, stead_uno_prep, stead_una_prep, stead_rt_prep,
    stead_qty_wrap, stead_uno_wrap, stead_una_wrap, stead_rt_wrap,
    cam_pa_qty_prep, cam_pa_uno_prep, cam_pa_una_prep, cam_pa_rt_prep,
    cam_pa_qty_wrap, cam_pa_uno_wrap, cam_pa_una_wrap, cam_pa_rt_wrap,
    dro_pil_qty_prep, dro_pil_uno_prep, dro_pil_una_prep, dro_pil_rt_prep,
    dro_pil_qty_wrap, dro_pil_uno_wrap, dro_pil_una_wrap, dro_pil_rt_wrap,
    ot_cam_qty_prep, ot_cam_uno_prep, ot_cam_una_prep, ot_cam_rt_prep,
    ot_cam_qty_wrap, ot_cam_uno_wrap, ot_cam_una_wrap, ot_cam_rt_wrap,
    dopprep_total, dopwrap_total, dopall_total,
    camopprep_total, camopwrap_total, camopall_total,
    camac1prep_total, camac1wrap_total, camac1all_total,
    camac2prep_total, camac2wrap_total, camac2all_total,
    ditprep_total, ditwrap_total, ditall_total,
    stecamprep_total, stecamwrap_total, stecamall_total,
    campaprep_total, campawrap_total, campaall_total,
    dronpiprep_total, dronpiwrap_total, dronpiall_total,
    othcamprep_total, othcamwrap_total, othcamall_total,
    dop_qty, dop_uno, dop_una, dop_rt,
    camera_op_qty, camera_op_uno, camera_op_una, camera_op_rt,
    cam_ac1_qty, cam_ac1_uno, cam_ac1_una, cam_ac1_rt,
    cam_ac2_qty, cam_ac2_uno, cam_ac2_una, cam_ac2_rt,
    dit_qty, dit_uno, dit_una, dit_rt,
    steadicam_qty, steadicam_uno, steadicam_una, steadicam_rt,
    cam_pa_qty, cam_pa_uno, cam_pa_una, cam_pa_rt, 
    drone_pilot_qty, drone_pilot_uno, drone_pilot_una, drone_pilot_rt,
    other_cam_qty, other_cam_uno, other_cam_una, other_cam_rt,
    stills_qty, stills_uno, stills_una, stills_rt,
    stills_total, dop_total, cameraop_total, camac1_total, camac2_total,
    dit_total, steadicam_total, campa_total, dronepilot_total,
    othercam_total, cameralabour_total, fringes_taxes_camera,
    // electric
    days6th7th_unit_ele, days6th7th_ele,
    overtime_unit_ele, overtime_ele, holidays_unit_ele, 
    holidays_ele, box_rent_unit_ele, box_rent_ele, other_solo_ele,
    gaf_qty_prep, gaf_uno_prep, gaf_una_prep, gaf_rt_prep, 
    gaf_qty_wrap, gaf_uno_wrap, gaf_una_wrap, gaf_rt_wrap,
    b_boy_qty_prep, b_boy_uno_prep, b_boy_una_prep, b_boy_rt_prep,
    b_boy_qty_wrap, b_boy_uno_wrap, b_boy_una_wrap, b_boy_rt_wrap,
    elec_qty_prep, elec_uno_prep, elec_una_prep, elec_rt_prep,
    elec_qty_wrap, elec_uno_wrap, elec_una_wrap, elec_rt_wrap,
    d_elec_qty_prep, d_elec_uno_prep, d_elec_una_prep, d_elec_rt_prep,
    d_elec_qty_wrap, d_elec_uno_wrap, d_elec_una_wrap, d_elec_rt_wrap,
    gen_op_qty_prep, gen_op_uno_prep, gen_op_una_prep, gen_op_rt_prep,
    gen_op_qty_wrap, gen_op_uno_wrap, gen_op_una_wrap, gen_op_rt_wrap,
    ot_el_qty_prep, ot_el_uno_prep, ot_el_una_prep, ot_el_rt_prep,
    ot_el_qty_wrap, ot_el_uno_wrap, ot_el_una_wrap, ot_el_rt_wrap,
    gafprep_total, gafwrap_total, gafall_total, 
    bboyprep_total, bboywrap_total, bboyall_total,
    elecprep_total, elecwrapTotal, elecall_total,
    daelecprep_total, daelecwrap_total, daelecall_total,
    genopprep_total, genopwrap_total, genopall_total,
    otelecprep_total, otelecwrap_total, otelecall_total,
    fringes_taxes_electric,
    gaffer_qty, gaffer_uno, gaffer_una, gaffer_rt,
    best_boy_qty, best_boy_uno, best_boy_una, best_boy_rt,
    electrician_qty, electrician_uno, electrician_una, electrician_rt,
    dailies_elec_qty, dailies_elec_uno, dailies_elec_una, dailies_elec_rt,
    generator_op_qty, generator_op_uno, generator_op_una, generator_op_rt,
    other_elec_qty, other_elec_uno, other_elec_una, other_elec_rt,
    gaffer_total, bestboy_total, electrician_total, dailieselec_total,
    generatorop_total, otherelectric_total, electriclabour_total,
    // grip
    days6th7th_unit_grip, days6th7th_grip, overtime_unit_grip,
    overtime_grip, holidays_unit_grip, 
    holidays_grip, box_rent_unit_grip, box_rent_grip, other_solo_grip,
    k_grip_qty_prep, k_grip_uno_prep, k_grip_una_prep, k_grip_rt_prep,
    k_grip_qty_wrap, k_grip_uno_wrap, k_grip_una_wrap, k_grip_rt_wrap, 
    bb_grip_qty_prep, bb_grip_uno_prep, bb_grip_una_prep, bb_grip_rt_prep,
    bb_grip_qty_wrap, bb_grip_uno_wrap, bb_grip_una_wrap, bb_grip_rt_wrap,
    grips_qty_prep, grips_uno_prep, grips_una_prep, grips_rt_prep,
    grips_qty_wrap, grips_uno_wrap, grips_una_wrap, grips_rt_wrap,
    dol_grip_qty_prep, dol_grip_uno_prep, dol_grip_una_prep, dol_grip_rt_prep,
    dol_grip_qty_wrap, dol_grip_uno_wrap, dol_grip_una_wrap, dol_grip_rt_wrap,
    sw_grips_qty_prep, sw_grips_uno_prep, sw_grips_una_prep, sw_grips_rt_prep,
    sw_grips_qty_wrap, sw_grips_uno_wrap, sw_grips_una_wrap, sw_grips_rt_wrap,
    oth_grip_qty_prep, oth_grip_uno_prep, oth_grip_una_prep, oth_grip_rt_prep,
    oth_grip_qty_wrap, oth_grip_uno_wrap, oth_grip_una_wrap, oth_grip_rt_wrap,
    kgripprep_total, kgripwrap_total, kgripall_total,
    bbgripprep_total, bbgripwrap_total, bbgripall_total,
    gripsprep_total, gripswrap_total, gripsall_total,
    dolgripprep_total, dolgripwrap_total, dolgripall_total,
    swigripsprep_total, swigripswrap_total, swigripsall_total,
    othgripprep_total, othgripwrap_total, othgripall_total,
    fringes_taxes_grip,
    key_grip_qty, key_grip_uno, key_grip_una, key_grip_rt,
    best_boy_grip_qty, best_boy_grip_uno, best_boy_grip_una, best_boy_grip_rt,
    grips_qty, grips_uno, grips_una, grips_rt,
    dailies_grip_qty, dailies_grip_uno, dailies_grip_una, dailies_grip_rt, 
    dolly_crane_grip_qty, dolly_crane_grip_uno, dolly_crane_grip_una, dolly_crane_grip_rt,
    swing_grips_qty, swing_grips_uno, swing_grips_una, swing_grips_rt,
    other_grip_labour_qty, other_grip_labour_uno, other_grip_labour_una, other_grip_labour_rt,
    keygrip_total, bestboygrip_total, grips_total, dailiesgrip_total,
    dollycranegrip_total, swinggrips_total, othergriplabour_total, griplabour_total,
    // sound
    days6th7th_unit_sound, days6th7th_sound, 
    overtime_unit_sound, overtime_sound, holidays_unit_sound, holidays_sound,
    box_rent_unit_sound, box_rent_sound, other_solo_sound,
    so_mix_qty_prep, so_mix_uno_prep, so_mix_una_prep, so_mix_rt_prep,
    so_mix_qty_wrap, so_mix_uno_wrap, so_mix_una_wrap, so_mix_rt_wrap,
    boom_op_qty_prep, boom_op_uno_prep, boom_op_una_prep, boom_op_rt_prep,
    boom_op_qty_wrap, boom_op_uno_wrap, boom_op_una_wrap, boom_op_rt_wrap,
    cab_wran_qty_prep, cab_wran_uno_prep, cab_wran_una_prep, cab_wran_rt_prep,
    cab_wran_qty_wrap, cab_wran_uno_wrap, cab_wran_una_wrap, cab_wran_rt_wrap,
    ot_sound_qty_prep, ot_sound_uno_prep, ot_sound_una_prep, ot_sound_rt_prep,
    ot_sound_qty_wrap, ot_sound_uno_wrap, ot_sound_una_wrap, ot_sound_rt_wrap,
    somixprep_total, somixwrap_total, somixall_total,
    boomopprep_total, boomopwrap_total, boomopall_total,
    cawranprep_total, cawranwrap_total, cawranall_total,
    otsoundprep_total, otsoundwrap_total, otsoundall_total,
    fringes_taxes_sound,
    sound_mixer_qty, sound_mixer_uno,
    sound_mixer_una, sound_mixer_rt,
    boom_operator_qty, boom_operator_uno,
    boom_operator_una, boom_operator_rt,
    cable_wrangler_qty, cable_wrangler_uno,
    cable_wrangler_una, cable_wrangler_rt,
    other_sound_labour_qty, other_sound_labour_uno,
    other_sound_labour_una, other_sound_labour_rt,
    soundmixer_total, boomoperator_total, cablewrangler_total,
    othersoundlabour_total, soundlabour_total,
    } = budget12;

  // budget3
  const {// transport
    days6th7th_unit_tran, days6th7th_tran,
    overtime_unit_tran, overtime_tran, holidays_unit_tran, holidays_tran,
    box_rent_unit_tran, box_rent_tran, other_solo_tran,
    tp_coor_qty_prep, tp_coor_uno_prep, tp_coor_una_prep, tp_coor_rt_prep,
    tp_coor_qty_wrap, tp_coor_uno_wrap, tp_coor_una_wrap, tp_coor_rt_wrap,
    tp_cap_qty_prep, tp_cap_uno_prep, tp_cap_una_prep, tp_cap_rt_prep,
    tp_cap_qty_wrap, tp_cap_uno_wrap, tp_cap_una_wrap, tp_cap_rt_wrap,
    tp_man_qty_prep, tp_man_uno_prep, tp_man_una_prep, tp_man_rt_prep,
    tp_man_qty_wrap, tp_man_uno_wrap, tp_man_una_wrap, tp_man_rt_wrap,
    head_dr_qty_prep, head_dr_uno_prep, head_dr_una_prep, head_dr_rt_prep,
    head_dr_qty_wrap, head_dr_uno_wrap, head_dr_una_wrap, head_dr_rt_wrap,
    drive_qty_prep, drive_uno_prep, drive_una_prep, drive_rt_prep,
    drive_qty_wrap, drive_uno_wrap, drive_una_wrap, drive_rt_wrap,
    tpcoorprep_total, tpcoorwrap_total, tpcoorall_total,
    tpcapprep_total, tpcapwrap_total, tpcapall_total,
    tpmanprep_total, tpmanwrap_total, tpmanall_total,
    headdriprep_total, headdriwrap_total, headdriall_total,
    driverprep_total, driverwrap_total, driverall_total,
    fringes_taxes_transport,
    tp_coordinator_qty, tp_coordinator_uno, tp_coordinator_una, tp_coordinator_rt,
    tp_captain_qty,tp_captain_uno, tp_captain_una, tp_captain_rt,
    tp_manager_qty, tp_manager_uno, tp_manager_una, tp_manager_rt,
    head_driver_qty, head_driver_uno, head_driver_una, head_driver_rt,
    drivers_qty, drivers_uno, drivers_una, drivers_rt,
    tpcoordinator_total, tpcaptain_total, tpmanager_total,
    headdriver_total, drivers_total, transportlabour_total,
    // TV
    fringes_taxes_tv,
    tech_super_qty, tech_super_uno, tech_super_una, tech_super_rt,
    tech_direct_qty, tech_direct_uno, tech_direct_una, tech_direct_rt,
    floor_man_qty, floor_man_uno, floor_man_una, floor_man_rt, 
    light_direct_qty, light_direct_uno, light_direct_una, light_direct_rt,
    boardman_qty, boardman_uno, boardman_una, boardman_rt,
    audio_qty, audio_uno, audio_una, audio_rt,
    vtr_operator_qty, vtr_operator_uno, vtr_operator_una, vtr_operator_rt,
    stagehands_qty, stagehands_uno, stagehands_una, stagehands_rt,
    other_tv_qty, other_tv_uno, other_tv_una, other_tv_rt,
    techsuper_total, techdirect_total, floorman_total, lightdirect_total,
    boardman_total, audio_total, vtroperator_total, stagehands_total,
    othertv_total, tvspecificlabour_total,
    // new
    days6th7th_unit_tv, days6th7th_tv, 
    overtime_unit_tv, overtime_tv, holidays_unit_tv, 
    holidays_tv, box_rent_unit_tv, box_rent_tv, other_solo_tv,
    tec_sup_qty_prep, tec_sup_uno_prep, tec_sup_una_prep, tec_sup_rt_prep,
    tec_sup_qty_wrap, tec_sup_uno_wrap, tec_sup_una_wrap, tec_sup_rt_wrap,
    tec_dir_qty_prep, tec_dir_uno_prep, tec_dir_una_prep, tec_dir_rt_prep,
    tec_dir_qty_wrap, tec_dir_uno_wrap, tec_dir_una_wrap, tec_dir_rt_wrap,
    flo_man_qty_prep, flo_man_uno_prep, flo_man_una_prep, flo_man_rt_prep,
    flo_man_qty_wrap, flo_man_uno_wrap, flo_man_una_wrap, flo_man_rt_wrap,
    lig_dir_qty_prep, lig_dir_uno_prep, lig_dir_una_prep, lig_dir_rt_prep,
    lig_dir_qty_wrap, lig_dir_uno_wrap, lig_dir_una_wrap, lig_dir_rt_wrap,
    boardm_qty_prep, boardm_uno_prep, boardm_una_prep, boardm_rt_prep,
    boardm_qty_wrap, boardm_uno_wrap, boardm_una_wrap, boardm_rt_wrap,
    audio_qty_prep, audio_uno_prep, audio_una_prep, audio_rt_prep,
    audio_qty_wrap, audio_uno_wrap, audio_una_wrap, audio_rt_wrap,
    vtr_op_qty_prep, vtr_op_uno_prep, vtr_op_una_prep, vtr_op_rt_prep,
    vtr_op_qty_wrap, vtr_op_uno_wrap, vtr_op_una_wrap, vtr_op_rt_wrap,
    stageh_qty_prep, stageh_uno_prep, stageh_una_prep, stageh_rt_prep,
    stageh_qty_wrap, stageh_uno_wrap, stageh_una_wrap, stageh_rt_wrap,
    oth_tv_qty_prep, oth_tv_uno_prep, oth_tv_una_prep, oth_tv_rt_prep,
    oth_tv_qty_wrap, oth_tv_uno_wrap, oth_tv_una_wrap, oth_tv_rt_wrap,
    tecsupprep_total, tecsupwrap_total, tecsupall_total,
    tecdirprep_total, tecdirwrap_total, tecdirall_total,
    flomanprep_total, flomanwrap_total, flomanall_total,
    ligdirprep_total, ligdirwrap_total, ligdirall_total,
    boamanprep_total, boamanwrap_total, boamanall_total,
    audprep_total, audwrap_total, audall_total,
    vtropprep_total, vtropwrap_total, vtropall_total,
    stagehprep_total, stagehwrap_total, stagehall_total,
    othtvprep_total, othtvwrap_total, othtvall_total,
    // Production Office
    office_rentals, office_equipment, office_supplies,
    phones_net, courier_postage, office_other, proOff_total,
    // Studio
    studio_rentals, power, carpentry_rentals, studio_total,
    studio_fx_equipment, studio_security, studio_other,
    // Site
    surveying_scouting, site_rentals, site_power, site_access,
    site_insurance, repairs_construction, site_security, site_other,
    police_control, site_total,
    // unit
    catering, craft_expenses, meal_penalty,
    green_room, first_aid, outfitting,
    medical_insurance, unit_other, unit_total,
    // travel living
    fares, accomatation_hotels, per_diems, taxis_limos,
    shipping, other_trav_liv, customs_brokerage, traliv_total,
    // Transport
    production_cars, trucks_vans, buses, motorhomes, transport_total,
    talent_cars, support_vehicles, boats_planes, fuel, repairs, taxis,
    parking, licenses_permits, brokerage_insurance, other_transport,
    // Construction Material
    rentals_carpentry, carpentry_purchases, painting_rentals,
    painting_purchases, backdrops_murals, construction_other,
    scaffolding, warehouse_rental, constructionmat_total,
    // art supplies
    drawing_supplies, drawing_equipment, tech, artSup_total,
    stock_prints_processing, blueprinting, other_art,
    // dressing
    dress_rentals, dress_purchases, dress_manufacture,
    dress_repairs_replacements, other_dressing, dressing_total,
    // props
    props_rentals, props_purchases, graphics_signs,
    props_repairs_replac, picture_vehicle_rentals, picture_vehicle_purchases,
    picture_vehicle_mods, picture_vehicle_ins, other_props, props_total,
    // FX
    fx_rentals, fx_purchases, stunts_purchases_rentals,
    armaments_permits_fees, other_fx, fx_total,
    // Animals
    animals_rentals, animals_purchases, food_stabling,
    transport, vet, customs_broker, other_animals, animals_total,
    // Wardrobe
    wardrobe_rentals, wardrobe_purchases, ward_manufact,
    ward_ship_brok, ward_repairs_clean, other_ward, wardrobe_total,
    // Makeup
    makeup_rentals, makeup_purchases, hair_rentals, makeup_total,
    hair_purchases, wigs, makeup_fx, makeup_ship_brok, other_makeup,
    // Camera Equipment
    basic_package_rent_cam, daily_rentals_cam, other_camera,
    specialty_rent_cam, camera_purchases, steadicam, camera_total,
    video_teleprompter, camera_ship_brok, loss_damage_cam,
    // Electric Equipment
    basic_package_rent_elec, daily_rentals_elec,
    specialty_rent_elec, electric_purchases, electric_total,
    generators, loss_damage_elec, other_electric,
    // Grip Equipment
    basic_package_rent_grip, daily_rentals_grip, grip_total,
    specialty_rent_grip, crane_rentals, scaffolding_grip,
    grip_purchases, loss_damage_grip, other_grip,
    // Sound Equipment
    basic_package_rent_sound, daily_rentals_sound, sound_total,
    wireless_mics, sound_purchases, walkie_talkies, other_sound,
    // Second Unit
    crew_2U, equipment_2U, travliv_2U, transport_2U, secondU_total,
    mat_sup_2U, aerial_unit, marine_unit, fringes_taxes_2U, other_2U,
    // Stock and Lab
    film_stock, video_stock, digital_stock, transfer_stock,
    hard_drives, dalies, telecine, audio_stock, magnetic_transfer,
    stills, loss_dam_lab, other_lab, stockLab_total,
    // Publicity
    tests_theater_ren, tests_other, unit_publicist,
    pub_press_ex, photography, epk, promotion, pr, firnges_pub,
    other_pub, previews, website, pub_total,
    // Insurance
    pro_package, gen_lia, eando, umbrella, 
    union_insurance, other_in, insur_total,
    // General Expenses
    legal, medical, licences, payroll, bank_charges, audit,
    genEx_total,
    // Indirect Costs
    corporate_overhead, interim_financing, fiscal_sponsor_fee,
    indirCo_total,
    // Contingency/Bond
    contingency, completion_bond,

    } = budget13;

  const history = useHistory();
  const [showCover, setShowCover] = useState(false);
  const [showTop, setShowTop] = useState(false);

  return (
    <div >
    <div className={`${styles.Overview}`}>
    <h2 className={`py-2 ${styles.BoldBlack} ${appStyles.playfair}
     text-center`} >{title} Budget Pages </h2>
    </div>
    {/* back/INFO*/}
    <Row className="mt-1 ml-2 px-3" >
        <Col xs={12}>
        <Button
          className={`${btnStyles.Button} ${btnStyles.Blue} mb-2`}
          onClick={() => history.goBack()}
        >
          Back
        </Button>
        <Button
          className={`float-right py-0 mt-1 ${btnStyles.Blue} ${btnStyles.Button}`}
          onClick={() => setShowInfo(showInfo => !showInfo)} >Information
        </Button>
        </Col>
    </Row>
    {!showInfo ? (
      ""
          ) : (
            <Information  /> 
    ) }   
    {/* Add /Edit Budget */}
    {budget11 ? (
    <Row className='mt-0 mb-0'>
    <Col className="text-center">
    <Link to={`/budgets/edit/${projectId}`}>
    <div className={`px-1`}>
    <span className={ `${styles.Edit} py-1 px-5`}>Edit Budget</span>
    </div>
    </Link>
    </Col>
    </Row>
    ) : (
    <Row className='mt-0 mb-0'>
      <Col className="text-center" xs={{span: 6, offset: 3 }} 
       md={{span: 4, offset: 4 }} >
      <Link to={`/budgets/create/${projectId}`}>
      <div className={`px-1`}>
      <span className={ `${styles.Edit} py-1 px-5`}>Create Budget</span>
      </div>
      </Link>
      </Col>
    </Row>
    ) }
    {/* Cover and Top sheets buttons */}
    <Row className="mt-1 ml-2" >
        <Col xs={6} className='text-center'>
        <Button
          className={`${btnStyles.Button} ${btnStyles.Shed} mb-2`}
          onClick={() => setShowCover(showCover => !showCover)}
        >
          Budget Cover Page
        </Button>
        </Col>
        <Col xs={6} className='text-center'>
        <Button
          className={`${btnStyles.Button} ${btnStyles.Shed} mb-2`}
          onClick={() => setShowTop(showTop => !showTop)}
        >
          Budget Top Sheet
        </Button>
        </Col>
    </Row>
    {/* Cover and Top sheets */}
    {!showCover ? (
      ""
    ) : (
      <Budgetcover 
      setShowCover={setShowCover}
      budget={budget11} 
      /> 
    ) }
    {!showTop ? (
      ""
    ) : (
      <BudgetTop 
      setShowTop={setShowTop}
      budget1={budget11} 
      budget2={budget12} 
      budget3={budget13} 
       /> 
    ) }
    {/* BUDGET ALL */}
    <div className={`${styles.WhiteBack} mx-5 mt-3 mb-5`}>
    <div className='mt-3'>
    <Row className={ `${styles.OverviewBlue} mx-0 mt-3 py-3 text-center`}>
    <Col xs={12}>
    <h5 className={ `${styles.BoldBlack}`}>BUDGET DETAIL PAGE</h5>
    </Col>
    </Row>
    {/* <div className="px-2" >
    <Row>
        <Col>
        <p>One</p>
        <p>{id} - {budget_number} </p>
        </Col>
      </Row>
    </div> */}
    {/* DETAILS LENGTH */}
    <div className={ `my-0 py-0`}>
    <Row className='px-5'>
    <Col md={1} ></Col>
    {/* details */}
    <Col xs={12} md={5} className={ `${styles.RightBorder} my-0 py-0`}>
    {/* Title */}
    <Row>
    <Col xs={4}>
    <p className={`${styles.Underline6}`}>Title</p>
    </Col>
    <Col xs={2}>   
    </Col>
    <Col xs={6}>
    <p className={`${styles.Underline}`}>{title || ""}</p>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* series */}
    <Row>
    <Col xs={4}>
    <p className={`${styles.Underline6}`}>Series</p>
    </Col>
    <Col xs={2}>   
    </Col>
    <Col xs={6}>
    <p className={`${styles.Underline}`}>{series || ""}</p>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* prodco */}
    <Row>
    <Col xs={4}>
    <p className={`${styles.Underline6}`}>Prodco</p>
    </Col>
    <Col xs={2}>   
    </Col>
    <Col xs={6}>
    <p className={`${styles.Underline}`}>{prodco || ""}</p>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* format */}
    <Row>
    <Col xs={4}>
    <p className={`${styles.Underline6}`}>Format</p>
    </Col>
    <Col xs={2}>   
    </Col>
    <Col xs={6}>
    <p className={`${styles.Underline}`}>{format || ""}</p>
    </Col>
    </Row> 
    {/* hr */}
    <Row>
    <Col >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* location */}
    <Row>
    <Col xs={4}>
    <p className={`${styles.Underline6}`}>Location</p>
    </Col>
    <Col xs={2}>   
    </Col>
    <Col xs={6}>
    <p className={`${styles.Underline}`}>{location || ""}</p>
    </Col>
    </Row> 
    {/* hr */}
    <Row>
    <Col >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Dated */}
    <Row>
    <Col xs={4}>
    <p className={`${styles.Underline6}`}>Dated</p>
    </Col>
    <Col xs={2}>   
    </Col>
    <Col xs={6}>
    <p className={`${styles.Underline}`}>{dated || "-"}</p>
    </Col>
    </Row> 
    {/* hr */}
    <Row>
    <Col >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    </Col>
    <Col xs={12} md={5} className='pl-5' >
    {/* development */}
    <Row className='mt-3 mt-md-0'>
    <Col xs={7}>
    <p className={`${styles.Underline6}`}>Development</p>
    </Col>
    <Col xs={2}>
    <p className={`${styles.Underline}`}>{research || 0}</p>  
    </Col>
    <Col xs={3}>
    <p className={`${styles.Underline}`}>Weeks</p>
    </Col>
    </Row> 
    {/* hr */}
    <Row>
    <Col >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Prep */}
    <Row >
    <Col xs={7}>
    <p className={`${styles.Underline6}`}>Prep</p> 
    </Col>
    <Col xs={2}>
    <p className={`${styles.Underline}`}>{prep || 0}</p>   
    </Col>
    <Col xs={3}>
    <p className={`${styles.Underline}`}>Weeks</p>
    </Col>
    </Row> 
    {/* hr */}
    <Row>
    <Col >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* shoot */}
    <Row >
    <Col xs={7}>
    <p className={`${styles.Underline6}`}>Shoot</p> 
    </Col>
    <Col xs={2}>
    <p className={`${styles.Underline}`}>{shoot || 0}</p>
    </Col>
    <Col xs={3}>
    <p className={`${styles.Underline}`}>Weeks</p>
    </Col>
    </Row> 
    {/* hr */}
    <Row>
    <Col >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    <Row >
    <Col xs={7}>
    <p className={`${styles.Underline6}`}>Wrap</p> 
    </Col>
    <Col xs={2}>
    <p className={`${styles.Underline}`}>{wrap || 0}</p>  
    </Col>
    <Col xs={3}>
    <p className={`${styles.Underline}`}>Weeks</p>
    </Col>
    </Row> 
    {/* hr */}
    <Row>
    <Col >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    <Row >
    <Col xs={7}>
    <p className={`${styles.Underline6}`}>Post</p>
    </Col>
    <Col xs={2}>
    <p className={`${styles.Underline}`}>{post || 0}</p>  
    </Col>
    <Col xs={3}>
    <p className={`${styles.Underline}`}>Weeks</p>
    </Col>
    </Row> 
    {/* hr */}
    <Row>
    <Col >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    <Row >
    <Col xs={7}>
    <p className={`${styles.Underline6}`}>Length Total</p>
    </Col>
    <Col xs={2}>
    <p className={`${styles.Underline}`}>{length_total}</p>   
    </Col>
    <Col xs={3}>
    <p className={`${styles.Underline}`}>Weeks</p>
    </Col>
    </Row> 
    {/* hr */}
    <Row>
    <Col >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>     
    </Col>
    </Row>
    </div>
    {/* prepared by */}
    <div className={ `mt-4 px-5`}>
    <Row>
    <Col md={1} ></Col>
    <Col md={5} className={ `${styles.RightBorder} my-0 py-0`} >
    <Row>
    <Col md={6} >
    <p className={`${styles.Underline6}`}>
    BUDGET PREPARED BY
    </p>
    </Col>
    <Col md={6} >
    <p className={`${styles.Underline}`}>
    {preparedby}
    </p>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    <Row>
    <Col md={6} >
    <p className={`${styles.Underline6}`}>
    PRELIMINARY OR FINAL
    </p>
    </Col>
    <Col md={6} >
    <p className={`${styles.Underline}`}>
    {prelimfin}
    </p>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    </Col>
    <Col md={5} className='pl-md-5'>
    <Row>
    <Col md={7} >
    <p className={`${styles.Underline6}`}>
    BUDGET APPROVED BY
    </p>
    </Col>
    <Col md={5} >
    <p className={`${styles.Underline}`}>
    {approvedby}
    </p>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    <Row>
    <Col md={7} >
    <p className={`${styles.Underline6}`}>
    APPROVING COMPANY
    </p>
    </Col>
    <Col md={5} >
    <p className={`${styles.Underline}`}>
    {approvedbyco}
    </p>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    </Col>
    </Row>
    </div>
    {/* TOTALS */}
    <div className='mt-3 px-5'>
    <Row>
    <Col md={1} ></Col>
    <Col md={5}>
    <div className='pl-2'>
    {/* TOTAL - ABOVE THE LINE */}
    <Row className='mt-3' >
    <Col className={ `${styles.Overview} my-0 pt-1`} md={10} >
    <p className={ `${styles.Bold} py-0 my-0`}>TOTAL - ABOVE THE LINE "A"</p>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box3} 
         d-flex align-items-center justify-content-center`}>
    <p className={`${styles.BoldBlack} mb-0`}>{above_the_line_total || 0}</p>
    </div>
    </Col>
    </Row>
    {/* TOTAL - BELOW THE LINE "B" PRODUCTION */}
    <Row className='mt-3' >
    <Col className={ `${styles.Overview} my-0`} md={10} >
    <p className={ `${styles.Bold} pb-0 mb-0 pt-1`}>TOTAL - "B" PRODUCTION - LABOUR </p>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box3} 
         d-flex align-items-center justify-content-center`}>
    <p className={`${styles.BoldBlack} mb-0`}>{below_the_lineB_total || 0}</p>
    </div>
    </Col>
    </Row>
    {/* TOTAL - BELOW THE LINE "B" PRODUCTION - COSTS */}
    <Row className='mt-3' >
    <Col className={ `${styles.Overview} my-0 pt-1`} md={10} >
    <p className={ `${styles.Bold} pb-0 mb-0`}>TOTAL - "B" PRODUCTION - COSTS </p>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box3} 
         d-flex align-items-center justify-content-center`}>
    <p className={`${styles.BoldBlack} mb-0`}>{below_the_lineB_costs_total || 0}</p>
    </div>
    </Col>
    </Row>
    {/* TOTAL - BELOW THE LINE "B" PRODUCTION LABOUR AND COSTS */}
    <Row className='mt-3' >
    <Col className={ `${styles.Overview} my-0 pt-1`} md={10} >
    <p className={ `${styles.Bold} pb-0 mb-0`}>TOTAL - "B" LABOUR AND COSTS </p>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box3} 
         d-flex align-items-center justify-content-center`}>
    <p className={`${styles.BoldBlack} mb-0`}>{b_labour_and_costs_total || 0}</p>
    </div>
    </Col>
    </Row>
    {/* TOTAL - POST PRODUCTION "C" */}
    <Row className='mt-3 mb-3' >
    <Col className={ `${styles.Overview} my-0 pt-1`} md={10} >
    <p className={ `${styles.Bold} pb-0 mb-0`}>TOTAL - POST PRODUCTION "C" </p>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box3} 
         d-flex align-items-center justify-content-center`}>
    <p className={`${styles.BoldBlack} mb-0`}>{post_productionC_total || 0}</p>
    </div>
    </Col>
    </Row>
    </div>
    </Col>
    <Col md={5} className='pl-5' >
    <div className='pl-2'>
    {/* TOTAL - BELOW "B" and "C" */}
    <Row className='mt-3 mb-3' >
    <Col className={ `${styles.Overview} my-0 pt-1`} md={10} >
    <p className={ `${styles.BoldBlack} pb-0 mb-0`}>TOTAL - BELOW "B" and "C" </p>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box3} 
         d-flex align-items-center justify-content-center`}>
    <p className={`${styles.BoldBlack} mb-0`}>{belowB_andC_total || 0}</p>
    </div>
    </Col>
    </Row>
    {/* TOTAL - ABOVE/BELOW "A" "B" and "C" */}
    <Row className='mt-3 mb-3' >
    <Col className={ `${styles.Overview} my-0 pt-1`} md={10} >
    <p className={ `${styles.Bold} pb-0 mb-0`}>TOTAL - ABOVE/BELOW "A" "B" and "C" </p>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box3} 
         d-flex align-items-center justify-content-center`}>
    <p className={`${styles.BoldBlack} mb-0`}>{above_belowABC_total || 0}</p>
    </div>
    </Col>
    </Row>
    {/* TOTAL - OTHER "D" */}
    <Row className='mt-3 mb-3' >
    <Col className={ `${styles.Overview} my-0 pt-1`} md={10} >
    <p className={ `${styles.Bold} pb-0 mb-0`}>TOTAL - OTHER "D" </p>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box3} 
         d-flex align-items-center justify-content-center`}>
    <p className={`${styles.BoldBlack} mb-0`}>{otherD_total || 0}</p>
    </div>
    </Col>
    </Row>
    {/* TOTAL - "A", "B", "C" and "D" */}
    <Row className='mt-3 mb-3' >
    <Col className={ `${styles.Overview} my-0 pt-1`} md={10} >
    <p className={ `${styles.Bold} pb-0 mb-0`}>TOTAL - "A", "B", "C" and "D" </p>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box3} 
         d-flex align-items-center justify-content-center`}>
    <p className={`${styles.BoldBlack} mb-0`}>{above_belowABCandD_total || 0}</p>
    </div>
    </Col>
    </Row>
    {/* TOTAL - GRAND */}
    <Row className='mt-3 mb-3' >
    <Col className={ `${styles.Overview} my-0 pt-1`} md={10} >
    <p className={ `${styles.Bold} pb-0 mb-0`}>TOTAL - GRAND </p>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box3} 
         d-flex align-items-center justify-content-center`}>
    <p className={`${styles.BoldBlack} mb-0`}>{grand_total || 0}</p>
    </div>
    </Col>
    </Row>
    </div>
    </Col>
    </Row>
    </div>
    {/* ABOVE THE LINE -----------------------------------------*/}
    <div className='px-3'>
    <Row >
    <Col md={1} ></Col>
    <Col md={10} className={ `${styles.OverviewBlue} mt-5 mb-3 
    py-2 d-flex align-items-center justify-content-center`}>
    <h5 className={ `${styles.BoldBlack}`}>ABOVE THE LINE</h5>
    </Col>
    </Row>
    {/* RIGHTS --------------------------------------- ------ */}
    <div>
    <Row >
    <Col md={1} ></Col>
    <Col md={1}>
    <p className={ `${styles.BoldBlack} pb-0 mb-0`}>01.00</p>
    </Col>
    <Col md={7} >   
    <p className={ `${styles.BoldBlack} pb-0 mb-0`}>RIGHTS</p>
    </Col>
    </Row>
    {/* TITLES */}
    <Row className={ `mb-2 py-0`} >
    <Col md={1} ></Col>
    <Col className={ `${styles.Overview} py-1`} md={1} >
    <p className="mb-0">ACCT</p>
    </Col>
    <Col className={ `${styles.Overview} py-1`} md={3} >
    <p className="mb-0">Description</p>
    </Col>
    <Col className={`${styles.Overview} text-center py-1`} md={1} >
    <p className="mb-0">#</p>
    </Col>
    <Col className={`${styles.Overview} text-center py-1`} md={1} >
    <p># Unit</p>
    </Col>
    <Col md={1} className={`${styles.Overview} text-center py-1`} >
    <p className="mb-0">Unit</p>
    </Col>
    <Col md={1} className={`${styles.Overview} text-center py-1`} >
    <p className="mb-0">Price</p>
    </Col>
    <Col md={2} className={`${styles.Overview} text-center py-1`} >
    <p className="mb-0">Total</p>
    </Col>
    <Col md={1}></Col>
    </Row>
    {/* Story */}
    <Row >
    <Col md={1} ></Col>
    <Col md={1}>
    <p className={`${styles.Underline}`}>01.10</p>
    </Col>
    <Col md={4}>
    <p className={`${styles.Underline}`}>Story Rights</p>
    </Col>
    <Col md={3} ></Col>
    <Col md={2}>
    <div className={`${styles.Box3} d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline} `}>{story_rights || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col md={1}></Col>
    <Col md={10} >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* miscellaneous */}
    <Row >
    <Col md={1} ></Col>
    <Col md={1}>
    <p className={`${styles.Underline}`}>01.20</p>
    </Col>
    <Col md={4}>
    <p className={`${styles.Underline}`}>Miscellaneous</p>
    </Col>
    <Col md={3} ></Col>
    <Col md={2}>
    <div className={`${styles.Box3} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{miscellaneous || 0 } </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col md={1}></Col>
    <Col md={10} >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* total */}
    <Row className='mt-3 mb-1'>
    <Col md={1} ></Col>
    <Col md={1}>
    </Col>
    <Col className={ `${styles.Overview} my-0 pt-1`} md={6} >
    <p className={ `${styles.BoldBlack} pb-0 mb-0`}>TOTAL RIGHTS</p>
    </Col>
    <Col md={1}></Col> 
    <Col md={2}>
    <div className={`${styles.Box3} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.BoldBlack} pb-0 mb-0`}>{rights_total || 0 } </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col md={1}></Col>
    <Col md={10} >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    </div>
    {/* DEVELOPMENT --------------------------------- ------- */}
    <div className='mt-4'>
    <Row>
    <Col md={1}></Col>
    <Col md={1}>
    <p className={`${styles.Underline}`}>02.00</p>
    </Col>
    <Col md={6}>
    <p className={ `${styles.BoldBlack}`}>PRE-PRODUCTION AND DEVELOPMENT</p>
    </Col>
    </Row>
    {/* TITLES */}
    <Row className={ `mb-2 py-0`} >
    <Col md={1} ></Col>
    <Col className={ `${styles.Overview} py-1`} md={1} >
    <p className="mb-0">ACCT</p>
    </Col>
    <Col className={ `${styles.Overview} py-1`} md={3} >
    <p className="mb-0">Description</p>
    </Col>
    <Col className={`${styles.Overview} text-center py-1`} md={1} >
    <p className="mb-0">#</p>
    </Col>
    <Col className={`${styles.Overview} text-center py-1`} md={1} >
    <p># Unit</p>
    </Col>
    <Col md={1} className={`${styles.Overview} text-center py-1`} >
    <p className="mb-0">Unit</p>
    </Col>
    <Col md={1} className={`${styles.Overview} text-center py-1`} >
    <p className="mb-0">Price</p>
    </Col>
    <Col md={2} className={`${styles.Overview} text-center py-1`} >
    <p className="mb-0">Total</p>
    </Col>
    <Col md={1}></Col>
    </Row>
    {/* research */}
    <Row >
    <Col md={1}></Col>
    <Col md={1}>
    <p className={`${styles.Underline}`}>02.10</p>
    </Col>
    <Col md={4}>
    <p className={`${styles.Underline}`}>Research</p>
    </Col>
    <Col md={3}></Col>
    <Col md={2} >
    <div className={`${styles.Box3} 
       d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{research_development || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col md={1}></Col>
    <Col md={10} >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    <Row >
    <Col md={1}></Col>
    <Col md={1}>
    <p className={`${styles.Underline}`}>02.20</p>
    </Col>
    <Col md={4}>
    <p className={`${styles.Underline}`}>Preliminary Breakdown/Budget</p>
    </Col>
    <Col md={3}></Col>
    <Col md={2} className={`text-center`}>
    <div className={`${styles.Box3} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{prelim_budget || 0 } </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col md={1}></Col>
    <Col md={10} >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    <Row >
    <Col md={1}></Col>
    <Col md={1}>
    <p className={`${styles.Underline}`}>02.30</p>
    </Col>
    <Col md={4}>
    <p className={`${styles.Underline}`}>Consultants</p>
    </Col>
    <Col md={3}></Col>
    <Col md={2}>
    <div className={`${styles.Box3} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{consultant_expenses || 0 } </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col md={1}></Col>
    <Col md={10} >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    <Row >
    <Col md={1}></Col>
    <Col md={1}> 
    <p className={`${styles.Underline}`}>02.40</p>
    </Col>
    <Col md={7}>
    <p className={`${styles.Underline}`}>Office Costs/Expenses</p>
    </Col>
    <Col md={2}>
    <div className={`${styles.Box3} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{office_expenses || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col md={1}></Col>
    <Col md={10} >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    <Row >
    <Col md={1}></Col>
    <Col md={1}>
    <p className={`${styles.Underline}`}>02.50</p>
    </Col>
    <Col md={7} >
    <p className={`${styles.Underline}`}>Staff</p>
    </Col>
    <Col md={2}>
    <div className={`${styles.Box3} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{staff || 0 } </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col md={1}></Col>
    <Col md={10} >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    <Row >
    <Col md={1}></Col>
    <Col md={1}>
    <p className={`${styles.Underline}`}>02.60</p>
    </Col>
    <Col md={7}>
    <p className={`${styles.Underline}`}>Travel Expenses</p>
    </Col>
    <Col md={2}>
    <div className={`${styles.Box3} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{travel_expenses_development || 0 } </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col md={1}></Col>
    <Col md={10} >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    <Row >
    <Col md={1}></Col>
    <Col md={1}>
    <p className={`${styles.Underline}`}>02.70</p>
    </Col>
    <Col md={7}>
    <p className={`${styles.Underline}`}>Living Expenses</p>
    </Col>
    <Col md={2}>
    <div className={`${styles.Box3} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{living_expenses_development || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col md={1}></Col>
    <Col md={10} >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    <Row >
    <Col md={1}></Col>
    <Col md={1}>
    <p className={`${styles.Underline}`}>02.80</p>
    </Col>
    <Col md={7}>
    <p className={`${styles.Underline}`}>Other</p>
    </Col>
    <Col md={2}>
    <div className={`${styles.Box3} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{other_development || 0 } </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col md={1}></Col>
    <Col md={10} >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    <Row >
    <Col md={1}></Col>
    <Col md={1}>
    <p className={`${styles.Underline}`}>02.90</p>
    </Col>
    <Col md={7}>
    <p className={`${styles.Underline}`}>Fringes and Taxes</p>
    </Col>
    <Col md={2}>
    <div className={`${styles.Box3} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{fringes_taxes_development || 0 } </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col md={1}></Col>
    <Col md={10} >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* total */}
    <Row className='mt-3 mb-1'>
    <Col md={1}></Col>
    <Col md={1}>
    </Col>
    <Col className={ `${styles.Overview} my-0 pt-1`} md={6} >
    <p className={ `${styles.BoldBlack} pb-0 mb-0`}>TOTAL PRE-PRODUCTION AND DEVELOPMENT</p>
    </Col>
    <Col md={1}></Col>
    <Col md={2}>
    <div className={`${styles.Box4} 
      py-2 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline} mb-0`}>{development_total || 0 } </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col md={1}></Col>
    <Col md={10} >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    </div>
    {/* SCENARIO --------------------------------------------- */}
    <div className='mt-4'>
    <Row>
    <Col md={1} ></Col>
    <Col xs={1}>
    <p className={`${styles.Underline}`}>03.00</p>
    </Col>
    <Col xs={8}>
    <p className={ `${styles.BoldBlack}`}>SCENARIO</p>
    </Col>
    </Row>
    {/* TITLES */}
    <Row className={ `mb-2 py-0`} >
    <Col md={1} ></Col>
    <Col className={ `${styles.Overview} py-1`} md={1} >
    <p className="mb-0">ACCT</p>
    </Col>
    <Col className={ `${styles.Overview} py-1`} md={3} >
    <p className="mb-0">Description</p>
    </Col>
    <Col className={`${styles.Overview} text-center py-1`} md={1} >
    <p className="mb-0">#</p>
    </Col>
    <Col className={`${styles.Overview} text-center py-1`} md={1} >
    <p># Unit</p>
    </Col>
    <Col md={1} className={`${styles.Overview} text-center py-1`} >
    <p className="mb-0">Unit</p>
    </Col>
    <Col md={1} className={`${styles.Overview} text-center py-1`} >
    <p className="mb-0">Price</p>
    </Col>
    <Col md={2} className={`${styles.Overview} text-center py-1`} >
    <p className="mb-0">Total</p>
    </Col>
    <Col md={1}></Col>
    </Row>
    {/* Writers */}
    <Row >
    <Col md={1}></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>03.10</p>
    </Col>
    <Col md={3} >
    <p className={`${styles.Underline}`}>Writers</p>
    </Col>
    <Col md={1}  >
    <div className={`${styles.Box5} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{writers_quantity || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box5} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{writers_units_number || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box5} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{writers_units_name}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box5} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{writers_rate || 0}</p>
    </div>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box3} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{writers_total || 0}</p>
    </div>
    </Col>
    </Row>
    <Row>
    <Col md={1}></Col>
    <Col md={10} >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Consultants */}
    <Row >
    <Col md={1}></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>03.20</p>
    </Col>
    <Col md={3} >
    <p className={`${styles.Underline}`}>Consultants</p>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box5} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{consultants_quantity || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box5} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{consultants_units_number || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box5} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{consultants_units_name || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box5} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{consultants_rate || 0}</p>
    </div>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box3} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{consultants_total || 0}</p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col md={1}></Col>
    <Col md={10} >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Editors */}
    <Row >
    <Col md={1}></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>03.30</p>
    </Col>
    <Col md={3} >
    <p className={`${styles.Underline}`}>Editors</p>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box5} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{editors_scenario_quantity || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box5} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{editors_scenario_units_number || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box5} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{editors_scenario_units_name || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box5} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{editors_scenario_rate || 0}</p>
    </div>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box3} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{editors_scenario_total || 0}</p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col md={1}></Col>
    <Col md={10} >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Admin */}
    <Row >
    <Col md={1}></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>03.40</p>
    </Col>
    <Col md={3} >
    <p className={`${styles.Underline}`}>Admin</p>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box5} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{admin_scenario_quantity || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box5} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{admin_scenario_units_number || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box5} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{admin_scenario_units_name || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box5} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{admin_scenario_rate || 0}</p>
    </div>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box3} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{admin_scenario_total || 0}</p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col md={1}></Col>
    <Col md={10} >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Office Cost/Expenses */}
    <Row >
    <Col md={1}></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>03.50</p>
    </Col>
    <Col md={7} >
    <p className={`${styles.Underline}`}>Office Cost/Expenses</p>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box3} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{office_expenses_scenario || 0}</p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col md={1}></Col>
    <Col md={10} >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Travel Expenses*/}
    <Row >
    <Col md={1}></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>03.60</p>
    </Col>
    <Col md={7} >
    <p className={`${styles.Underline}`}>Travel Expenses</p>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box3} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{travel_expenses_scenario || 0}</p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col md={1}></Col>
    <Col md={10} >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Living Expenses*/}
    <Row >
    <Col md={1}></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>03.70</p>
    </Col>
    <Col md={7} >
    <p className={`${styles.Underline}`}>Living Expenses</p>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box3} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{living_expenses_scenario || 0}</p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col md={1}></Col>
    <Col md={10} >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Other*/}
    <Row >
    <Col md={1}></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>03.80</p>
    </Col>
    <Col md={7} >
    <p className={`${styles.Underline}`}>Other</p>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box3} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{other_scenario || 0}</p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col md={1}></Col>
    <Col md={10} >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Fringes and Taxes*/}
    <Row >
    <Col md={1}></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>03.90</p>
    </Col>
    <Col md={7} >
    <p className={`${styles.Underline}`}>Fringes & Taxes</p>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box3} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{fringes_taxes_scenario || 0}</p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col md={1}></Col>
    <Col md={10} >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* total */}
    <Row className='mt-3 mb-1' >
    <Col md={1}></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}></p>
    <p></p>
    </Col>
    <Col className={ `${styles.Overview} my-0 pt-1`} md={6} >
    <p className={ `${styles.Bold} pb-0 mb-0`}>TOTAL SCENARIO</p>
    </Col>
    <Col md={1} >
    </Col>
    <Col md={2} >
    <div className={`${styles.Box3} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline} mb-0`}>{scenario_total || 0}</p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col md={1}></Col>
    <Col md={10} >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    </div>
    {/* PRODUCERS AND DIRECTORS ------------------------------- */}
    <div className='mt-4'>
    <Row>
    <Col md={1} ></Col>
    <Col xs={1}>
    <p className={`${styles.Underline}`}>04.00</p>
    </Col>
    <Col xs={8}>
    <p className={ `${styles.BoldBlack}`}>PRODUCERS AND DIRECTORS</p>
    </Col>
    </Row>
    {/* TITLES */}
    <Row className={ `mb-2 py-0`} >
    <Col md={1} ></Col>
    <Col className={ `${styles.Overview} py-1`} md={1} >
    <p className="mb-0">ACCT</p>
    </Col>
    <Col className={ `${styles.Overview} py-1`} md={3} >
    <p className="mb-0">Description</p>
    </Col>
    <Col className={`${styles.Overview} text-center py-1`} md={1} >
    <p className="mb-0">#</p>
    </Col>
    <Col className={`${styles.Overview} text-center py-1`} md={1} >
    <p># Unit</p>
    </Col>
    <Col md={1} className={`${styles.Overview} text-center py-1`} >
    <p className="mb-0">Unit</p>
    </Col>
    <Col md={1} className={`${styles.Overview} text-center py-1`} >
    <p className="mb-0">Price</p>
    </Col>
    <Col md={2} className={`${styles.Overview} text-center py-1`} >
    <p className="mb-0">Total</p>
    </Col>
    <Col md={1}></Col>
    </Row>
    {/* Executive Producers */}
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>04.10</p>
    </Col>
    <Col md={3} >
    <p className={`${styles.Underline}`}>Executive Producers</p>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box5} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{executive_producers_quantity || 0}</p>
    </div>
    </Col>
    <Col md={2} >
    <p className={`${styles.Underline}`}></p>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box5} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{executive_producers_rate || 0}</p>
    </div>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box3} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{executive_producers_total || 0}</p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col md={1}></Col>
    <Col md={10} >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Producers */}
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>04.20</p>
    </Col>
    <Col md={3} >
    <p className={`${styles.Underline}`}>Producers</p>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box5} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{producers_quantity || 0}</p>
    </div>
    </Col>
    <Col md={2} >
    <p className={`${styles.Underline}`}></p>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box5} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{producers_rate || 0}</p>
    </div>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box3} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{producers_total || 0}</p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col md={1}></Col>
    <Col md={10} >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Line Producers */}
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>04.30</p>
    </Col>
    <Col md={3} >
    <p className={`${styles.Underline}`}>Line Producers</p>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box5} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{line_producers_quantity || 0}</p>
    </div>
    </Col>
    <Col md={2} >
    <p className={`${styles.Underline}`}></p>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box5} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{line_producers_rate || 0}</p>
    </div>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box3} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{line_producers_total || 0}</p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col md={1}></Col>
    <Col md={10} >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Co-Producers */}
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>04.40</p>
    </Col>
    <Col md={3} >
    <p className={`${styles.Underline}`}>Co-Producers</p>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box5} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{co_producers_quantity || 0}</p>
    </div>
    </Col>
    <Col md={2} >
    <p className={`${styles.Underline}`}></p>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box5} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{co_producers_rate || 0}</p>
    </div>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box3} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{co_producers_total || 0}</p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col md={1}></Col>
    <Col md={10} >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Associate Producers */}
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>04.50</p>
    </Col>
    <Col md={3} >
    <p className={`${styles.Underline}`}>Associate Producers</p>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box5} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{associate_producers_quantity || 0}</p>
    </div>
    </Col>
    <Col md={2} >
    <p className={`${styles.Underline}`}></p>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box5} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{associate_producers_rate || 0}</p>
    </div>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box3} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{associate_producers_total || 0}</p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col md={1}></Col>
    <Col md={10} >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Directors */}
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>04.60</p>
    </Col>
    <Col md={3} >
    <p className={`${styles.Underline}`}>Directors</p>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box5} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{directors_quantity || 0}</p>
    </div>
    </Col>
    <Col md={2} >
    <p className={`${styles.Underline}`}></p>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box5} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{directors_rate || 0}</p>
    </div>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box3} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{directors_total || 0}</p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col md={1}></Col>
    <Col md={10} >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* 2nd Unit Directors */}
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>04.70</p>
    </Col>
    <Col md={3} >
    <p className={`${styles.Underline}`}>2nd Unit Directors</p>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box5} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{unit2_directors_quantity || 0}</p>
    </div>
    </Col>
    <Col md={2} >
    <p className={`${styles.Underline}`}></p>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box5} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{unit2_directors_rate || 0}</p>
    </div>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box3} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{unit2_directors_total || 0}</p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col md={1}></Col>
    <Col md={10} >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Travel Expenses */}
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>04.80</p>
    </Col>
    <Col md={7} >
    <p className={`${styles.Underline}`}>Travel Expenses</p>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box3} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{travel_expenses_producers_dirs || 0}</p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col md={1}></Col>
    <Col md={10} >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Living Expenses */}
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>04.90</p>
    </Col>
    <Col md={7} >
    <p className={`${styles.Underline}`}>Living Expenses</p>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box3} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{living_expenses_producers_dirs || 0}</p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col md={1}></Col>
    <Col md={10} >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Other */}
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>04.91</p>
    </Col>
    <Col md={7} >
    <p className={`${styles.Underline}`}>Other</p>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box3} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{other_producers_dirs || 0}</p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col md={1}></Col>
    <Col md={10} >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Fringes & Taxes */}
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>04.92</p>
    </Col>
    <Col md={7} >
    <p className={`${styles.Underline}`}>Fringes & Taxes</p>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box3} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{fringes_taxes_producers_dirs || 0}</p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col md={1}></Col>
    <Col md={10} >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* total */}
    <Row className='mt-3 mb-1'>
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}></p>
    <p></p>
    </Col>
    <Col className={ `${styles.Overview} my-0 py-0`} md={6} >
    <p className={ `${styles.Bold} pb-0 mb-0 pt-1`}>TOTAL PRODUCERS /DIRECTORS </p>
    </Col>
    <Col md={1} >
    </Col>
    <Col md={2} >
    <div className={`${styles.Box3} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline} mb-0`}>{producers_dirs_total || 0}</p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col md={1}></Col>
    <Col md={10} >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    </div>
    {/* STARS / MUSIC ---------------------------------------- */}
    <div className='mt-4'>
    <Row>
    <Col md={1} ></Col>
    <Col xs={1}>
    <p className={ `${styles.BoldBlack}`}>05.00</p>
    </Col>
    <Col xs={8}>
    <p className={ `${styles.BoldBlack}`}>STARS / MUSIC</p>
    </Col>
    </Row>
    {/* TITLES */}
    <Row className={ `mb-2 py-0`} >
    <Col md={1} ></Col>
    <Col className={ `${styles.Overview} py-1`} md={1} >
    <p className="mb-0">ACCT</p>
    </Col>
    <Col className={ `${styles.Overview} py-1`} md={3} >
    <p className="mb-0">Description</p>
    </Col>
    <Col className={`${styles.Overview} text-center py-1`} md={1} >
    <p className="mb-0">#</p>
    </Col>
    <Col className={`${styles.Overview} text-center py-1`} md={1} >
    <p># Unit</p>
    </Col>
    <Col md={1} className={`${styles.Overview} text-center py-1`} >
    <p className="mb-0">Unit</p>
    </Col>
    <Col md={1} className={`${styles.Overview} text-center py-1`} >
    <p className="mb-0">Price</p>
    </Col>
    <Col md={2} className={`${styles.Overview} text-center py-1`} >
    <p className="mb-0">Total</p>
    </Col>
    <Col md={1}></Col>
    </Row>
    <Row>
    <Col md={1} ></Col>
    <Col xs={1}>
    <p className='mb-2'></p>
    </Col>
    <Col xs={6}>
    <p className={ `${styles.BoldBlackU} mb-2`}>STARS</p>
    </Col>
    </Row>
    {/* Stars */}
    <Row >
    <Col md={1} ></Col>
    <Col md={1}>
    <p className={`${styles.Underline}`}>05.10</p>
    </Col>
    <Col md={7}>
    <p className={`${styles.BoldBlack}`}>Stars</p>
    </Col>
    <Col md={2}>
    <div className={`${styles.Box3} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{stars || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col md={1}></Col>
    <Col md={10} >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Stars Rights Payments */}
    <Row >
    <Col md={1} ></Col>
    <Col md={1}>
    <p className={`${styles.Underline}`}>05.20</p>  
    </Col>
    <Col md={7}>
    <p className={`${styles.BoldBlack}`}>Rights Payments</p>
    </Col>
    <Col md={2}>
    <div className={`${styles.Box3} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{stars_rights_payments || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col md={1}></Col>
    <Col md={10} >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Stars - Travel Expenses */}
    <Row >
    <Col md={1} ></Col>
    <Col md={1}>
    <p className={`${styles.Underline}`}>05.30</p>
    </Col>
    <Col md={7}>
    <p className={`${styles.BoldBlack}`}>Travel Expenses</p>
    </Col>
    <Col md={2}>
    <div className={`${styles.Box3} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{travel_expenses_stars || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col md={1}></Col>
    <Col md={10} >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Stars - Living Expenses */}
    <Row >
    <Col md={1} ></Col>
    <Col md={1}>
    <p className={`${styles.Underline}`}>05.40</p>
    </Col>
    <Col md={7}>
    <p className={`${styles.BoldBlack}`}>Living Expenses</p>
    </Col>
    <Col md={2}>
    <div className={`${styles.Box3} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{living_expenses_stars || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col md={1}></Col>
    <Col md={10} >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Stars - Other */}
    <Row >
    <Col md={1} ></Col>
    <Col md={1}>
    <p className={`${styles.Underline}`}>05.50</p>
    </Col>
    <Col md={7}>
    <p className={`${styles.BoldBlack}`}>Other</p>
    </Col>
    <Col md={2}>
    <div className={`${styles.Box3} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{other_stars || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col md={1}></Col>
    <Col md={10} >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Stars - Fringes Taxes */}
    <Row >
    <Col md={1} ></Col>
    <Col md={1}>
    <p className={`${styles.Underline}`}>05.60</p>
    </Col>
    <Col md={7}>
    <p className={`${styles.BoldBlack}`}>Fringes & Taxes</p>
    </Col>
    <Col md={2}>
    <div className={`${styles.Box3} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{fringes_taxes_stars || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col md={1}></Col>
    <Col md={10} >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* MUSIC */}
    <Row className='mt-3' >
    <Col md={1} ></Col>
    <Col xs={1}>
    <p className='mb-2'></p>
    </Col>
    <Col xs={6}>
    <p className={ `${styles.BoldBlackU} mb-2`}>MUSIC</p>
    </Col>
    </Row>
    {/* Music */}
    <Row >
    <Col md={1} ></Col>
    <Col md={1}>
    <p className={`${styles.Underline}`}>05.70</p>
    </Col>
    <Col md={7}>
    <p className={`${styles.BoldBlack}`}>
    Music: All-in package includes Composer, Musicians, 
    Score, and Recording Session</p>
    </Col>
    <Col md={2}>
    <div className={`${styles.Box3} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{music || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col md={1}></Col>
    <Col md={10} >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Music Supervisor */}
    <Row >
    <Col md={1} ></Col>
    <Col md={1}>
    <p className={`${styles.Underline}`}>05.80</p>
    </Col>
    <Col md={7}>
    <p className={`${styles.BoldBlack}`}>Music Supervisor</p>
    </Col>
    <Col md={2}>
    <div className={`${styles.Box3} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{music_supervisor || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col md={1}></Col>
    <Col md={10} >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Music - Travel Expenses */}
    <Row >
    <Col md={1} ></Col>
    <Col md={1}>
    <p className={`${styles.Underline}`}>05.90</p>
    </Col>
    <Col md={7}>
    <p className={`${styles.BoldBlack}`}>Travel Expenses</p>
    </Col>
    <Col md={2}>
    <div className={`${styles.Box3} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{travel_expenses_music || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col md={1}></Col>
    <Col md={10} >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Music - Living Expenses */}
    <Row >
    <Col md={1} ></Col>
    <Col md={1}>
    <p className={`${styles.Underline}`}>05.91</p>
    </Col>
    <Col md={7}>
    <p className={`${styles.BoldBlack}`}>Living Expenses</p>
    </Col>
    <Col md={2}>
    <div className={`${styles.Box3} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{living_expenses_music || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col md={1}></Col>
    <Col md={10} >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Add'l Music Rights - Songs, etc. */}
    <Row >
    <Col md={1} ></Col>
    <Col md={1}>
    <p className={`${styles.Underline}`}>05.92</p>
    </Col>
    <Col md={7}>
    <p className={`${styles.BoldBlack}`}>Add'l Music Rights - Songs, etc.</p>
    </Col>
    <Col md={2}>
    <div className={`${styles.Box3} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{music_rights_addl_songs || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col md={1}></Col>
    <Col md={10} >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Music - Other */}
    <Row >
    <Col md={1} ></Col>
    <Col md={1}>
    <p className={`${styles.Underline}`}>05.93</p>
    </Col>
    <Col md={7}>
    <p className={`${styles.BoldBlack}`}>Other</p>
    </Col>
    <Col md={2}>
    <div className={`${styles.Box3} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{other_music || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col md={1}></Col>
    <Col md={10} >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Music - Fringes and Taxes */}
    <Row >
    <Col md={1} ></Col>
    <Col md={1}>
    <p className={`${styles.Underline}`}>05.94</p>
    </Col>
    <Col md={7}>
    <p className={`${styles.BoldBlack}`}>Fringes & Taxes</p>
    </Col>
    <Col md={2}>
    <div className={`${styles.Box3} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{fringes_taxes_music || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col md={1}></Col>
    <Col md={10} >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Stars / Music Total */}
    <Row className='mt-3 mb-1' >
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}></p>
    <p></p>
    </Col>
    <Col className={ `${styles.Overview} my-0 pt-1`} md={6} >
    <p className={ `${styles.Bold} pb-0 mb-0`}>TOTAL STARS / MUSIC </p>
    </Col>
    <Col md={1} >
    </Col>
    <Col md={2} >
    <div className={`${styles.Box3} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline} mb-0`}>{stars_music_total || 0}</p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col md={1}></Col>
    <Col md={10} >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    </div>
    {/* ABOVE THE LINE - TOTAL */}
    <div className="mt-5 pl-3">
    <Row >
    <Col md={1} ></Col>
    <Col className={ `${styles.Overview} my-0 pt-1`} md={8} >
    <p className={ `${styles.BoldBlack} pb-0 mb-0`}>TOTAL ABOVE THE LINE</p>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box3} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.BoldBlack}`}>{above_the_line_total || 0}</p>
    </div>
    </Col>
    </Row>
    </div>
    </div>
    {/* BELOW THE LINE "B" PRODUCTION - LABOUR -----------------*/}
    <div className='px-3'>
    <Row >
    <Col md={1} ></Col>
    <Col md={10} className={ `${styles.OverviewBlue} mt-5 mb-3 py-2
     d-flex align-items-center justify-content-center`}>
    <h5 className={ `${styles.BoldBlack}`}>BELOW THE LINE - "B" PRODUCTION - LABOUR</h5>
    </Col>
    </Row>
    {/* CAST ------------------------------------------------ */}
    <div className='mt-3'>
    <Row>
    <Col md={1} ></Col>
    <Col xs={1}>
    <p className={`${styles.Underline}`}>06.00</p>
    </Col>
    <Col xs={8}>
    <p className={ `${styles.BoldBlack}`}>CAST</p>
    </Col>
    </Row>
    {/* TITLES */}
    <Row className={ `mb-2 py-0`} >
    <Col md={1} ></Col>
    <Col className={ `${styles.Overview} py-1`} md={1} >
    <p className="mb-0">ACCT</p>
    </Col>
    <Col className={ `${styles.Overview} py-1`} md={3} >
    <p className="mb-0">Description</p>
    </Col>
    <Col className={`${styles.Overview} text-center py-1`} md={1} >
    <p className="mb-0">#</p>
    </Col>
    <Col className={`${styles.Overview} text-center py-1`} md={1} >
    <p># Unit</p>
    </Col>
    <Col md={1} className={`${styles.Overview} text-center py-1`} >
    <p className="mb-0">Unit</p>
    </Col>
    <Col md={1} className={`${styles.Overview} text-center py-1`} >
    <p className="mb-0">Price</p>
    </Col>
    <Col md={2} className={`${styles.Overview} text-center py-1`} >
    <p className="mb-0">Total</p>
    </Col>
    <Col md={1}></Col>
    </Row>
    {/* Principals #1 - wks/rt #1 */}
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>06.10</p>
    </Col>
    <Col md={3} >
    <p className={`${styles.Underline}`}>Principals #1 - wks/rt #1</p>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box5} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{principals_quantity || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box5} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{principals_units_number || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box5} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{principals_units_name}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box5} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{principals_rate || 0}</p>
    </div>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box3} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{principals_total || 0}</p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col md={1}></Col>
    <Col md={10} >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Principals #2 - wks/rt #2 */}
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>06.20</p>
    </Col>
    <Col md={3} >
    <p className={`${styles.Underline}`}>Principals #2 - wks/rt #2</p>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box5} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{prin_2_qty || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box5} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{prin_2_uno || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box5} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{prin_2_una}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box5} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{prin_2_rt || 0}</p>
    </div>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box3} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{princ2_total || 0}</p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col md={1}></Col>
    <Col md={10} >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Principals #3 - wks/rt #3 */}
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>06.30</p>
    </Col>
    <Col md={3} >
    <p className={`${styles.Underline}`}>Principals #3 - wks/rt #3</p>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box5} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{prin_3_qty || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box5} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{prin_3_uno || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box5} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{prin_3_una}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box5} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{prin_3_rt || 0}</p>
    </div>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box3} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{princ3_total || 0}</p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col md={1}></Col>
    <Col md={10} >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Actors #1 - wks/rt #1 */}
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>06.40</p>
    </Col>
    <Col md={3} >
    <p className={`${styles.Underline}`}>Actors #1 - wks/rt #1</p>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box5} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{actors_quantity || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box5} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{actors_units_number || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box5} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{actors_units_name}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box5} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{actors_rate || 0}</p>
    </div>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box3} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{actors_total || 0}</p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col md={1}></Col>
    <Col md={10} >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Actors #2 - wks/rt #2 */}
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>06.50</p>
    </Col>
    <Col md={3} >
    <p className={`${styles.Underline}`}>Actors #2 - wks/rt #2</p>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box5} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{actors_2_qty || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box5} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{actors_2_uno || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box5} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{actors_2_una}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box5} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{actors_2_rt || 0}</p>
    </div>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box3} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{actor2_total || 0}</p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col md={1}></Col>
    <Col md={10} >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Actors #3 - wks/rt #3 */}
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>06.60</p>
    </Col>
    <Col md={3} >
    <p className={`${styles.Underline}`}>Actors #3 - wks/rt #3</p>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box5} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{actors_3_qty || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box5} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{actors_3_uno || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box5} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{actors_3_una}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box5} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{actors_3_rt || 0}</p>
    </div>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box3} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{actor3_total || 0}</p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col md={1}></Col>
    <Col md={10} >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Actors #4 - wks/rt #4 */}
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>06.70</p>
    </Col>
    <Col md={3} >
    <p className={`${styles.Underline}`}>Actors #4 - wks/rt #4</p>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box5} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{actors_4_qty || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box5} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{actors_4_uno || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box5} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{actors_4_una}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box5} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{actors_4_rt || 0}</p>
    </div>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box3} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{actor4_total || 0}</p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col md={1}></Col>
    <Col md={10} >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Actors #5 - wks/rt #5 */}
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>06.80</p>
    </Col>
    <Col md={3} >
    <p className={`${styles.Underline}`}>Actors #5 - wks/rt #5</p>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box5} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{actors_5_qty || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box5} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{actors_5_uno || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box5} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{actors_5_una}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box5} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{actors_5_rt || 0}</p>
    </div>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box3} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{actor5_total || 0}</p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col md={1}></Col>
    <Col md={10} >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Actors #6 - wks/rt #6 */}
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>06.90</p>
    </Col>
    <Col md={3} >
    <p className={`${styles.Underline}`}>Actors #6 - wks/rt #6</p>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box5} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{actors_6_qty || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box5} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{actors_6_uno || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box5} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{actors_6_una}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box5} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{actors_6_rt || 0}</p>
    </div>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box3} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{actor6_total || 0}</p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col md={1}></Col>
    <Col md={10} >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Actors #7 - wks/rt #7 */}
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>06.91</p>
    </Col>
    <Col md={3} >
    <p className={`${styles.Underline}`}>Actors #7 - wks/rt #7</p>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box5} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{actors_7_qty || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box5} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{actors_7_uno || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box5} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{actors_7_una}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box5} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{actors_7_rt || 0}</p>
    </div>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box3} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{actor7_total || 0}</p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col md={1}></Col>
    <Col md={10} >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Actors - 1 Week */}
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>06.92</p>
    </Col>
    <Col md={3} >
    <p className={`${styles.Underline}`}>Actors - 1 Week</p>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box5} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{actors_week_qty || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box5} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{actors_week_uno || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box5} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{actors_week_una}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box5} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{actors_week_rt || 0}</p>
    </div>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box3} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{actorweek_total || 0}</p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col md={1}></Col>
    <Col md={10} >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Actors - 1 Day */}
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>06.94</p>
    </Col>
    <Col md={3} >
    <p className={`${styles.Underline}`}>Actors - 1 Day</p>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box5} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{actors_day_qty || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box5} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{actors_day_uno || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box5} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{actors_day_una}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box5} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{actors_day_rt || 0}</p>
    </div>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box3} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{actorday_total || 0}</p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col md={1}></Col>
    <Col md={10} >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Stunt Coordinators */}
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>06.94</p>
    </Col>
    <Col md={3} >
    <p className={`${styles.Underline}`}>Stunt Coordinators</p>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box5} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{stuntcoordinators_quantity || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box5} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{stuntcoordinators_units_number || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box5} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{stuntcoordinators_units_name}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box5} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{stuntcoordinators_rate || 0}</p>
    </div>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box3} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{stuntcoordinators_total || 0}</p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col md={1}></Col>
    <Col md={10} >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Stunt Performers */}
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>06.95</p>
    </Col>
    <Col md={3} >
    <p className={`${styles.Underline}`}>Stunt Performers</p>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box5} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{stuntperformers_quantity || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box5} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{stuntperformers_units_number || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box5} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{stuntperformers_units_name}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box5} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{stuntperformers_rate || 0}</p>
    </div>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box3} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{stuntperformers_total || 0}</p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col md={1}></Col>
    <Col md={10} >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Other Performers */}
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>06.96</p>
    </Col>
    <Col md={3} >
    <p className={`${styles.Underline}`}>Other Performers</p>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box5} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{otherperformers_quantity || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box5} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{otherperformers_units_number || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box5} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{otherperformers_units_name}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box5} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{otherperformers_rate || 0}</p>
    </div>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box3} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{otherperformers_total || 0}</p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col md={1}></Col>
    <Col md={10} >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Extras */}
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>06.97</p>
    </Col>
    <Col md={3} >
    <p className={`${styles.Underline}`}>Extras</p>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box5} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{extras_quantity || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box5} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{extras_units_number || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box5} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{extras_units_name}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box5} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{extras_rate || 0}</p>
    </div>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box3} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{extras_total || 0}</p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col md={1}></Col>
    <Col md={10} >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Casting Director */}
    <Row >
    <Col md={1} ></Col>
    <Col md={1}>
    <p className={`${styles.Underline}`}>06.98</p>
    </Col>
    <Col md={7}>
    <p className={`${styles.Underline}`}>Casting Director</p>
    </Col>
    <Col md={2}>
    <div className={`${styles.Box3} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{casting_director || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col md={1}></Col>
    <Col md={10} >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Extras Casting */}
    <Row >
    <Col md={1} ></Col>
    <Col md={1}>
    <p className={`${styles.Underline}`}>06.99</p>
    </Col>
    <Col md={7}>
    <p className={`${styles.Underline}`}>Extras Casting</p>
    </Col>
    <Col md={2}>
    <div className={`${styles.Box3} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{extras_casting || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col md={1}></Col>
    <Col md={10} >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Rehersals */}
    <Row >
    <Col md={1} ></Col>
    <Col md={1}>
    <p className={`${styles.Underline}`}>06.991</p>
    </Col>
    <Col md={5}>
    <p className={`${styles.Underline}`}>Rehersals</p>
    </Col>
    <Col md={1}>
    <div className={`${styles.Box5} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{rehersals_unit_cast} </p>
    </div>
    </Col>
    <Col md={1}>
    <p className={`${styles.Underline}`}></p>
    </Col>
    <Col md={2}>
    <div className={`${styles.Box3} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{rehersals_cast || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col md={1}></Col>
    <Col md={10} >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* 6th/7th Days */}
    <Row >
    <Col md={1} ></Col>
    <Col md={1}>
    <p className={`${styles.Underline}`}>06.992</p>
    </Col>
    <Col md={5}>
    <p className={`${styles.Underline}`}>6th/7th Days</p>
    </Col>
    <Col md={1}>
    <div className={`${styles.Box5} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{days6th7th_unit_cast} </p>
    </div>
    </Col>
    <Col md={1}>
    <p className={`${styles.Underline}`}></p>
    </Col>
    <Col md={2}>
    <div className={`${styles.Box3} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{days6th7th_cast || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col md={1}></Col>
    <Col md={10} >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Overtime */}
    <Row >
    <Col md={1} ></Col>
    <Col md={1}>
    <p className={`${styles.Underline}`}>06.993</p>
    </Col>
    <Col md={5}>
    <p className={`${styles.Underline}`}>Overtime</p>
    </Col>
    <Col md={1}>
    <div className={`${styles.Box5} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{overtime_unit_cast} </p>
    </div>
    </Col>
    <Col md={1}>
    <p className={`${styles.Underline}`}></p>
    </Col>
    <Col md={2}>
    <div className={`${styles.Box3} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{overtime_cast || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col md={1}></Col>
    <Col md={10} >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Holidays */}
    <Row >
    <Col md={1} ></Col>
    <Col md={1}>
    <p className={`${styles.Underline}`}>06.994</p>
    </Col>
    <Col md={5}>
    <p className={`${styles.Underline}`}>Holidays</p>
    </Col>
    <Col md={1}>
    <div className={`${styles.Box5} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{holidays_unit_cast} </p>
    </div>
    </Col>
    <Col md={1}>
    <p className={`${styles.Underline}`}></p>
    </Col>
    <Col md={2}>
    <div className={`${styles.Box3} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{holidays_cast || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col md={1}></Col>
    <Col md={10} >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Rights Payments - Cast */}
    <Row >
    <Col md={1} ></Col>
    <Col md={1}>
    <p className={`${styles.Underline}`}>06.995</p>
    </Col>
    <Col md={7}>
    <p className={`${styles.Underline}`}>Rights Payments - Cast</p>
    </Col>
    <Col md={2}>
    <div className={`${styles.Box3} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{rights_payments_cast || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col md={1}></Col>
    <Col md={10} >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Other - Cast */}
    <Row >
    <Col md={1} ></Col>
    <Col md={1}>
    <p className={`${styles.Underline}`}>06.996</p>
    </Col>
    <Col md={7}>
    <p className={`${styles.Underline}`}>Other</p>
    </Col>
    <Col md={2}>
    <div className={`${styles.Box3} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{other_cast || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col md={1}></Col>
    <Col md={10} >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Fringes Taxes - Cast */}
    <Row >
    <Col md={1} ></Col>
    <Col md={1}>
    <p className={`${styles.Underline}`}>06.997</p>
    </Col>
    <Col md={7}>
    <p className={`${styles.Underline}`}>Fringes & Taxes</p>
    </Col>
    <Col md={2}>
    <div className={`${styles.Box3} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{fringes_taxes_cast || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col md={1}></Col>
    <Col md={10} >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Cast Total */}
    <Row className='mt-3 mb-1' >
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}></p>
    <p></p>
    </Col>
    <Col className={ `${styles.Overview} my-0 pt-1`} md={6} >
    <p className={ `${styles.Bold} pb-0 mb-0`}>TOTAL CAST </p>
    </Col>
    <Col md={1} >
    </Col>
    <Col md={2} >
    <div className={`${styles.Box3} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline} mb-0`}>{cast_total || 0}</p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col md={1}></Col>
    <Col md={10} >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    </div>
    {/* PRODUCTION STAFF ------------------------------------ */}
    <div className='mt-4'>
    <Row>
    <Col md={1} ></Col>
    <Col xs={1}>
    <p className={`${styles.Underline}`}>07.00</p>
    </Col>
    <Col xs={7}>
    <p className={ `${styles.BoldBlack}`}>PRODUCTION STAFF</p>
    </Col>
    </Row>
    {/* TITLES */}
    <Row className={ `mb-2 py-0`} >
    <Col md={1} ></Col>
    <Col className={ `${styles.Overview} py-1`} md={1} >
    <p className="mb-0">ACCT</p>
    </Col>
    <Col className={ `${styles.Overview} py-1`} md={3} >
    <p className="mb-0">Description</p>
    </Col>
    <Col className={`${styles.Overview} text-center py-1`} md={1} >
    <p className="mb-0">#</p>
    </Col>
    <Col className={`${styles.Overview} text-center py-1`} md={1} >
    <p># Unit</p>
    </Col>
    <Col md={1} className={`${styles.Overview} text-center py-1`} >
    <p className="mb-0">Unit</p>
    </Col>
    <Col md={1} className={`${styles.Overview} text-center py-1`} >
    <p className="mb-0">Price</p>
    </Col>
    <Col md={2} className={`${styles.Overview} text-center py-1`} >
    <p className="mb-0">Total</p>
    </Col>
    <Col md={1}></Col>
    </Row>  
    {/* Production Manager */}
    <div>
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline} mb-0`}>07.10</p>
    </Col>
    <Col md={5} >
    <p className={`${styles.BoldBlack} mb-0`}>Production Manager</p>
    </Col>
    </Row>
    {/* Prep */}
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    </Col>
    <Col md={3} >
    <p className={`${styles.Underline7}`}>Prep</p>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
    py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{production_manager_qty_prep || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{production_manager_uno_prep || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{production_manager_una_prep}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{production_manager_rt_prep || 0}</p>
    </div>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box2} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{productionmanagerprep_total || 0}</p>
    </div>
    </Col>
    </Row>
    {/* Shoot */}
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}></p>
    </Col>
    <Col md={3} >
    <p className={`${styles.Underline7}`}>Shoot</p>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{production_manager_quantity || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{production_manager_units_number || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{production_manager_units_name}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{production_manager_rate || 0}</p>
    </div>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box2} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{productionmanager_total || 0}</p>
    </div>
    </Col>
    </Row>
    {/* Wrap */}
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}></p>
    </Col>
    <Col md={3} >
    <p className={`${styles.Underline7}`}>Wrap</p>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{production_manager_qty_wrap || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{production_manager_uno_wrap || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{production_manager_una_wrap}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{production_manager_rt_wrap || 0}</p>
    </div>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box2} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{productionmanagerwrap_total || 0}</p>
    </div>
    </Col>
    </Row>
    {/* Total */}
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline7}`}></p>
    </Col>
    <Col md={7} > 
    <p className={`${styles.Underline}`}>Total</p>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box4} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{productionmanagerall_total || 0}</p>
    </div>
    </Col>
    </Row>
    </div>
    {/* hr */}
    <Row>
    <Col md={1}></Col>
    <Col md={10} >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Production Supervisor */}
    <div className='mt-1' >
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline} mb-0`}>07.20</p>
    </Col>
    <Col md={5} >
    <p className={`${styles.BoldBlack} mb-0`}>Production Supervisor</p>
    </Col>
    </Row>
    {/* Prep */}
    <Row  >
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}></p>
    </Col>
    <Col md={3} >
    <p className={`${styles.Underline7}`}>Prep</p>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{production_supervisor_qty_prep || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{production_supervisor_uno_prep || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{production_supervisor_una_prep}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{production_supervisor_rt_prep || 0}</p>
    </div>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box2} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{productionsupervisorprep_total || 0}</p>
    </div>
    </Col>
    </Row>
    {/* Shoot */}
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline7}`}></p>
    </Col>
    <Col md={3} >
    <p className={`${styles.Underline7}`}>Shoot</p>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{production_supervisor_quantity || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{production_supervisor_units_number || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{production_supervisor_units_name}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{production_supervisor_rate || 0}</p>
    </div>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box2} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{productionsupervisor_total || 0}</p>
    </div>
    </Col>
    </Row>
    {/* Wrap */}
    <Row  >
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}></p>
    </Col>
    <Col md={3} >
    <p className={`${styles.Underline7}`}>Wrap</p>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{production_supervisor_qty_wrap || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{production_supervisor_uno_wrap || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{production_supervisor_una_wrap}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{production_supervisor_rt_wrap || 0}</p>
    </div>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box2} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{productionsupervisorwrap_total || 0}</p>
    </div>
    </Col>
    </Row>
    {/* Total */}
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}></p>
    </Col>
    <Col md={7} > 
    <p className={`${styles.Underline}`}>Total</p>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box4} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{productionsupervisorall_total || 0}</p>
    </div>
    </Col>
    </Row>
    </div>
    {/* hr */}
    <Row>
    <Col md={1}></Col>
    <Col md={10} >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Production Coordinator */}
    <div className='mt-1'>
    <Row  >
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline} mb-0`}>07.30</p>
    </Col>
    <Col md={5} >
    <p className={`${styles.BoldBlack} mb-0`}>Production Coordinator</p>
    </Col>
    </Row>
    {/* Prep */}
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}></p>
    </Col>
    <Col md={3} >
    <p className={`${styles.Underline7}`}>Prep</p>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{production_coordinator_qty_prep || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{production_coordinator_uno_prep || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{production_coordinator_una_prep}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{production_coordinator_rt_prep || 0}</p>
    </div>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box2} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{productioncoordinatorprep_total || 0}</p>
    </div>
    </Col>
    </Row>
    {/* Shoot */}
    <Row  >
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}></p>
    </Col>
    <Col md={3} >
    <p className={`${styles.Underline7}`}>Shoot</p>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{production_coordinator_quantity || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{production_coordinator_units_number || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{production_coordinator_units_name}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{production_coordinator_rate || 0}</p>
    </div>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box2} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{productioncoordinator_total || 0}</p>
    </div>
    </Col>
    </Row>
    {/* Wrap */}
    <Row  >
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}></p>
    </Col>
    <Col md={3} >
    <p className={`${styles.Underline7}`}>Wrap</p>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{production_coordinator_qty_wrap || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{production_coordinator_uno_wrap || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{production_coordinator_una_wrap}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{production_coordinator_rt_wrap || 0}</p>
    </div>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box2} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{productioncoordinatorwrap_total || 0}</p>
    </div>
    </Col>
    </Row>
    {/* Total */}
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}></p>
    </Col>
    <Col md={7} > 
    <p className={`${styles.Underline}`}>Total</p>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box4} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{productioncoordinatorall_total || 0}</p>
    </div>
    </Col>
    </Row>
    </div>
    {/* hr */}
    <Row>
    <Col md={1}></Col>
    <Col md={10} >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Unit Manager */}
    <div className='mt-1'>
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline} mb-0`}>07.40</p>
    </Col>
    <Col md={5} >
    <p className={`${styles.BoldBlack} mb-0`}>Unit Manager</p>
    </Col>
    </Row>
    {/* Prep */}
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}></p>
    </Col>
    <Col md={3} >
    <p className={`${styles.Underline7}`}>Prep</p>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{unit_manager_qty_prep || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{unit_manager_uno_prep || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{unit_manager_una_prep}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{unit_manager_rt_prep || 0}</p>
    </div>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box2} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{unitmanagerprep_total || 0}</p>
    </div>
    </Col>
    </Row>
    {/* Shoot */}
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}></p>
    </Col>
    <Col md={3} >
    <p className={`${styles.Underline7}`}>Shoot</p>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{unit_manager_quantity || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{unit_manager_units_number || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{unit_manager_units_name}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{unit_manager_rate || 0}</p>
    </div>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box2} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{unitmanager_total || 0}</p>
    </div>
    </Col>
    </Row>
    {/* Wrap */}
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}></p>
    </Col>
    <Col md={3} >
    <p className={`${styles.Underline7}`}>Wrap</p>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{unit_manager_qty_wrap || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{unit_manager_uno_wrap || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{unit_manager_una_wrap}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{unit_manager_rt_wrap || 0}</p>
    </div>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box2} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{unitmanagerwrap_total || 0}</p>
    </div>
    </Col>
    </Row>
    {/* Total */}
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}></p>
    </Col>
    <Col md={7} > 
    <p className={`${styles.Underline}`}>Total</p>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box4} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{unitmanagerall_total || 0}</p>
    </div>
    </Col>
    </Row>
    </div>
    {/* hr */}
    <Row>
    <Col md={1}></Col>
    <Col md={10} >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Location Manager */}
    <div className='mt-1'>
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline} mb-0`}>07.50</p>
    </Col>
    <Col md={5} >
    <p className={`${styles.BoldBlack} mb-0`}>Location Manager</p>
    </Col>
    </Row>
    {/* Prep */}
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}></p>
    </Col>
    <Col md={3} >
    <p className={`${styles.Underline7}`}>Prep</p>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{location_manager_qty_prep || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{location_manager_uno_prep || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{location_manager_una_prep}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{location_manager_rt_prep || 0}</p>
    </div>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box2} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{locationmanagerprep_total || 0}</p>
    </div>
    </Col>
    </Row>
    {/* Shoot */}
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}></p>
    </Col>
    <Col md={3} >
    <p className={`${styles.Underline7}`}>Shoot</p>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{location_manager_quantity || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{location_manager_units_number || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{location_manager_units_name}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{location_manager_rate || 0}</p>
    </div>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box2} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{locationmanager_total || 0}</p>
    </div>
    </Col>
    </Row>
    {/* Wrap */}
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}></p>
    </Col>
    <Col md={3} >
    <p className={`${styles.Underline7}`}>Wrap</p>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{location_manager_qty_wrap || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{location_manager_uno_wrap || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{location_manager_una_wrap}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{location_manager_rt_wrap || 0}</p>
    </div>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box2} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{locationmanagerwrap_total || 0}</p>
    </div>
    </Col>
    </Row>
    {/* Total */}
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}></p>
    </Col>
    <Col md={7} > 
    <p className={`${styles.Underline}`}>Total</p>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box4} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{locationmanagerall_total || 0}</p>
    </div>
    </Col>
    </Row>
    </div>
    {/* hr */}
    <Row>
    <Col md={1}></Col>
    <Col md={10} >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Location Manager Assistant */}
    <div className='mt-1'>
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline} mb-0`}>07.60</p>
    </Col>
    <Col md={5} >
    <p className={`${styles.BoldBlack} mb-0`}>Location Manager Assistant</p>
    </Col>
    </Row>
    {/* Prep */}
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}></p>
    </Col>
    <Col md={3} >
    <p className={`${styles.Underline7}`}>Prep</p>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{location_manager_ass_qty_prep || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{location_manager_ass_uno_prep || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{location_manager_ass_una_prep}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{location_manager_ass_rt_prep || 0}</p>
    </div>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box2} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{locmanassprep_total || 0}</p>
    </div>
    </Col>
    </Row>
    {/* Shoot */}
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}></p>
    </Col>
    <Col md={3} >
    <p className={`${styles.Underline7}`}>Shoot</p>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{location_manager_assistant_quantity || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{location_manager_assistant_units_number || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{location_manager_assistant_units_name}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{location_manager_assistant_rate || 0}</p>
    </div>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box2} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{locationmanagerassistant_total || 0}</p>
    </div>
    </Col>
    </Row>
    {/* Wrap */}
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}></p>
    </Col>
    <Col md={3} >
    <p className={`${styles.Underline7}`}>Wrap</p>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{location_manager_ass_qty_wrap || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{location_manager_ass_uno_wrap || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{location_manager_ass_una_wrap}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{location_manager_ass_rt_wrap || 0}</p>
    </div>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box2} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{locmanasswrap_total || 0}</p>
    </div>
    </Col>
    </Row>
    {/* Total */}
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}></p>
    </Col>
    <Col md={7} > 
    <p className={`${styles.Underline}`}>Total</p>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box4} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{locmanassall_total || 0}</p>
    </div>
    </Col>
    </Row>
    </div>
    {/* hr */}
    <Row>
    <Col md={1}></Col>
    <Col md={10} >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Production Assistants */}
    <div className='mt-1'>
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline} mb-0`}>07.70</p>
    </Col>
    <Col md={5} >
    <p className={`${styles.BoldBlack} mb-0`}>Production Assistants</p>
    </Col>
    </Row>
    {/* Prep */}
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}></p>
    </Col>
    <Col md={3} >
    <p className={`${styles.Underline7}`}>Prep</p>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{production_ass_qty_prep || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{production_ass_uno_prep || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{production_ass_una_prep}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{production_ass_rt_prep || 0}</p>
    </div>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box2} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{proassprep_total || 0}</p>
    </div>
    </Col>
    </Row>
    {/* Shoot */}
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}></p>
    </Col>
    <Col md={3} >
    <p className={`${styles.Underline7}`}>Shoot</p>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{production_assistants_quantity || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{production_assistants_units_number || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{production_assistants_units_name}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{production_assistants_rate || 0}</p>
    </div>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box2} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{productionassistants_total || 0}</p>
    </div>
    </Col>
    </Row>
    {/* Wrap */}
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}></p>
    </Col>
    <Col md={3} >
    <p className={`${styles.Underline7}`}>Wrap</p>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{production_ass_qty_wrap || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{production_ass_uno_wrap || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{production_ass_una_wrap}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{production_ass_rt_wrap || 0}</p>
    </div>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box2} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{proasswrap_total || 0}</p>
    </div>
    </Col>
    </Row>
    {/* Total */}
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}></p>
    </Col>
    <Col md={7} > 
    <p className={`${styles.Underline}`}>Total</p>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box4} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{proassall_total || 0}</p>
    </div>
    </Col>
    </Row>
    </div>
    {/* hr */}
    <Row>
    <Col md={1}></Col>
    <Col md={10} >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Production Secretary */}
    <div className='mt-1'>
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline} mb-0`}>07.80</p>
    </Col>
    <Col md={5} >
    <p className={`${styles.BoldBlack} mb-0`}>Production Secretary</p>
    </Col>
    </Row>
    {/* Prep */}
    <Row  >
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}></p>
    </Col>
    <Col md={3} >
    <p className={`${styles.Underline7}`}>Prep</p>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{production_sec_qty_prep || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{production_sec_uno_prep || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{production_sec_una_prep}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{production_sec_rt_prep || 0}</p>
    </div>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box2} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{prosecprep_total || 0}</p>
    </div>
    </Col>
    </Row>
    {/* Shoot */}
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}></p>
    </Col>
    <Col md={3} >
    <p className={`${styles.Underline7}`}>Shoot</p>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{production_secretary_quantity || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{production_secretary_units_number || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{production_secretary_units_name}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{production_secretary_rate || 0}</p>
    </div>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box2} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{productionsecretary_total || 0}</p>
    </div>
    </Col>
    </Row>
    {/* Wrap */}
    <Row  >
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}></p>
    </Col>
    <Col md={3} >
    <p className={`${styles.Underline7}`}>Wrap</p>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{production_sec_qty_wrap || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{production_sec_uno_wrap || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{production_sec_una_wrap}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{production_sec_rt_wrap || 0}</p>
    </div>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box2} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{prosecwrap_total || 0}</p>
    </div>
    </Col>
    </Row>
    {/* Total */}
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}></p>
    </Col>
    <Col md={7} > 
    <p className={`${styles.Underline}`}>Total</p>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box4} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{prosecall_total || 0}</p>
    </div>
    </Col>
    </Row>
    </div>
    {/* hr */}
    <Row>
    <Col md={1}></Col>
    <Col md={10} >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Production Accountant */}
    <div className='mt-1'>
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline} mb-0`}>07.90</p>
    </Col>
    <Col md={5} >
    <p className={`${styles.BoldBlack} mb-0`}>Production Accountant</p>
    </Col>
    </Row>
    {/* Prep */}
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}></p>
    </Col>
    <Col md={3} >
    <p className={`${styles.Underline7}`}>Prep</p>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{production_acc_qty_prep || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{production_acc_uno_prep || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{production_acc_una_prep}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{production_acc_rt_prep || 0}</p>
    </div>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box2} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{proaccprep_total || 0}</p>
    </div>
    </Col>
    </Row>
    {/* Shoot */}
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}></p>
    </Col>
    <Col md={3} >
    <p className={`${styles.Underline7}`}>Shoot</p>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{production_accountant_quantity || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{production_accountant_units_number || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{production_accountant_units_name}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{production_accountant_rate || 0}</p>
    </div>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box2} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{productionaccountant_total || 0}</p>
    </div>
    </Col>
    </Row>
    {/* Wrap */}
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}></p>
    </Col>
    <Col md={3} >
    <p className={`${styles.Underline7}`}>Wrap</p>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{production_acc_qty_wrap || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{production_acc_uno_wrap || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{production_acc_una_wrap}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{production_acc_rt_wrap || 0}</p>
    </div>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box2} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{proaccwrap_total || 0}</p>
    </div>
    </Col>
    </Row>
    {/* Total */}
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}></p>
    </Col>
    <Col md={7} > 
    <p className={`${styles.Underline}`}>Total</p>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box4} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{proaccall_total || 0}</p>
    </div>
    </Col>
    </Row>
    </div>
    {/* hr */}
    <Row>
    <Col md={1}></Col>
    <Col md={10} >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Production Accountant Assistant */}
    <div className='mt-1'>
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline} mb-0`}>07.91</p>
    </Col>
    <Col md={5} >
    <p className={`${styles.BoldBlack} mb-0`}>Production Accountant Assistant</p>
    </Col>
    </Row>
    {/* Prep */}
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}></p>
    </Col>
    <Col md={3} >
    <p className={`${styles.Underline7}`}>Prep</p>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{production_acc_ass_qty_prep || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{production_acc_ass_uno_prep || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{production_acc_ass_una_prep}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{production_acc_ass_rt_prep || 0}</p>
    </div>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box2} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{proaccassprep_total || 0}</p>
    </div>
    </Col>
    </Row>
    {/* Shoot */}
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}></p>
    </Col>
    <Col md={3} >
    <p className={`${styles.Underline7}`}>Shoot</p>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{production_accountant_assistant_quantity || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{production_accountant_assistant_units_number || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{production_accountant_assistant_units_name}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{production_accountant_assistant_rate || 0}</p>
    </div>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box2} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{productionaccountantassistant_total || 0}</p>
    </div>
    </Col>
    </Row>
    {/* Wrap */}
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}></p>
    </Col>
    <Col md={3} >
    <p className={`${styles.Underline7}`}>Wrap</p>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{production_acc_ass_qty_wrap || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{production_acc_ass_uno_wrap || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{production_acc_ass_una_wrap}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{production_acc_ass_rt_wrap || 0}</p>
    </div>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box2} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{proaccasswrap_total || 0}</p>
    </div>
    </Col>
    </Row>
    {/* Total */}
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}></p>
    </Col>
    <Col md={7} > 
    <p className={`${styles.Underline}`}>Total</p>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box4} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{proaccassall_total || 0}</p>
    </div>
    </Col>
    </Row>
    </div>
    {/* hr */}
    <Row>
    <Col md={1}></Col>
    <Col md={10} >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Script Supervisor / Continuity */}
    <div className='mt-1'>
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline} mb-0`}>07.92</p>
    </Col>
    <Col md={5} >
    <p className={`${styles.BoldBlack} mb-0`}>Script Supervisor/Continuity</p>
    </Col>
    </Row>
    {/* Prep */}
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}></p>
    </Col>
    <Col md={3} >
    <p className={`${styles.Underline7}`}>Prep</p>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{scriptsupervisor_con_qty_prep || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{scriptsupervisor_con_uno_prep || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{scriptsupervisor_con_una_prep}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{scriptsupervisor_con_rt_prep || 0}</p>
    </div>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box2} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{scriptsupconprep_total || 0}</p>
    </div>
    </Col>
    </Row>
    {/* Shoot */}
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}></p>
    </Col>
    <Col md={3} >
    <p className={`${styles.Underline7}`}>Shoot</p>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{scriptsupervisor_continuity_quantity || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{scriptsupervisor_continuity_units_number || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{scriptsupervisor_continuity_units_name}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{scriptsupervisor_continuity_rate || 0}</p>
    </div>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box2} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{scriptsupervisorcontinuity_total || 0}</p>
    </div>
    </Col>
    </Row>
    {/* Wrap */}
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}></p>
    </Col>
    <Col md={3} >
    <p className={`${styles.Underline7}`}>Wrap</p>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{scriptsupervisor_con_qty_wrap || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{scriptsupervisor_con_uno_wrap || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{scriptsupervisor_con_una_wrap}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{scriptsupervisor_con_rt_wrap || 0}</p>
    </div>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box2} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{scriptsupconwrap_total || 0}</p>
    </div>
    </Col>
    </Row>
    {/* Total */}
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}></p>
    </Col>
    <Col md={7} > 
    <p className={`${styles.Underline}`}>Total</p>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box4} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{scriptsupconall_total || 0}</p>
    </div>
    </Col>
    </Row>
    </div>
    {/* hr */}
    <Row>
    <Col md={1}></Col>
    <Col md={10} >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Payroll */}
    <div className='mt-1'>
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline} mb-0`}>07.93</p>
    </Col>
    <Col md={5} >
    <p className={`${styles.BoldBlack} mb-0`}>Payroll</p>
    </Col>
    </Row>
    {/* Prep */}
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}></p>
    </Col>
    <Col md={3} >
    <p className={`${styles.Underline7}`}>Prep</p>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{payroll_qty_prep || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{payroll_uno_prep || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{payroll_una_prep}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{payroll_rt_prep || 0}</p>
    </div>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box2} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{payrollprep_total || 0}</p>
    </div>
    </Col>
    </Row>
    {/* Shoot */}
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}></p>
    </Col>
    <Col md={3} >
    <p className={`${styles.Underline7}`}>Shoot</p>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{payroll_quantity || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{payroll_units_number || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{payroll_units_name}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{payroll_rate || 0}</p>
    </div>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box2} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{payroll_total || 0}</p>
    </div>
    </Col>
    </Row>
    {/* Wrap */}
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}></p>
    </Col>
    <Col md={3} >
    <p className={`${styles.Underline7}`}>Wrap</p>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{payroll_qty_wrap || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{payroll_uno_wrap || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{payroll_una_wrap}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{payroll_rt_wrap || 0}</p>
    </div>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box2} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{payrollwrap_total || 0}</p>
    </div>
    </Col>
    </Row>
    {/* Total */}
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}></p>
    </Col>
    <Col md={7} > 
    <p className={`${styles.Underline}`}>Total</p>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box4} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{payrollall_total || 0}</p>
    </div>
    </Col>
    </Row>
    </div>
    {/* hr */}
    <Row>
    <Col md={1}></Col>
    <Col md={10} >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Other Production */}
    <div className='mt-1'>
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline} mb-0`}>07.94</p>
    </Col>
    <Col md={5} >
    <p className={`${styles.BoldBlack} mb-0`}>Other - Production</p>
    </Col>
    </Row>
    {/* Prep  */}
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}></p>
    </Col>
    <Col md={3} >
    <p className={`${styles.Underline7}`}>Prep</p>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{other_pro_qty_prep || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{other_pro_uno_prep || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{other_pro_una_prep}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{other_pro_rt_prep || 0}</p>
    </div>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box2} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{otherproprep_total || 0}</p>
    </div>
    </Col>
    </Row>
    {/* Shoot */}
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}></p>
    </Col>
    <Col md={3} >
    <p className={`${styles.Underline7}`}>Shoot</p>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{other_production_quantity || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{other_production_units_number || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{other_production_units_name}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{other_production_rate || 0}</p>
    </div>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box2} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{otherproduction_total || 0}</p>
    </div>
    </Col>
    </Row>
    {/* Wrap  */}
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}></p>
    </Col>
    <Col md={3} >
    <p className={`${styles.Underline7}`}>Wrap</p>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{other_pro_qty_wrap || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{other_pro_uno_wrap || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{other_pro_una_wrap}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{other_pro_rt_wrap || 0}</p>
    </div>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box2} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{otherprowrap_total || 0}</p>
    </div>
    </Col>
    </Row>
    {/* Total */}
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}></p>
    </Col>
    <Col md={7} > 
    <p className={`${styles.Underline}`}>Total</p>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box4} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{otherproall_total || 0}</p>
    </div>
    </Col>
    </Row>
    </div>
    {/* hr */}
    <Row>
    <Col md={1}></Col>
    <Col md={10} >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Directors Assistant */}
    <div className='mt-1'>
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline} mb-0`}>07.95</p>
    </Col>
    <Col md={5} >
    <p className={`${styles.BoldBlack} mb-0`}>Directors Assistant</p>
    </Col>
    </Row>
    {/* Prep */}
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}></p>
    </Col>
    <Col md={3} >
    <p className={`${styles.Underline7}`}>Prep</p>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{directors_ass_qty_prep || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{directors_ass_uno_prep || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{directors_ass_una_prep}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{directors_ass_rt_prep || 0}</p>
    </div>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box2} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{directorsassprep_total || 0}</p>
    </div>
    </Col>
    </Row>
    {/* Shoot */}
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}></p>
    </Col>
    <Col md={3} >
    <p className={`${styles.Underline7}`}>Shoot</p>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{directors_assistant_quantity || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{directors_assistant_units_number || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{directors_assistant_units_name}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{directors_assistant_rate || 0}</p>
    </div>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box2} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{directorsassistant_total || 0}</p>
    </div>
    </Col>
    </Row>
    {/* Wrap */}
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}></p>
    </Col>
    <Col md={3} >
    <p className={`${styles.Underline7}`}>Wrap</p>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{directors_ass_qty_wrap || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{directors_ass_uno_wrap || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{directors_ass_una_wrap}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{directors_ass_rt_wrap || 0}</p>
    </div>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box2} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{directorsasswrap_total || 0}</p>
    </div>
    </Col>
    </Row>
    {/* Total */}
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}></p>
    </Col>
    <Col md={7} > 
    <p className={`${styles.Underline}`}>Total</p>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box4} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{directorsassall_total || 0}</p>
    </div>
    </Col>
    </Row>
    </div>
    {/* hr */}
    <Row>
    <Col md={1}></Col>
    <Col md={10} >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* 1st Assistant Director */}
    <div className='mt-1'>
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline} mb-0`}>07.96</p>
    </Col>
    <Col md={5} >
    <p className={`${styles.BoldBlack} mb-0`}>1st Assistant Director</p>
    </Col>
    </Row>
    {/* Prep */}
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}></p>
    </Col>
    <Col md={3} >
    <p className={`${styles.Underline7}`}>Prep</p>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{ass_director_1st_qty_prep || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{ass_director_1st_uno_prep || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{ass_director_1st_una_prep}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{ass_director_1st_rt_prep || 0}</p>
    </div>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box2} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{assdirector1stprep_total || 0}</p>
    </div>
    </Col>
    </Row>
    {/* Shoot */}
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}></p>
    </Col>
    <Col md={3} >
    <p className={`${styles.Underline7}`}>Shoot</p>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{assistant_director_1st_quantity || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{assistant_director_1st_units_number || 0}</p>
    </div>
    </Col>     
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{assistant_director_1st_units_name}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{assistant_director_1st_rate || 0}</p>
    </div>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box2} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{assistantdirector1st_total || 0}</p>
    </div>
    </Col>
    </Row>
    {/* Wrap */}
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}></p>
    </Col>
    <Col md={3} >
    <p className={`${styles.Underline7}`}>Wrap</p>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{ass_director_1st_qty_wrap || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{ass_director_1st_uno_wrap || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{ass_director_1st_una_wrap}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{ass_director_1st_rt_wrap || 0}</p>
    </div>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box2} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{assdirector1stwrap_total || 0}</p>
    </div>
    </Col>
    </Row>
    {/* Total */}
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}></p>
    </Col>
    <Col md={7} > 
    <p className={`${styles.Underline}`}>Total</p>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box4} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{assdirector1stall_total || 0}</p>
    </div>
    </Col>
    </Row>
    </div>
    {/* hr */}
    <Row>
    <Col md={1}></Col>
    <Col md={10} >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* 2nd Assistant Director */}
    <div className='mt-1'>
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline} mb-0`}>07.97</p>
    </Col>
    <Col md={5} >
    <p className={`${styles.BoldBlack} mb-0`}>2nd Assistant Director</p>
    </Col>
    </Row>
    {/* Prep */}
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}></p>
    </Col>
    <Col md={3} >
    <p className={`${styles.Underline7}`}>Prep</p>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{ass_director_2nd_qty_prep || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{ass_director_2nd_uno_prep || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{ass_director_2nd_una_prep}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{ass_director_2nd_rt_prep || 0}</p>
    </div>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box2} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{assdirector2ndprep_total || 0}</p>
    </div>
    </Col>
    </Row>
    {/* Shoot */}
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}></p>
    </Col>
    <Col md={3} >
    <p className={`${styles.Underline7}`}>Shoot</p>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{assistant_director_2nd_quantity || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{assistant_director_2nd_units_number || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{assistant_director_2nd_units_name}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{assistant_director_2nd_rate || 0}</p>
    </div>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box2} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{assistantdirector2nd_total || 0}</p>
    </div>
    </Col>
    </Row>
    {/* Wrap */}
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}></p>
    </Col>
    <Col md={3} >
    <p className={`${styles.Underline7}`}>Wrap</p>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{ass_director_2nd_qty_wrap || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{ass_director_2nd_uno_wrap || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{ass_director_2nd_una_wrap}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{ass_director_2nd_rt_wrap || 0}</p>
    </div>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box2} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{assdirector2ndwrap_total || 0}</p>
    </div>
    </Col>
    </Row>
    {/* Total */}
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}></p>
    </Col>
    <Col md={7} > 
    <p className={`${styles.Underline}`}>Total</p>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box4} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{assdirector2ndall_total || 0}</p>
    </div>
    </Col>
    </Row>
    </div>
    {/* hr */}
    <Row>
    <Col md={1}></Col>
    <Col md={10} >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* 3rd Assistant Director */}
    <div className='mt-1'>
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline} mb-0`}>07.98</p>
    </Col>
    <Col md={5} >
    <p className={`${styles.BoldBlack} mb-0`}>3rd Assistant Director</p>
    </Col>
    </Row>
    {/* Prep */}
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline7}`}></p>
    </Col>
    <Col md={3} >
    <p className={`${styles.Underline7}`}>Prep</p>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{ass_director_3rd_qty_prep || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{ass_director_3rd_uno_prep || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{ass_director_3rd_una_prep}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{ass_director_3rd_rt_prep || 0}</p>
    </div>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box2} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{assdirector3rdprep_total || 0}</p>
    </div>
    </Col>
    </Row>
    {/* Shoot */}
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}></p>
    </Col>
    <Col md={3} >
    <p className={`${styles.Underline7}`}>Shoot</p>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{assistant_director_3rd_quantity || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{assistant_director_3rd_units_number || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{assistant_director_3rd_units_name}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{assistant_director_3rd_rate || 0}</p>
    </div>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box2} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{assistantdirector3rd_total || 0}</p>
    </div>
    </Col>
    </Row>
    {/* Wrap */}
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}></p>
    </Col>
    <Col md={3} >
    <p className={`${styles.Underline7}`}>Wrap</p>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{ass_director_3rd_qty_wrap || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{ass_director_3rd_uno_wrap || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{ass_director_3rd_una_wrap}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{ass_director_3rd_rt_wrap || 0}</p>
    </div>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box2} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{assdirector3rdwrap_total || 0}</p>
    </div>
    </Col>
    </Row>
    {/* Total */}
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}></p>
    </Col>
    <Col md={7} > 
    <p className={`${styles.Underline}`}>Total</p>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box4} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{assdirector3rdall_total || 0}</p>
    </div>
    </Col>
    </Row>
    </div>
    {/* hr */}
    <Row>
    <Col md={1}></Col>
    <Col md={10} >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Craft Services */}
    <div className='mt-1'>
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline} mb-0`}>07.9</p>
    </Col>
    <Col md={5} >
    <p className={`${styles.BoldBlack} mb-0`}>Craft Services</p>
    </Col>
    </Row>
    {/* Prep */}
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline7}`}></p>
    </Col>
    <Col md={3} >
    <p className={`${styles.Underline7}`}>Prep</p>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{craft_services_qty_prep || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{craft_services_uno_prep || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{craft_services_una_prep}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{craft_services_rt_prep || 0}</p>
    </div>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box2} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{craftservicesprep_total || 0}</p>
    </div>
    </Col>
    </Row>
    {/* Shoot */}
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}></p>
    </Col>
    <Col md={3} >
    <p className={`${styles.Underline7}`}>Shoot</p>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{craft_services_quantity || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{craft_services_units_number || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{craft_services_units_name}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{craft_services_rate || 0}</p>
    </div>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box2} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{craftservices_total || 0}</p>
    </div>
    </Col>
    </Row>
    {/* Wrap */}
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}></p>
    </Col>
    <Col md={3} >
    <p className={`${styles.Underline7}`}>Wrap</p>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{craft_services_qty_wrap || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{craft_services_uno_wrap || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{craft_services_una_wrap}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{craft_services_rt_wrap || 0}</p>
    </div>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box2} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{craftserviceswrap_total || 0}</p>
    </div>
    </Col>
    </Row>
    {/* Total */}
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}></p>
    </Col>
    <Col md={7} > 
    <p className={`${styles.Underline}`}>Total</p>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box4} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{craftservicesall_total || 0}</p>
    </div>
    </Col>
    </Row>
    </div>
    {/* hr */}
    <Row>
    <Col md={1}></Col>
    <Col md={10} >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* 6th/7th Days */}
    <Row >
    <Col md={1} ></Col>
    <Col md={1}>
    <p className={`${styles.Underline}`}>07.991</p>
    </Col>
    <Col md={5}>
    <p className={`${styles.BoldBlack}`}>6th/7th Days</p>
    </Col>
    <Col md={1}>
    <div className={`${styles.Box5} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{days6th7th_unit_pro_sta} </p>
    </div>
    </Col>
    <Col md={1}>
    <p className={`${styles.Underline}`}></p>
    </Col>
    <Col md={2}>
    <div className={`${styles.Box3} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{days6th7th_pro_sta || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col md={1}></Col>
    <Col md={10} >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Overtime */}
    <Row >
    <Col md={1} ></Col>
    <Col md={1}>
    <p className={`${styles.Underline}`}>07.992</p>
    </Col>
    <Col md={5}>
    <p className={`${styles.Underline}`}>Overtime</p>
    </Col>
    <Col md={1}>
    <div className={`${styles.Box5} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{overtime_unit_pro_sta} </p>
    </div>
    </Col>
    <Col md={1}>
    <p className={`${styles.Underline}`}></p>
    </Col>
    <Col md={2}>
    <div className={`${styles.Box3} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{overtime_pro_sta || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col md={1}></Col>
    <Col md={10} >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Holidays */}
    <Row >
    <Col md={1} ></Col>
    <Col md={1}>
    <p className={`${styles.Underline}`}>07.993</p>
    </Col>
    <Col md={5}>
    <p className={`${styles.Underline}`}>Holidays</p>
    </Col>
    <Col md={1}>
    <div className={`${styles.Box5} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{holidays_unit_pro_sta} </p>
    </div>
    </Col>
    <Col md={1}>
    <p className={`${styles.Underline}`}></p>
    </Col>
    <Col md={2}>
    <div className={`${styles.Box3} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{holidays_pro_sta || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col md={1}></Col>
    <Col md={10} >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Box Rentals */}
    <Row >
    <Col md={1} ></Col>
    <Col md={1}>
    <p className={`${styles.Underline}`}>07.994</p>
    </Col>
    <Col md={5}>
    <p className={`${styles.Underline}`}>Box Rentals</p>
    </Col>
    <Col md={1}>
    <div className={`${styles.Box5} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{box_rent_unit_pro_sta} </p>
    </div>
    </Col>
    <Col md={1}>
    <p className={`${styles.Underline}`}></p>
    </Col>
    <Col md={2}>
    <div className={`${styles.Box3} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{box_rent_pro_sta || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col md={1}></Col>
    <Col md={10} >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Other */}
    <Row >
    <Col md={1} ></Col>
    <Col md={1}>
    <p className={`${styles.Underline}`}>07.995</p>
    </Col>
    <Col md={7}>
    <p className={`${styles.Underline}`}>Other</p>
    </Col>
    <Col md={2}>
    <div className={`${styles.Box3} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{other_pro_sta || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col md={1}></Col>
    <Col md={10} >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Fringes Taxes */}
    <Row >
    <Col md={1} ></Col>
    <Col md={1}>
    <p className={`${styles.Underline}`}>07.996</p>
    </Col>
    <Col md={7}>
    <p className={`${styles.Underline}`}>Fringes and Taxes</p>
    </Col>
    <Col md={2}>
    <div className={`${styles.Box3} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{fringes_taxes_production || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col md={1}></Col>
    <Col md={10} >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Production Staff Total */}
    <Row className='mt-3 mb-1' >
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}></p>
    <p></p>
    </Col>
    <Col className={ `${styles.Overview} my-0 pt-1`} md={6} >
    <p className={ `${styles.Bold} pb-0 mb-0`}>TOTAL PRODUCTION STAFF </p>
    </Col>
    <Col md={1} >
    </Col>
    <Col md={2} >
    <div className={`${styles.Box4} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline} mb-0`}>{productionstaff_total || 0}</p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col md={1}></Col>
    <Col md={10} >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    </div>
    {/* DESIGN LABOUR --------------------------------------- */}
    <div className='mt-4'>
    <Row>
    <Col md={1} ></Col>
    <Col xs={1}>
    <p className={`${styles.BoldBlack}`}>08.00</p>
    </Col>
    <Col xs={7}>
    <p className={ `${styles.BoldBlack}`}>DESIGN LABOUR</p>
    </Col>
    </Row>
    {/* TITLES */}
    <Row className={ `mb-2 py-0`} >
    <Col md={1} ></Col>
    <Col className={ `${styles.Overview} py-1`} md={1} >
    <p className="mb-0">ACCT</p>
    </Col>
    <Col className={ `${styles.Overview} py-1`} md={3} >
    <p className="mb-0">Description</p>
    </Col>
    <Col className={`${styles.Overview} text-center py-1`} md={1} >
    <p className="mb-0">#</p>
    </Col>
    <Col className={`${styles.Overview} text-center py-1`} md={1} >
    <p># Unit</p>
    </Col>
    <Col md={1} className={`${styles.Overview} text-center py-1`} >
    <p className="mb-0">Unit</p>
    </Col>
    <Col md={1} className={`${styles.Overview} text-center py-1`} >
    <p className="mb-0">Price</p>
    </Col>
    <Col md={2} className={`${styles.Overview} text-center py-1`} >
    <p className="mb-0">Total</p>
    </Col>
    <Col md={1}></Col>
    </Row> 
    {/* Production Designer */}
    <div >
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>08.10</p>
    </Col>
    <Col md={5} >
    <p className={`${styles.Underline}`}>Production Designer</p>
    </Col>
    </Row>
    {/* Prep */}
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    </Col>
    <Col md={3} >
    <p className={`${styles.Underline7}`}>Prep</p>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
    py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{pro_designer_qty_prep || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{pro_designer_uno_prep || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{pro_designer_una_prep}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{pro_designer_rt_prep || 0}</p>
    </div>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box2} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{prodesprep_total || 0}</p>
    </div>
    </Col>
    </Row>
    {/* Shoot */}
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}></p>
    </Col>
    <Col md={3} >
    <p className={`${styles.Underline7}`}>Shoot</p>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{production_designer_quantity || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{production_designer_units_number || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{production_designer_units_name}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{production_designer_rate || 0}</p>
    </div>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box2} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{productiondesigner_total || 0}</p>
    </div>
    </Col>
    </Row>
    {/* Wrap */}
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}></p>
    </Col>
    <Col md={3} >
    <p className={`${styles.Underline7}`}>Wrap</p>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{pro_designer_qty_wrap || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{pro_designer_uno_wrap || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{pro_designer_una_wrap}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{pro_designer_rt_wrap || 0}</p>
    </div>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box2} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{prodeswrap_total || 0}</p>
    </div>
    </Col>
    </Row>
    {/* Total */}
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}></p>
    </Col>
    <Col md={7} > 
    <p className={`${styles.Underline}`}>Total</p>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box4} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{prodesall_total || 0}</p>
    </div>
    </Col>
    </Row>
    </div>
    {/* hr */}
    <Row>
    <Col md={1}></Col>
    <Col md={10} >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Supervising Art Director */}
    <div >
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>08.20</p>
    </Col>
    <Col md={5} >
    <p className={`${styles.Underline}`}>Supervising Art Director</p>
    </Col>
    </Row>
    {/* Prep */}
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}></p>
    </Col>
    <Col md={3} >
    <p className={`${styles.Underline7}`}>Prep</p>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
    py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{supervart_qty_prep || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{supervart_uno_prep || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{supervart_una_prep}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{supervart_rt_prep || 0}</p>
    </div>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box2} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{supartdirprep_total || 0}</p>
    </div>
    </Col>
    </Row>
    {/* Shoot */}
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}></p>
    </Col>
    <Col md={3} >
    <p className={`${styles.Underline7}`}>Shoot</p>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{supervart_qty || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{supervart_uno || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{supervart_una}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{supervart_rt || 0}</p>
    </div>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box2} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{supartdir_total || 0}</p>
    </div>
    </Col>
    </Row>
    {/* Total */}
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}></p>
    </Col>
    <Col md={7} > 
    <p className={`${styles.Underline}`}>Total</p>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box4} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{supartdirall_total || 0}</p>
    </div>
    </Col>
    </Row>
    </div>
    {/* hr */}
    <Row>
    <Col md={1}></Col>
    <Col md={10} >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Art Director */}
    <div >
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>08.30</p>
    </Col>
    <Col md={5} >
    <p className={`${styles.Underline}`}>Art Director</p>
    </Col>
    </Row>
    {/* Prep */}
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    </Col>
    <Col md={3} >
    <p className={`${styles.Underline7}`}>Prep</p>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
    py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{art_director_qty_prep || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{art_director_uno_prep || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{art_director_una_prep}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{art_director_rt_prep || 0}</p>
    </div>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box2} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{artdirprep_total || 0}</p>
    </div>
    </Col>
    </Row>
    {/* Shoot */}
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}></p>
    </Col>
    <Col md={3} >
    <p className={`${styles.Underline7}`}>Shoot</p>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{art_director_quantity || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{art_director_units_number || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{art_director_units_name}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{art_director_rate || 0}</p>
    </div>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box2} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{artdirector_total || 0}</p>
    </div>
    </Col>
    </Row>
    {/* Wrap */}
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}></p>
    </Col>
    <Col md={3} >
    <p className={`${styles.Underline7}`}>Wrap</p>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{art_director_qty_wrap || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{art_director_uno_wrap || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{art_director_una_wrap}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{art_director_rt_wrap || 0}</p>
    </div>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box2} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{artdirwrap_total || 0}</p>
    </div>
    </Col>
    </Row>
    {/* Total */}
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}></p>
    </Col>
    <Col md={7} > 
    <p className={`${styles.Underline}`}>Total</p>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box4} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{artdirall_total || 0}</p>
    </div>
    </Col>
    </Row>
    </div>
    {/* hr */}
    <Row>
    <Col md={1}></Col>
    <Col md={10} >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Standby Art Director */}
    <div >
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>08.40</p>
    </Col>
    <Col md={5} >
    <p className={`${styles.Underline}`}>Standby Art Director</p>
    </Col>
    </Row>
    {/* Prep */}
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    </Col>
    <Col md={3} >
    <p className={`${styles.Underline7}`}>Prep</p>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
    py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{standby_art_qty_prep || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{standby_art_uno_prep || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{standby_art_una_prep}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{standby_art_rt_prep || 0}</p>
    </div>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box2} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{stbyartprep_total || 0}</p>
    </div>
    </Col>
    </Row>
    {/* Shoot */}
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}></p>
    </Col>
    <Col md={3} >
    <p className={`${styles.Underline7}`}>Shoot</p>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{standby_art_qty || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{standby_art_uno || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{standby_art_una}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{standby_art_rt || 0}</p>
    </div>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box2} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{standbyart_total || 0}</p>
    </div>
    </Col>
    </Row>
    {/* Total */}
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}></p>
    </Col>
    <Col md={7} > 
    <p className={`${styles.Underline}`}>Total</p>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box4} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{stbyartall_total || 0}</p>
    </div>
    </Col>
    </Row>
    </div>
    {/* hr */}
    <Row>
    <Col md={1}></Col>
    <Col md={10} >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Art Assistants */}
    <div >
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>08.50</p>
    </Col>
    <Col md={5} >
    <p className={`${styles.Underline}`}>Art Assistants</p>
    </Col>
    </Row>
    {/* Prep */}
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    </Col>
    <Col md={3} >
    <p className={`${styles.Underline7}`}>Prep</p>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
    py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{art_ass_qty_prep || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{art_ass_uno_prep || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{art_ass_una_prep}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{art_ass_rt_prep || 0}</p>
    </div>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box2} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{artassprep_total || 0}</p>
    </div>
    </Col>
    </Row>
    {/* Shoot */}
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}></p>
    </Col>
    <Col md={3} >
    <p className={`${styles.Underline7}`}>Shoot</p>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{art_assistants_quantity || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{art_assistants_units_number || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{art_assistants_units_name}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{art_assistants_rate || 0}</p>
    </div>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box2} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{artassistants_total || 0}</p>
    </div>
    </Col>
    </Row>
    {/* Wrap */}
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}></p>
    </Col>
    <Col md={3} >
    <p className={`${styles.Underline7}`}>Wrap</p>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{art_ass_qty_wrap || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{art_ass_uno_wrap || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{art_ass_una_wrap}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{art_ass_rt_wrap || 0}</p>
    </div>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box2} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{artasswrap_total || 0}</p>
    </div>
    </Col>
    </Row>
    {/* Total */}
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}></p>
    </Col>
    <Col md={7} > 
    <p className={`${styles.Underline}`}>Total</p>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box4} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{artassall_total || 0}</p>
    </div>
    </Col>
    </Row>
    </div>
    {/* hr */}
    <Row>
    <Col md={1}></Col>
    <Col md={10} >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Set Designer/Draughtsperson */}
    <div >
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>08.60</p>
    </Col>
    <Col md={5} >
    <p className={`${styles.Underline}`}>Set Designer/Draughtsperson</p>
    </Col>
    </Row>
    {/* Prep */}
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    </Col>
    <Col md={3} >
    <p className={`${styles.Underline7}`}>Prep</p>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
    py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{set_design_qty_prep || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{set_design_uno_prep || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{set_design_una_prep}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{set_design_rt_prep || 0}</p>
    </div>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box2} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{setdesprep_total || 0}</p>
    </div>
    </Col>
    </Row>
    {/* Shoot */}
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}></p>
    </Col>
    <Col md={3} >
    <p className={`${styles.Underline7}`}>Shoot</p>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{set_design_qty || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{set_design_uno || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{set_design_una}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{set_design_rt || 0}</p>
    </div>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box2} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{setdes_total || 0}</p>
    </div>
    </Col>
    </Row>
    {/* Total */}
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}></p>
    </Col>
    <Col md={7} > 
    <p className={`${styles.Underline}`}>Total</p>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box4} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{setdesall_total || 0}</p>
    </div>
    </Col>
    </Row>
    </div>
    {/* hr */}
    <Row>
    <Col md={1}></Col>
    <Col md={10} >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Junior Draughtsperson */}
    <div >
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>08.70</p>
    </Col>
    <Col md={5} >
    <p className={`${styles.Underline}`}>Junior Draughtsperson</p>
    </Col>
    </Row>
    {/* Prep */}
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    </Col>
    <Col md={3} >
    <p className={`${styles.Underline7}`}>Prep</p>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
    py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{junior_draught_qty_prep || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{junior_draught_uno_prep || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{junior_draught_una_prep}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{junior_draught_rt_prep || 0}</p>
    </div>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box2} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{jundraprep_total || 0}</p>
    </div>
    </Col>
    </Row>
    {/* Shoot */}
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}></p>
    </Col>
    <Col md={3} >
    <p className={`${styles.Underline7}`}>Shoot</p>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{junior_draught_qty || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{junior_draught_uno || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{junior_draught_una}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{junior_draught_rt || 0}</p>
    </div>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box2} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{jundraught_total || 0}</p>
    </div>
    </Col>
    </Row>
    {/* Total */}
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}></p>
    </Col>
    <Col md={7} > 
    <p className={`${styles.Underline}`}>Total</p>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box4} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{jundraall_total || 0}</p>
    </div>
    </Col>
    </Row>
    </div>
    {/* hr */}
    <Row>
    <Col md={1}></Col>
    <Col md={10} >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Graphic Artists */}
    <div >
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>08.80</p>
    </Col>
    <Col md={5} >
    <p className={`${styles.Underline}`}>Graphic Artists</p>
    </Col>
    </Row>
    {/* Prep */}
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    </Col>
    <Col md={3} >
    <p className={`${styles.Underline7}`}>Prep</p>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
    py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{graphic_art_qty_prep || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{graphic_art_uno_prep || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{graphic_art_una_prep}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{graphic_art_rt_prep || 0}</p>
    </div>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box2} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{graphicartprep_total || 0}</p>
    </div>
    </Col>
    </Row>
    {/* Shoot */}
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}></p>
    </Col>
    <Col md={3} >
    <p className={`${styles.Underline7}`}>Shoot</p>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{graphic_artists_quantity || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{graphic_artists_units_number || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{graphic_artists_units_name}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{graphic_artists_rate || 0}</p>
    </div>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box2} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{graphicartists_total || 0}</p>
    </div>
    </Col>
    </Row>
    {/* Total */}
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}></p>
    </Col>
    <Col md={7} > 
    <p className={`${styles.Underline}`}>Total</p>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box4} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{graphicartall_total || 0}</p>
    </div>
    </Col>
    </Row>
    </div>
    {/* hr */}
    <Row>
    <Col md={1}></Col>
    <Col md={10} >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Art Department Coordinator */}
    <div >
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>08.90</p>
    </Col>
    <Col md={5} >
    <p className={`${styles.Underline}`}>Art Department Coordinator</p>
    </Col>
    </Row>
    {/* Prep */}
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    </Col>
    <Col md={3} >
    <p className={`${styles.Underline7}`}>Prep</p>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
    py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{art_dep_coor_qty_prep || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{art_dep_coor_uno_prep || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{art_dep_coor_una_prep}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{art_dep_coor_rt_prep || 0}</p>
    </div>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box2} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{artcoorprep_total || 0}</p>
    </div>
    </Col>
    </Row>
    {/* Shoot */}
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}></p>
    </Col>
    <Col md={3} >
    <p className={`${styles.Underline7}`}>Shoot</p>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{art_dep_coor_qty || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{art_dep_coor_uno || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{art_dep_coor_una}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{art_dep_coor_rt || 0}</p>
    </div>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box2} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{artcoor_total || 0}</p>
    </div>
    </Col>
    </Row>
    {/* Wrap */}
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}></p>
    </Col>
    <Col md={3} >
    <p className={`${styles.Underline7}`}>Wrap</p>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{art_dep_coor_qty_wrap || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{art_dep_coor_uno_wrap || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{art_dep_coor_una_wrap}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{art_dep_coor_rt_wrap || 0}</p>
    </div>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box2} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{artcoorwrap_total || 0}</p>
    </div>
    </Col>
    </Row>
    {/* Total */}
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}></p>
    </Col>
    <Col md={7} > 
    <p className={`${styles.Underline}`}>Total</p>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box4} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{artcoorall_total || 0}</p>
    </div>
    </Col>
    </Row>
    </div>
    {/* hr */}
    <Row>
    <Col md={1}></Col>
    <Col md={10} >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Production Assistants/Trainees */}
    <div >
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>08.91</p>
    </Col>
    <Col md={5} >
    <p className={`${styles.Underline}`}>Production Assistants/Trainees</p>
    </Col>
    </Row>
    {/* Prep */}
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    </Col>
    <Col md={3} >
    <p className={`${styles.Underline7}`}>Prep</p>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
    py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{pro_ass_trainees_qty_prep || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{pro_ass_trainees_uno_prep || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{pro_ass_trainees_una_prep}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{pro_ass_trainees_rt_prep || 0}</p>
    </div>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box2} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{proasstrainprep_total || 0}</p>
    </div>
    </Col>
    </Row>
    {/* Shoot */}
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}></p>
    </Col>
    <Col md={3} >
    <p className={`${styles.Underline7}`}>Shoot</p>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{production_assistants_trainees_quantity || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{production_assistants_trainees_units_number || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{production_assistants_trainees_units_name}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{production_assistants_trainees_rate || 0}</p>
    </div>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box2} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{productionassistantstrainees_total || 0}</p>
    </div>
    </Col>
    </Row>
    {/* Wrap */}
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}></p>
    </Col>
    <Col md={3} >
    <p className={`${styles.Underline7}`}>Wrap</p>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{pro_ass_trainees_qty_wrap || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{pro_ass_trainees_uno_wrap || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{pro_ass_trainees_una_wrap}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{pro_ass_trainees_rt_wrap || 0}</p>
    </div>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box2} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{proasstrainwrap_total || 0}</p>
    </div>
    </Col>
    </Row>
    {/* Total */}
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}></p>
    </Col>
    <Col md={7} > 
    <p className={`${styles.Underline}`}>Total</p>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box4} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{proasstrainall_total || 0}</p>
    </div>
    </Col>
    </Row>
    </div>
    {/* hr */}
    <Row>
    <Col md={1}></Col>
    <Col md={10} >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Concept Artist/Illustrator */}
    <Row >
    <Col md={1} ></Col>
    <Col md={1}>
    <p className={`${styles.Underline}`}>08.92</p>
    </Col>
    <Col md={5}>
    <p className={`${styles.BoldBlack}`}>Concept Artist/Illustrator</p>
    </Col>
    <Col md={1}>
    <div className={`${styles.Box5} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{sketch_artists_unit} </p>
    </div>
    </Col>
    <Col md={1}>
    <p className={`${styles.Underline}`}></p>
    </Col>
    <Col md={2}>
    <div className={`${styles.Box3} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{sketch_artists || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col md={1}></Col>
    <Col md={10} >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Story Board Artist */}
    <Row >
    <Col md={1} ></Col>
    <Col md={1}>
    <p className={`${styles.Underline}`}>08.93</p>
    </Col>
    <Col md={5}>
    <p className={`${styles.BoldBlack}`}>Story Board Artist</p>
    </Col>
    <Col md={1}>
    <div className={`${styles.Box5} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{storyboard_artists_unit} </p>
    </div>
    </Col>
    <Col md={1}>
    <p className={`${styles.Underline}`}></p>
    </Col>
    <Col md={2}>
    <div className={`${styles.Box3} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{storyboard_artists || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col md={1}></Col>
    <Col md={10} >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* 6th / 7th Days */}
    <Row >
    <Col md={1} ></Col>
    <Col md={1}>
    <p className={`${styles.Underline}`}>08.94</p>
    </Col>
    <Col md={5}>
    <p className={`${styles.BoldBlack}`}>6th/7th Days</p>
    </Col>
    <Col md={1}>
    <div className={`${styles.Box5} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{days6th7th_unit_design} </p>
    </div>
    </Col>
    <Col md={1}>
    <p className={`${styles.Underline}`}></p>
    </Col>
    <Col md={2}>
    <div className={`${styles.Box3} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{days6th7th_design || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col md={1}></Col>
    <Col md={10} >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Overtime */}
    <Row >
    <Col md={1} ></Col>
    <Col md={1}>
    <p className={`${styles.Underline}`}>08.95</p>
    </Col>
    <Col md={5}>
    <p className={`${styles.BoldBlack}`}>Overtime</p>
    </Col>
    <Col md={1}>
    <div className={`${styles.Box5} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{overtime_unit_design} </p>
    </div>
    </Col>
    <Col md={1}>
    <p className={`${styles.Underline}`}></p>
    </Col>
    <Col md={2}>
    <div className={`${styles.Box3} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{overtime_design || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col md={1}></Col>
    <Col md={10} >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Holidays */}
    <Row >
    <Col md={1} ></Col>
    <Col md={1}>
    <p className={`${styles.Underline}`}>08.96</p>
    </Col>
    <Col md={5}>
    <p className={`${styles.BoldBlack}`}>Holidays</p>
    </Col>
    <Col md={1}>
    <div className={`${styles.Box5} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{holidays_unit_design} </p>
    </div>
    </Col>
    <Col md={1}>
    <p className={`${styles.Underline}`}></p>
    </Col>
    <Col md={2}>
    <div className={`${styles.Box3} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{holidays_design || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col md={1}></Col>
    <Col md={10} >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Box Rentals */}
    <Row >
    <Col md={1} ></Col>
    <Col md={1}>
    <p className={`${styles.Underline}`}>08.97</p>
    </Col>
    <Col md={5}>
    <p className={`${styles.BoldBlack}`}>Box Rentals</p>
    </Col>
    <Col md={1}>
    <div className={`${styles.Box5} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{box_rent_unit_design} </p>
    </div>
    </Col>
    <Col md={1}>
    <p className={`${styles.Underline}`}></p>
    </Col>
    <Col md={2}>
    <div className={`${styles.Box3} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{box_rent_design || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col md={1}></Col>
    <Col md={10} >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Other - Design */}
    <Row >
    <Col md={1} ></Col>
    <Col md={1}>
    <p className={`${styles.Underline}`}>08.98</p>
    </Col>
    <Col md={7}>
    <p className={`${styles.BoldBlack}`}>Other</p>
    </Col>
    <Col md={2}>
    <div className={`${styles.Box3} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{other_design || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col md={1}></Col>
    <Col md={10} >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Fringes Taxes */}
    <Row >
    <Col md={1} ></Col>
    <Col md={1}>
    <p className={`${styles.Underline}`}>08.99</p>
    </Col>
    <Col md={7}>
    <p className={`${styles.BoldBlack}`}>Fringes Taxes</p>
    </Col>
    <Col md={2}>
    <div className={`${styles.Box3} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{fringes_taxes_design || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col md={1}></Col>
    <Col md={10} >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Design Total */}
    <Row className='mt-3 mb-1' >
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}></p>
    <p></p>
    </Col>
    <Col className={ `${styles.Overview} my-0 pt-1`} md={6} >
    <p className={ `${styles.Bold} pb-0 mb-0`}>TOTAL DESIGN LABOUR </p>
    </Col>
    <Col md={1} >
    </Col>
    <Col md={2} >
    <div className={`${styles.Box4} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline} mb-0`}>{designlabour_total || 0}</p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col md={1}></Col>
    <Col md={10} >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    </div>
    {/* CONSTRUCTION LABOUR ---------------------------------- */}
    <div className='mt-4'>
    <Row>
    <Col md={1} ></Col>
    <Col xs={1}>
    <p className={`${styles.BoldBlack}`}>09.00</p>
    </Col>
    <Col xs={8}>
    <p className={ `${styles.BoldBlack}`}>CONSTRUCTION LABOUR</p>
    </Col>
    </Row>
    {/* TITLES */}
    <Row className={ `mb-2 py-0`} >
    <Col md={1} ></Col>
    <Col className={ `${styles.Overview} py-1`} md={1} >
    <p className="mb-0">ACCT</p>
    </Col>
    <Col className={ `${styles.Overview} py-1`} md={3} >
    <p className="mb-0">Description</p>
    </Col>
    <Col className={`${styles.Overview} text-center py-1`} md={1} >
    <p className="mb-0">#</p>
    </Col>
    <Col className={`${styles.Overview} text-center py-1`} md={1} >
    <p># Unit</p>
    </Col>
    <Col md={1} className={`${styles.Overview} text-center py-1`} >
    <p className="mb-0">Unit</p>
    </Col>
    <Col md={1} className={`${styles.Overview} text-center py-1`} >
    <p className="mb-0">Price</p>
    </Col>
    <Col md={2} className={`${styles.Overview} text-center py-1`} >
    <p className="mb-0">Total</p>
    </Col>
    <Col md={1}></Col>
    </Row>
    {/* Construction Coordinator */}
    <div>
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline} mb-0`}>09.10</p>
    </Col>
    <Col md={5} >
    <p className={`${styles.BoldBlack} mb-0`}>Construction Coordinator</p>
    </Col>
    </Row>
    {/* Prep */}
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    </Col>
    <Col md={3} >
    <p className={`${styles.Underline7}`}>Prep</p>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
    py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{con_coor_qty_prep || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{con_coor_uno_prep || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{con_coor_una_prep}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{con_coor_rt_prep || 0}</p>
    </div>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box2} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{concoorprep_total || 0}</p>
    </div>
    </Col>
    </Row>
    {/* Shoot */}
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}></p>
    </Col>
    <Col md={3} >
    <p className={`${styles.Underline7}`}>Shoot</p>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{constructioncoordinator_quantity || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{constructioncoordinator_units_number || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{constructioncoordinator_units_name}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{constructioncoordinator_rate || 0}</p>
    </div>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box2} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{constructioncoordinator_total || 0}</p>
    </div>
    </Col>
    </Row>
    {/* Wrap */}
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}></p>
    </Col>
    <Col md={3} >
    <p className={`${styles.Underline7}`}>Wrap</p>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{con_coor_qty_wrap || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{con_coor_uno_wrap || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{con_coor_una_wrap}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{con_coor_rt_wrap || 0}</p>
    </div>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box2} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{concoorwrap_total || 0}</p>
    </div>
    </Col>
    </Row>
    {/* Total */}
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline7}`}></p>
    </Col>
    <Col md={7} > 
    <p className={`${styles.Underline}`}>Total</p>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box4} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{concoorall_total || 0}</p>
    </div>
    </Col>
    </Row>
    </div>
    {/* hr */}
    <Row>
    <Col md={1}></Col>
    <Col md={10} >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Head Carpenter */}
    <div>
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline} mb-0`}>09.20</p>
    </Col>
    <Col md={5} >
    <p className={`${styles.BoldBlack} mb-0`}>Head Carpenter</p>
    </Col>
    </Row>
    {/* Prep */}
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    </Col>
    <Col md={3} >
    <p className={`${styles.Underline7}`}>Prep</p>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
    py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{headcar_qty_prep || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{headcar_uno_prep || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{headcar_una_prep}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{headcar_rt_prep || 0}</p>
    </div>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box2} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{headcarprep_total || 0}</p>
    </div>
    </Col>
    </Row>
    {/* Shoot */}
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}></p>
    </Col>
    <Col md={3} >
    <p className={`${styles.Underline7}`}>Shoot</p>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{headcarpenter_quantity || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{headcarpenter_units_number || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{headcarpenter_units_name}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{headcarpenter_rate || 0}</p>
    </div>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box2} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{headcarpenter_total || 0}</p>
    </div>
    </Col>
    </Row>
    {/* Wrap */}
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}></p>
    </Col>
    <Col md={3} >
    <p className={`${styles.Underline7}`}>Wrap</p>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{headcar_qty_wrap || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{headcar_uno_wrap || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{headcar_una_wrap}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{headcar_rt_wrap || 0}</p>
    </div>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box2} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{headcarwrap_total || 0}</p>
    </div>
    </Col>
    </Row>
    {/* Total */}
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline7}`}></p>
    </Col>
    <Col md={7} > 
    <p className={`${styles.Underline}`}>Total</p>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box4} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{headcarall_total || 0}</p>
    </div>
    </Col>
    </Row>
    </div>
    {/* hr */}
    <Row>
    <Col md={1}></Col>
    <Col md={10} >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Carpenters */}
    <div>
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline} mb-0`}>09.30</p>
    </Col>
    <Col md={5} >
    <p className={`${styles.BoldBlack} mb-0`}>Carpenters</p>
    </Col>
    </Row>
    {/* Prep */}
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    </Col>
    <Col md={3} >
    <p className={`${styles.Underline7}`}>Prep</p>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
    py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{carpen_qty_prep || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{carpen_uno_prep || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{carpen_una_prep}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{carpen_rt_prep || 0}</p>
    </div>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box2} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{carpenprep_total || 0}</p>
    </div>
    </Col>
    </Row>
    {/* Shoot */}
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}></p>
    </Col>
    <Col md={3} >
    <p className={`${styles.Underline7}`}>Shoot</p>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{carpenters_quantity || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{carpenters_units_number || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{carpenters_units_name}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{carpenters_rate || 0}</p>
    </div>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box2} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{carpenters_total || 0}</p>
    </div>
    </Col>
    </Row>
    {/* Wrap */}
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}></p>
    </Col>
    <Col md={3} >
    <p className={`${styles.Underline7}`}>Wrap</p>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{carpen_qty_wrap || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{carpen_uno_wrap || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{carpen_una_wrap}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{carpen_rt_wrap || 0}</p>
    </div>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box2} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{carpenwrap_total || 0}</p>
    </div>
    </Col>
    </Row>
    {/* Total */}
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline7}`}></p>
    </Col>
    <Col md={7} > 
    <p className={`${styles.Underline}`}>Total</p>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box4} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{carpenall_total || 0}</p>
    </div>
    </Col>
    </Row>
    </div>
    {/* hr */}
    <Row>
    <Col md={1}></Col>
    <Col md={10} >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Scenic Painters */}
    <div>
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline} mb-0`}>09.40</p>
    </Col>
    <Col md={5} >
    <p className={`${styles.BoldBlack} mb-0`}>Scenic Painters</p>
    </Col>
    </Row>
    {/* Prep */}
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    </Col>
    <Col md={3} >
    <p className={`${styles.Underline7}`}>Prep</p>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
    py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{scenic_qty_prep || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{scenic_uno_prep || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{scenic_una_prep}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{scenic_rt_prep || 0}</p>
    </div>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box2} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{scenicprep_total || 0}</p>
    </div>
    </Col>
    </Row>
    {/* Shoot */}
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}></p>
    </Col>
    <Col md={3} >
    <p className={`${styles.Underline7}`}>Shoot</p>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{scenicpainters_quantity || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{scenicpainters_units_number || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{scenicpainters_units_name}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{scenicpainters_rate || 0}</p>
    </div>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box2} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{scenicpainters_total || 0}</p>
    </div>
    </Col>
    </Row>
    {/* Wrap */}
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}></p>
    </Col>
    <Col md={3} >
    <p className={`${styles.Underline7}`}>Wrap</p>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{scenic_qty_wrap || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{scenic_uno_wrap || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{scenic_una_wrap}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{scenic_rt_wrap || 0}</p>
    </div>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box2} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{scenicwrap_total || 0}</p>
    </div>
    </Col>
    </Row>
    {/* Total */}
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline7}`}></p>
    </Col>
    <Col md={7} > 
    <p className={`${styles.Underline}`}>Total</p>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box4} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{scenicall_total || 0}</p>
    </div>
    </Col>
    </Row>
    </div>
    {/* hr */}
    <Row>
    <Col md={1}></Col>
    <Col md={10} >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Head Painter */}
    <div>
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline} mb-0`}>09.50</p>
    </Col>
    <Col md={5} >
    <p className={`${styles.BoldBlack} mb-0`}>Head Painter</p>
    </Col>
    </Row>
    {/* Prep */}
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    </Col>
    <Col md={3} >
    <p className={`${styles.Underline7}`}>Prep</p>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
    py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{headpain_qty_prep || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{headpain_uno_prep || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{headpain_una_prep}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{headpain_rt_prep || 0}</p>
    </div>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box2} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{headpainprep_total || 0}</p>
    </div>
    </Col>
    </Row>
    {/* Shoot */}
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}></p>
    </Col>
    <Col md={3} >
    <p className={`${styles.Underline7}`}>Shoot</p>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{headpainter_quantity || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{headpainter_units_number || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{headpainter_units_name}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{headpainter_rate || 0}</p>
    </div>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box2} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{headpainter_total || 0}</p>
    </div>
    </Col>
    </Row>
    {/* Wrap */}
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}></p>
    </Col>
    <Col md={3} >
    <p className={`${styles.Underline7}`}>Wrap</p>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{headpain_qty_wrap || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{headpain_uno_wrap || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{headpain_una_wrap}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{headpain_rt_wrap || 0}</p>
    </div>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box2} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{headpainwrap_total || 0}</p>
    </div>
    </Col>
    </Row>
    {/* Total */}
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline7}`}></p>
    </Col>
    <Col md={7} > 
    <p className={`${styles.Underline}`}>Total</p>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box4} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{headpainall_total || 0}</p>
    </div>
    </Col>
    </Row>
    </div>
    {/* hr */}
    <Row>
    <Col md={1}></Col>
    <Col md={10} >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Painters */}
    <div>
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline} mb-0`}>09.60</p>
    </Col>
    <Col md={5} >
    <p className={`${styles.BoldBlack} mb-0`}>Painters</p>
    </Col>
    </Row>
    {/* Prep */}
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    </Col>
    <Col md={3} >
    <p className={`${styles.Underline7}`}>Prep</p>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
    py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{pain_qty_prep || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{pain_uno_prep || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{pain_una_prep}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{pain_rt_prep || 0}</p>
    </div>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box2} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{paintprep_total || 0}</p>
    </div>
    </Col>
    </Row>
    {/* Shoot */}
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}></p>
    </Col>
    <Col md={3} >
    <p className={`${styles.Underline7}`}>Shoot</p>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{painters_quantity || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{painters_units_number || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{painters_units_name}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{painters_rate || 0}</p>
    </div>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box2} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{painters_total || 0}</p>
    </div>
    </Col>
    </Row>
    {/* Wrap */}
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}></p>
    </Col>
    <Col md={3} >
    <p className={`${styles.Underline7}`}>Wrap</p>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{pain_qty_wrap || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{pain_uno_wrap || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{pain_una_wrap}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{pain_rt_wrap || 0}</p>
    </div>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box2} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{paintwrap_total || 0}</p>
    </div>
    </Col>
    </Row>
    {/* Total */}
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline7}`}></p>
    </Col>
    <Col md={7} > 
    <p className={`${styles.Underline}`}>Total</p>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box4} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{paintall_total || 0}</p>
    </div>
    </Col>
    </Row>
    </div>
    {/* hr */}
    <Row>
    <Col md={1}></Col>
    <Col md={10} >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Labourers */}
    <div>
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline} mb-0`}>09.70</p>
    </Col>
    <Col md={5} >
    <p className={`${styles.BoldBlack} mb-0`}>Labourers</p>
    </Col>
    </Row>
    {/* Prep */}
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    </Col>
    <Col md={3} >
    <p className={`${styles.Underline7}`}>Prep</p>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
    py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{labo_qty_prep || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{labo_uno_prep || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{labo_una_prep}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{labo_rt_prep || 0}</p>
    </div>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box2} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{laboprep_total || 0}</p>
    </div>
    </Col>
    </Row>
    {/* Shoot */}
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}></p>
    </Col>
    <Col md={3} >
    <p className={`${styles.Underline7}`}>Shoot</p>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{labourers_quantity || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{labourers_units_number || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{labourers_units_name}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{labourers_rate || 0}</p>
    </div>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box2} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{labourers_total || 0}</p>
    </div>
    </Col>
    </Row>
    {/* Wrap */}
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}></p>
    </Col>
    <Col md={3} >
    <p className={`${styles.Underline7}`}>Wrap</p>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{labo_qty_wrap || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{labo_uno_wrap || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{labo_una_wrap}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{labo_rt_wrap || 0}</p>
    </div>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box2} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{labowrap_total || 0}</p>
    </div>
    </Col>
    </Row>
    {/* Total */}
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline7}`}></p>
    </Col>
    <Col md={7} > 
    <p className={`${styles.Underline}`}>Total</p>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box4} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{laboall_total || 0}</p>
    </div>
    </Col>
    </Row>
    </div>
    {/* hr */}
    <Row>
    <Col md={1}></Col>
    <Col md={10} >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* 6th/7th Days */}
    <Row >
    <Col md={1} ></Col>
    <Col md={1}>
    <p className={`${styles.Underline}`}>09.80</p>
    </Col>
    <Col md={5}>
    <p className={`${styles.BoldBlack}`}>6th/7th Days</p>
    </Col>
    <Col md={1}>
    <div className={`${styles.Box5} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{days6th7th_unit_con} </p>
    </div>
    </Col>
    <Col md={1}>
    <p className={`${styles.Underline}`}></p>
    </Col>
    <Col md={2}>
    <div className={`${styles.Box3} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{days6th7th_con || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col md={1}></Col>
    <Col md={10} >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Overtime */}
    <Row >
    <Col md={1} ></Col>
    <Col md={1}>
    <p className={`${styles.Underline}`}>09.90</p>
    </Col>
    <Col md={5}>
    <p className={`${styles.Underline}`}>Overtime</p>
    </Col>
    <Col md={1}>
    <div className={`${styles.Box5} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{overtime_unit_con} </p>
    </div>
    </Col>
    <Col md={1}>
    <p className={`${styles.Underline}`}></p>
    </Col>
    <Col md={2}>
    <div className={`${styles.Box3} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{overtime_con || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col md={1}></Col>
    <Col md={10} >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Holidays */}
    <Row >
    <Col md={1} ></Col>
    <Col md={1}>
    <p className={`${styles.Underline}`}>09.91</p>
    </Col>
    <Col md={5}>
    <p className={`${styles.Underline}`}>Holidays</p>
    </Col>
    <Col md={1}>
    <div className={`${styles.Box5} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{holidays_unit_con} </p>
    </div>
    </Col>
    <Col md={1}>
    <p className={`${styles.Underline}`}></p>
    </Col>
    <Col md={2}>
    <div className={`${styles.Box3} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{holidays_con || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col md={1}></Col>
    <Col md={10} >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Box Rentals */}
    <Row >
    <Col md={1} ></Col>
    <Col md={1}>
    <p className={`${styles.Underline}`}>09.92</p>
    </Col>
    <Col md={5}>
    <p className={`${styles.Underline}`}>Box Rentals</p>
    </Col>
    <Col md={1}>
    <div className={`${styles.Box5} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{box_rent_unit_con} </p>
    </div>
    </Col>
    <Col md={1}>
    <p className={`${styles.Underline}`}></p>
    </Col>
    <Col md={2}>
    <div className={`${styles.Box3} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{box_rent_con || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col md={1}></Col>
    <Col md={10} >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Other */}
    <Row >
    <Col md={1} ></Col>
    <Col md={1}>
    <p className={`${styles.Underline}`}>09.93</p>
    </Col>
    <Col md={7}>
    <p className={`${styles.Underline}`}>Other</p>
    </Col>
    <Col md={2}>
    <div className={`${styles.Box3} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{other_construction || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col md={1}></Col>
    <Col md={10} >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Fringes Taxes */}
    <Row >
    <Col md={1} ></Col>
    <Col md={1}>
    <p className={`${styles.Underline}`}>09.94</p>
    </Col>
    <Col md={7}>
    <p className={`${styles.Underline}`}>Fringes and Taxes</p>
    </Col>
    <Col md={2}>
    <div className={`${styles.Box3} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{fringes_taxes_construction || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col md={1}></Col>
    <Col md={10} >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Construction Staff Total */}
    <Row className='mt-3 mb-1' >
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}></p>
    <p></p>
    </Col>
    <Col className={ `${styles.Overview} my-0 pt-1`} md={6} >
    <p className={ `${styles.Bold} pb-0 mb-0`}>TOTAL CONSTRUCTION LABOUR</p>
    </Col>
    <Col md={1} >
    </Col>
    <Col md={2} >
    <div className={`${styles.Box4} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline} mb-0`}>{constructionlabour_total || 0}</p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col md={1}></Col>
    <Col md={10} >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    </div>
    {/* SET DRESSING LABOUR ---------------------------------- */}
    <div className='mt-4'>
    <Row>
    <Col md={1} ></Col>
    <Col xs={1}>
    <p className={`${styles.BoldBlack}`}>10.00</p>
    </Col>
    <Col xs={8}>
    <p className={ `${styles.BoldBlack}`}>SET DRESSING LABOUR</p>
    </Col>
    </Row>
    {/* TITLES */}
    <Row className={ `mb-2 py-0`} >
    <Col md={1} ></Col>
    <Col className={ `${styles.Overview} py-1`} md={1} >
    <p className="mb-0">ACCT</p>
    </Col>
    <Col className={ `${styles.Overview} py-1`} md={3} >
    <p className="mb-0">Description</p>
    </Col>
    <Col className={`${styles.Overview} text-center py-1`} md={1} >
    <p className="mb-0">#</p>
    </Col>
    <Col className={`${styles.Overview} text-center py-1`} md={1} >
    <p># Unit</p>
    </Col>
    <Col md={1} className={`${styles.Overview} text-center py-1`} >
    <p className="mb-0">Unit</p>
    </Col>
    <Col md={1} className={`${styles.Overview} text-center py-1`} >
    <p className="mb-0">Price</p>
    </Col>
    <Col md={2} className={`${styles.Overview} text-center py-1`} >
    <p className="mb-0">Total</p>
    </Col>
    <Col md={1}></Col>
    </Row>
    {/* Set Decorator */}
    <div>
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline} mb-0`}>10.10</p>
    </Col>
    <Col md={5} >
    <p className={`${styles.BoldBlack} mb-0`}>Set Decorator</p>
    </Col>
    </Row>
    {/* Prep */}
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    </Col>
    <Col md={3} >
    <p className={`${styles.Underline7}`}>Prep</p>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
    py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{set_dec_qty_prep || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{set_dec_uno_prep || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{set_dec_una_prep}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{set_dec_rt_prep || 0}</p>
    </div>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box2} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{decsetprep_total || 0}</p>
    </div>
    </Col>
    </Row>
    {/* Shoot */}
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}></p>
    </Col>
    <Col md={3} >
    <p className={`${styles.Underline7}`}>Shoot</p>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{set_decorator_quantity || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{set_decorator_units_number || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{set_decorator_units_name}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{set_decorator_rate || 0}</p>
    </div>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box2} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{decoratorset_total || 0}</p>
    </div>
    </Col>
    </Row>
    {/* Wrap */}
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}></p>
    </Col>
    <Col md={3} >
    <p className={`${styles.Underline7}`}>Wrap</p>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{set_dec_qty_wrap || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{set_dec_uno_wrap || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{set_dec_una_wrap}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{set_dec_rt_wrap || 0}</p>
    </div>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box2} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{decsetwrap_total || 0}</p>
    </div>
    </Col>
    </Row>
    {/* Total */}
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline7}`}></p>
    </Col>
    <Col md={7} > 
    <p className={`${styles.Underline}`}>Total</p>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box4} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{decsetall_total || 0}</p>
    </div>
    </Col>
    </Row>
    </div>
    {/* hr */}
    <Row>
    <Col md={1}></Col>
    <Col md={10} >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Assistant Set Decorator */}
    <div>
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline} mb-0`}>10.20</p>
    </Col>
    <Col md={5} >
    <p className={`${styles.BoldBlack} mb-0`}>Assistant Set Decorator</p>
    </Col>
    </Row>
    {/* Prep */}
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    </Col>
    <Col md={3} >
    <p className={`${styles.Underline7}`}>Prep</p>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
    py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{ass_set_d_qty_prep || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{ass_set_d_uno_prep || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{ass_set_d_una_prep}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{ass_set_d_rt_prep || 0}</p>
    </div>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box2} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{assdsetprep_total || 0}</p>
    </div>
    </Col>
    </Row>
    {/* Shoot */}
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}></p>
    </Col>
    <Col md={3} >
    <p className={`${styles.Underline7}`}>Shoot</p>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{assist_set_decorator_quantity || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{assist_set_decorator_units_number || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{assist_set_decorator_units_name}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{assist_set_decorator_rate || 0}</p>
    </div>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box2} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{assistdecoratorset_total || 0}</p>
    </div>
    </Col>
    </Row>
    {/* Wrap */}
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}></p>
    </Col>
    <Col md={3} >
    <p className={`${styles.Underline7}`}>Wrap</p>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{ass_set_d_qty_wrap || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{ass_set_d_uno_wrap || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{ass_set_d_una_wrap}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{ass_set_d_rt_wrap || 0}</p>
    </div>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box2} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{assdsetwrap_total || 0}</p>
    </div>
    </Col>
    </Row>
    {/* Total */}
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline7}`}></p>
    </Col>
    <Col md={7} > 
    <p className={`${styles.Underline}`}>Total</p>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box4} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{assdsetall_total || 0}</p>
    </div>
    </Col>
    </Row>
    </div>
    {/* hr */}
    <Row>
    <Col md={1}></Col>
    <Col md={10} >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Lead Man */}
    <div>
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline} mb-0`}>10.30</p>
    </Col>
    <Col md={5} >
    <p className={`${styles.BoldBlack} mb-0`}>Lead Man</p>
    </Col>
    </Row>
    {/* Prep */}
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    </Col>
    <Col md={3} >
    <p className={`${styles.Underline7}`}>Prep</p>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
    py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{lead_man_qty_prep || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{lead_man_uno_prep || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{lead_man_una_prep}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{lead_man_rt_prep || 0}</p>
    </div>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box2} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{leadmanprep_total || 0}</p>
    </div>
    </Col>
    </Row>
    {/* Shoot */}
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}></p>
    </Col>
    <Col md={3} >
    <p className={`${styles.Underline7}`}>Shoot</p>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{lead_man_quantity || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{lead_man_units_number || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{lead_man_units_name}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{lead_man_rate || 0}</p>
    </div>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box2} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{leadman_total || 0}</p>
    </div>
    </Col>
    </Row>
    {/* Wrap */}
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}></p>
    </Col>
    <Col md={3} >
    <p className={`${styles.Underline7}`}>Wrap</p>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{lead_man_qty_wrap || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{lead_man_uno_wrap || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{lead_man_una_wrap}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{lead_man_rt_wrap || 0}</p>
    </div>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box2} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{leadmanwrap_total || 0}</p>
    </div>
    </Col>
    </Row>
    {/* Total */}
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline7}`}></p>
    </Col>
    <Col md={7} > 
    <p className={`${styles.Underline}`}>Total</p>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box4} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{leadmanall_total || 0}</p>
    </div>
    </Col>
    </Row>
    </div>
    {/* hr */}
    <Row>
    <Col md={1}></Col>
    <Col md={10} >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Set Dressers */}
    <div>
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline} mb-0`}>10.40</p>
    </Col>
    <Col md={5} >
    <p className={`${styles.BoldBlack} mb-0`}>Set Dressers</p>
    </Col>
    </Row>
    {/* Prep */}
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    </Col>
    <Col md={3} >
    <p className={`${styles.Underline7}`}>Prep</p>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
    py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{set_dres_qty_prep || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{set_dres_uno_prep || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{set_dres_una_prep}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{set_dres_rt_prep || 0}</p>
    </div>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box2} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{dressprep_total || 0}</p>
    </div>
    </Col>
    </Row>
    {/* Shoot */}
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}></p>
    </Col>
    <Col md={3} >
    <p className={`${styles.Underline7}`}>Shoot</p>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{set_dressers_quantity || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{set_dressers_units_number || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{set_dressers_units_name}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{set_dressers_rate || 0}</p>
    </div>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box2} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{dressers_total || 0}</p>
    </div>
    </Col>
    </Row>
    {/* Wrap */}
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}></p>
    </Col>
    <Col md={3} >
    <p className={`${styles.Underline7}`}>Wrap</p>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{set_dres_qty_wrap || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{set_dres_uno_wrap || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{set_dres_una_wrap}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{set_dres_rt_wrap || 0}</p>
    </div>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box2} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{dresswrap_total || 0}</p>
    </div>
    </Col>
    </Row>
    {/* Total */}
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline7}`}></p>
    </Col>
    <Col md={7} > 
    <p className={`${styles.Underline}`}>Total</p>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box4} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{dressall_total || 0}</p>
    </div>
    </Col>
    </Row>
    </div>
    {/* hr */}
    <Row>
    <Col md={1}></Col>
    <Col md={10} >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Swing Gang  */}
    <div>
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline} mb-0`}>10.50</p>
    </Col>
    <Col md={5} >
    <p className={`${styles.BoldBlack} mb-0`}>Swing Gang</p>
    </Col>
    </Row>
    {/* Prep */}
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    </Col>
    <Col md={3} >
    <p className={`${styles.Underline7}`}>Prep</p>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
    py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{swing_g_qty_prep || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{swing_g_uno_prep || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{swing_g_una_prep}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{swing_g_rt_prep || 0}</p>
    </div>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box2} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{swinggprep_total || 0}</p>
    </div>
    </Col>
    </Row>
    {/* Shoot */}
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}></p>
    </Col>
    <Col md={3} >
    <p className={`${styles.Underline7}`}>Shoot</p>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{swing_gang_quantity || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{swing_gang_units_number || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{swing_gang_units_name}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{swing_gang_rate || 0}</p>
    </div>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box2} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{swinggang_total || 0}</p>
    </div>
    </Col>
    </Row>
    {/* Wrap */}
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}></p>
    </Col>
    <Col md={3} >
    <p className={`${styles.Underline7}`}>Wrap</p>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{swing_g_qty_wrap || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{swing_g_uno_wrap || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{swing_g_una_wrap}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{swing_g_rt_wrap || 0}</p>
    </div>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box2} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{swinggwrap_total || 0}</p>
    </div>
    </Col>
    </Row>
    {/* Total */}
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline7}`}></p>
    </Col>
    <Col md={7} > 
    <p className={`${styles.Underline}`}>Total</p>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box4} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{swinggall_total || 0}</p>
    </div>
    </Col>
    </Row>
    </div>
    {/* hr */}
    <Row>
    <Col md={1}></Col>
    <Col md={10} >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Set Dressing Buyer */}
    <div>
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline} mb-0`}>10.60</p>
    </Col>
    <Col md={5} >
    <p className={`${styles.BoldBlack} mb-0`}>Set Dressing Buyer</p>
    </Col>
    </Row>
    {/* Prep */}
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    </Col>
    <Col md={3} >
    <p className={`${styles.Underline7}`}>Prep</p>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
    py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{set_d_buy_qty_prep || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{set_d_buy_uno_prep || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{set_d_buy_una_prep}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{set_d_buy_rt_prep || 0}</p>
    </div>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box2} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{dressbuyprep_total || 0}</p>
    </div>
    </Col>
    </Row>
    {/* Shoot */}
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}></p>
    </Col>
    <Col md={3} >
    <p className={`${styles.Underline7}`}>Shoot</p>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{set_dressing_buyer_quantity || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{set_dressing_buyer_units_number || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{set_dressing_buyer_units_name}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{set_dressing_buyer_rate || 0}</p>
    </div>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box2} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{dressingbuyer_total || 0}</p>
    </div>
    </Col>
    </Row>
    {/* Wrap */}
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}></p>
    </Col>
    <Col md={3} >
    <p className={`${styles.Underline7}`}>Wrap</p>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{set_d_buy_qty_wrap || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{set_d_buy_uno_wrap || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{set_d_buy_una_wrap}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{set_d_buy_rt_wrap || 0}</p>
    </div>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box2} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{dressbuywrap_total || 0}</p>
    </div>
    </Col>
    </Row>
    {/* Total */}
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline7}`}></p>
    </Col>
    <Col md={7} > 
    <p className={`${styles.Underline}`}>Total</p>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box4} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{dressbuyall_total || 0}</p>
    </div>
    </Col>
    </Row>
    </div>
    {/* hr */}
    <Row>
    <Col md={1}></Col>
    <Col md={10} >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* 6th/7th Days */}
    <Row >
    <Col md={1} ></Col>
    <Col md={1}>
    <p className={`${styles.Underline}`}>10.70</p>
    </Col>
    <Col md={5}>
    <p className={`${styles.BoldBlack}`}>6th/7th Days</p>
    </Col>
    <Col md={1}>
    <div className={`${styles.Box5} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{days6th7th_unit_dres} </p>
    </div>
    </Col>
    <Col md={1}>
    <p className={`${styles.Underline}`}></p>
    </Col>
    <Col md={2}>
    <div className={`${styles.Box3} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{days6th7th_dres || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col md={1}></Col>
    <Col md={10} >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Overtime */}
    <Row >
    <Col md={1} ></Col>
    <Col md={1}>
    <p className={`${styles.Underline}`}>10.80</p>
    </Col>
    <Col md={5}>
    <p className={`${styles.Underline}`}>Overtime</p>
    </Col>
    <Col md={1}>
    <div className={`${styles.Box5} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{overtime_unit_dres} </p>
    </div>
    </Col>
    <Col md={1}>
    <p className={`${styles.Underline}`}></p>
    </Col>
    <Col md={2}>
    <div className={`${styles.Box3} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{overtime_dres || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col md={1}></Col>
    <Col md={10} >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Holidays */}
    <Row >
    <Col md={1} ></Col>
    <Col md={1}>
    <p className={`${styles.Underline}`}>10.90</p>
    </Col>
    <Col md={5}>
    <p className={`${styles.Underline}`}>Holidays</p>
    </Col>
    <Col md={1}>
    <div className={`${styles.Box5} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{holidays_unit_dres} </p>
    </div>
    </Col>
    <Col md={1}>
    <p className={`${styles.Underline}`}></p>
    </Col>
    <Col md={2}>
    <div className={`${styles.Box3} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{holidays_dres || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col md={1}></Col>
    <Col md={10} >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Box Rentals */}
    <Row >
    <Col md={1} ></Col>
    <Col md={1}>
    <p className={`${styles.Underline}`}>10.91</p>
    </Col>
    <Col md={5}>
    <p className={`${styles.Underline}`}>Box Rentals</p>
    </Col>
    <Col md={1}>
    <div className={`${styles.Box5} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{box_rent_unit_dres} </p>
    </div>
    </Col>
    <Col md={1}>
    <p className={`${styles.Underline}`}></p>
    </Col>
    <Col md={2}>
    <div className={`${styles.Box3} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{box_rent_dres || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col md={1}></Col>
    <Col md={10} >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Other */}
    <Row >
    <Col md={1} ></Col>
    <Col md={1}>
    <p className={`${styles.Underline}`}>10.92</p>
    </Col>
    <Col md={7}>
    <p className={`${styles.Underline}`}>Other</p>
    </Col>
    <Col md={2}>
    <div className={`${styles.Box3} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{other_set_dressing || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col md={1}></Col>
    <Col md={10} >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Fringes Taxes */}
    <Row >
    <Col md={1} ></Col>
    <Col md={1}>
    <p className={`${styles.Underline}`}>10.93</p>
    </Col>
    <Col md={7}>
    <p className={`${styles.Underline}`}>Fringes & Taxes</p>
    </Col>
    <Col md={2}>
    <div className={`${styles.Box3} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{fringes_taxes_dressing || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col md={1}></Col>
    <Col md={10} >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* SET DRESSING Total */}
    <Row className='mt-3 mb-1' >
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}></p>
    <p></p>
    </Col>
    <Col className={ `${styles.Overview} my-0 pt-1`} md={6} >
    <p className={ `${styles.Bold} pb-0 mb-0`}>TOTAL SET DRESSING LABOUR</p>
    </Col>
    <Col md={1} >
    </Col>
    <Col md={2} >
    <div className={`${styles.Box4} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline} mb-0`}>{dressinglabour_total || 0}</p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col md={1}></Col>
    <Col md={10} >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    </div>
    {/* PROPERTY LABOUR -------------------------------------- */}
    <div className='mt-4'>
    <Row>
    <Col md={1} ></Col>
    <Col xs={1}>
    <p className={`${styles.BoldBlack}`}>11.00</p>
    </Col>
    <Col xs={8}>
    <p className={ `${styles.BoldBlack}`}>PROPERTY LABOUR</p>
    </Col>
    </Row>
    {/* TITLES */}
    <Row className={ `mb-2 py-0`} >
    <Col md={1} ></Col>
    <Col className={ `${styles.Overview} py-1`} md={1} >
    <p className="mb-0">ACCT</p>
    </Col>
    <Col className={ `${styles.Overview} py-1`} md={3} >
    <p className="mb-0">Description</p>
    </Col>
    <Col className={`${styles.Overview} text-center py-1`} md={1} >
    <p className="mb-0">#</p>
    </Col>
    <Col className={`${styles.Overview} text-center py-1`} md={1} >
    <p># Unit</p>
    </Col>
    <Col md={1} className={`${styles.Overview} text-center py-1`} >
    <p className="mb-0">Unit</p>
    </Col>
    <Col md={1} className={`${styles.Overview} text-center py-1`} >
    <p className="mb-0">Price</p>
    </Col>
    <Col md={2} className={`${styles.Overview} text-center py-1`} >
    <p className="mb-0">Total</p>
    </Col>
    <Col md={1}></Col>
    </Row>
    {/* Property Master */}
    <div>
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline} mb-0`}>11.10</p>
    </Col>
    <Col md={5} >
    <p className={`${styles.BoldBlack} mb-0`}>Property Master</p>
    </Col>
    </Row>
    {/* Prep */}
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    </Col>
    <Col md={3} >
    <p className={`${styles.Underline7}`}>Prep</p>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
    py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{pro_mas_qty_prep || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{pro_mas_uno_prep || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{pro_mas_una_prep}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{pro_mas_rt_prep || 0}</p>
    </div>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box2} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{propmasprep_total || 0}</p>
    </div>
    </Col>
    </Row>
    {/* Shoot */}
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}></p>
    </Col>
    <Col md={3} >
    <p className={`${styles.Underline7}`}>Shoot</p>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{property_master_quantity || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{property_master_units_number || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{property_master_units_name}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{property_master_rate || 0}</p>
    </div>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box2} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{propertymaster_total || 0}</p>
    </div>
    </Col>
    </Row>
    {/* Wrap */}
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}></p>
    </Col>
    <Col md={3} >
    <p className={`${styles.Underline7}`}>Wrap</p>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{pro_mas_qty_wrap || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{pro_mas_uno_wrap || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{pro_mas_una_wrap}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{pro_mas_rt_wrap || 0}</p>
    </div>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box2} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{propmaswrap_total || 0}</p>
    </div>
    </Col>
    </Row>
    {/* Total */}
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline7}`}></p>
    </Col>
    <Col md={7} > 
    <p className={`${styles.Underline}`}>Total</p>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box4} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{propmasall_total || 0}</p>
    </div>
    </Col>
    </Row>
    </div>
    {/* hr */}
    <Row>
    <Col md={1}></Col>
    <Col md={10} >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Assistant Property Master */}
    <div>
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline} mb-0`}>11.20</p>
    </Col>
    <Col md={5} >
    <p className={`${styles.BoldBlack} mb-0`}>Assistant Property Master</p>
    </Col>
    </Row>
    {/* Prep */}
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    </Col>
    <Col md={3} >
    <p className={`${styles.Underline7}`}>Prep</p>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
    py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{as_pro_ma_qty_prep || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{as_pro_ma_uno_prep || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{as_pro_ma_una_prep}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{as_pro_ma_rt_prep || 0}</p>
    </div>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box2} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{aspropmaprep_total || 0}</p>
    </div>
    </Col>
    </Row>
    {/* Shoot */}
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}></p>
    </Col>
    <Col md={3} >
    <p className={`${styles.Underline7}`}>Shoot</p>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{assist_property_master_quantity || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{assist_property_master_units_number || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{assist_property_master_units_name}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{assist_property_master_rate || 0}</p>
    </div>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box2} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{assistpropertymaster_total || 0}</p>
    </div>
    </Col>
    </Row>
    {/* Wrap */}
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}></p>
    </Col>
    <Col md={3} >
    <p className={`${styles.Underline7}`}>Wrap</p>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{as_pro_ma_qty_wrap || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{as_pro_ma_uno_wrap || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{as_pro_ma_una_wrap}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{as_pro_ma_rt_wrap || 0}</p>
    </div>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box2} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{aspropmawrap_total || 0}</p>
    </div>
    </Col>
    </Row>
    {/* Total */}
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline7}`}></p>
    </Col>
    <Col md={7} > 
    <p className={`${styles.Underline}`}>Total</p>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box4} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{aspropmaall_total || 0}</p>
    </div>
    </Col>
    </Row>
    </div>
    {/* hr */}
    <Row>
    <Col md={1}></Col>
    <Col md={10} >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* On Set Props Person */}
    <div>
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline} mb-0`}>11.30</p>
    </Col>
    <Col md={5} >
    <p className={`${styles.BoldBlack} mb-0`}>On Set Props Person</p>
    </Col>
    </Row>
    {/* Prep */}
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    </Col>
    <Col md={3} >
    <p className={`${styles.Underline7}`}>Prep</p>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
    py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{on_set_prop_qty_prep || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{on_set_prop_uno_prep || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{on_set_prop_una_prep}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{on_set_prop_rt_prep || 0}</p>
    </div>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box2} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{onsetpropprep_total || 0}</p>
    </div>
    </Col>
    </Row>
    {/* Shoot */}
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}></p>
    </Col>
    <Col md={3} >
    <p className={`${styles.Underline7}`}>Shoot</p>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{on_set_props_person_quantity || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{on_set_props_person_units_number || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{on_set_props_person_units_name}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{on_set_props_person_rate || 0}</p>
    </div>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box2} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{onsetpropsperson_total || 0}</p>
    </div>
    </Col>
    </Row>
    {/* Wrap */}
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}></p>
    </Col>
    <Col md={3} >
    <p className={`${styles.Underline7}`}>Wrap</p>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{on_set_prop_qty_wrap || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{on_set_prop_uno_wrap || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{on_set_prop_una_wrap}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{on_set_prop_rt_wrap || 0}</p>
    </div>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box2} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{onsetpropwrap_total || 0}</p>
    </div>
    </Col>
    </Row>
    {/* Total */}
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline7}`}></p>
    </Col>
    <Col md={7} > 
    <p className={`${styles.Underline}`}>Total</p>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box4} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{onsetpropall_total || 0}</p>
    </div>
    </Col>
    </Row>
    </div>
    {/* hr */}
    <Row>
    <Col md={1}></Col>
    <Col md={10} >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Property Buyer */}
    <div>
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline} mb-0`}>11.40</p>
    </Col>
    <Col md={5} >
    <p className={`${styles.BoldBlack} mb-0`}>Property Buyer</p>
    </Col>
    </Row>
    {/* Prep */}
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    </Col>
    <Col md={3} >
    <p className={`${styles.Underline7}`}>Prep</p>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
    py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{prop_buy_qty_prep || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{prop_buy_uno_prep || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{prop_buy_una_prep}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{prop_buy_rt_prep || 0}</p>
    </div>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box2} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{propbuyprep_total || 0}</p>
    </div>
    </Col>
    </Row>
    {/* Shoot */}
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}></p>
    </Col>
    <Col md={3} >
    <p className={`${styles.Underline7}`}>Shoot</p>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{property_buyer_quantity || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{property_buyer_units_number || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{property_buyer_units_name}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{property_buyer_rate || 0}</p>
    </div>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box2} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{propertybuyer_total || 0}</p>
    </div>
    </Col>
    </Row>
    {/* Wrap */}
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}></p>
    </Col>
    <Col md={3} >
    <p className={`${styles.Underline7}`}>Wrap</p>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{prop_buy_qty_wrap || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{prop_buy_uno_wrap || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{prop_buy_una_wrap}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{prop_buy_rt_wrap || 0}</p>
    </div>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box2} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{propbuywrap_total || 0}</p>
    </div>
    </Col>
    </Row>
    {/* Total */}
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline7}`}></p>
    </Col>
    <Col md={7} > 
    <p className={`${styles.Underline}`}>Total</p>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box4} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{propbuyall_total || 0}</p>
    </div>
    </Col>
    </Row>
    </div>
    {/* hr */}
    <Row>
    <Col md={1}></Col>
    <Col md={10} >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Armorer */}
    <div>
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline} mb-0`}>11.50</p>
    </Col>
    <Col md={5} >
    <p className={`${styles.BoldBlack} mb-0`}>Armorer</p>
    </Col>
    </Row>
    {/* Prep */}
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    </Col>
    <Col md={3} >
    <p className={`${styles.Underline7}`}>Prep</p>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
    py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{armor_qty_prep || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{armor_uno_prep || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{armor_una_prep}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{armor_rt_prep || 0}</p>
    </div>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box2} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{armorprep_total || 0}</p>
    </div>
    </Col>
    </Row>
    {/* Shoot */}
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}></p>
    </Col>
    <Col md={3} >
    <p className={`${styles.Underline7}`}>Shoot</p>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{armorer_quantity || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{armorer_units_number || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{armorer_units_name}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{armorer_rate || 0}</p>
    </div>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box2} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{armorer_total || 0}</p>
    </div>
    </Col>
    </Row>
    {/* Wrap */}
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}></p>
    </Col>
    <Col md={3} >
    <p className={`${styles.Underline7}`}>Wrap</p>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{armor_qty_wrap || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{armor_uno_wrap || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{armor_una_wrap}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{armor_rt_wrap || 0}</p>
    </div>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box2} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{armorwrap_total || 0}</p>
    </div>
    </Col>
    </Row>
    {/* Total */}
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline7}`}></p>
    </Col>
    <Col md={7} > 
    <p className={`${styles.Underline}`}>Total</p>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box4} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{armorall_total || 0}</p>
    </div>
    </Col>
    </Row>
    </div>
    {/* hr */}
    <Row>
    <Col md={1}></Col>
    <Col md={10} >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* 6th/7th Days */}
    <Row >
    <Col md={1} ></Col>
    <Col md={1}>
    <p className={`${styles.Underline}`}>11.60</p>
    </Col>
    <Col md={5}>
    <p className={`${styles.BoldBlack}`}>6th/7th Days</p>
    </Col>
    <Col md={1}>
    <div className={`${styles.Box5} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{days6th7th_unit_prop} </p>
    </div>
    </Col>
    <Col md={1}>
    <p className={`${styles.Underline}`}></p>
    </Col>
    <Col md={2}>
    <div className={`${styles.Box3} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{days6th7th_prop || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col md={1}></Col>
    <Col md={10} >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Overtime */}
    <Row >
    <Col md={1} ></Col>
    <Col md={1}>
    <p className={`${styles.Underline}`}>11.70</p>
    </Col>
    <Col md={5}>
    <p className={`${styles.Underline}`}>Overtime</p>
    </Col>
    <Col md={1}>
    <div className={`${styles.Box5} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{overtime_unit_prop} </p>
    </div>
    </Col>
    <Col md={1}>
    <p className={`${styles.Underline}`}></p>
    </Col>
    <Col md={2}>
    <div className={`${styles.Box3} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{overtime_prop || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col md={1}></Col>
    <Col md={10} >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Holidays */}
    <Row >
    <Col md={1} ></Col>
    <Col md={1}>
    <p className={`${styles.Underline}`}>11.80</p>
    </Col>
    <Col md={5}>
    <p className={`${styles.Underline}`}>Holidays</p>
    </Col>
    <Col md={1}>
    <div className={`${styles.Box5} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{holidays_unit_prop} </p>
    </div>
    </Col>
    <Col md={1}>
    <p className={`${styles.Underline}`}></p>
    </Col>
    <Col md={2}>
    <div className={`${styles.Box3} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{holidays_prop || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col md={1}></Col>
    <Col md={10} >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Box Rentals */}
    <Row >
    <Col md={1} ></Col>
    <Col md={1}>
    <p className={`${styles.Underline}`}>11.90</p>
    </Col>
    <Col md={5}>
    <p className={`${styles.Underline}`}>Box Rentals</p>
    </Col>
    <Col md={1}>
    <div className={`${styles.Box5} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{box_rent_unit_prop} </p>
    </div>
    </Col>
    <Col md={1}>
    <p className={`${styles.Underline}`}></p>
    </Col>
    <Col md={2}>
    <div className={`${styles.Box3} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{box_rent_prop || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col md={1}></Col>
    <Col md={10} >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Other */}
    <Row >
    <Col md={1} ></Col>
    <Col md={1}>
    <p className={`${styles.Underline}`}>11.91</p>
    </Col>
    <Col md={7}>
    <p className={`${styles.Underline}`}>Other</p>
    </Col>
    <Col md={2}>
    <div className={`${styles.Box3} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{other_property || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col md={1}></Col>
    <Col md={10} >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Fringes Taxes */}
    <Row >
    <Col md={1} ></Col>
    <Col md={1}>
    <p className={`${styles.Underline}`}>11.92</p>
    </Col>
    <Col md={7}>
    <p className={`${styles.Underline}`}>Fringes & Taxes</p>
    </Col>
    <Col md={2}>
    <div className={`${styles.Box3} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{fringes_taxes_property || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col md={1}></Col>
    <Col md={10} >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Property Total */}
    <Row className='mt-3 mb-1' >
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}></p>
    <p></p>
    </Col>
    <Col className={ `${styles.Overview} my-0 pt-1`} md={6} >
    <p className={ `${styles.Bold} pb-0 mb-0`}>TOTAL PROPERTY LABOUR</p>
    </Col>
    <Col md={1} >
    </Col>
    <Col md={2} >
    <div className={`${styles.Box4} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline} mb-0`}>{propertylabour_total || 0}</p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col md={1}></Col>
    <Col md={10} >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    </div>
    {/* WRANGLING LABOUR ------------------------------------- */}
    <div className='mt-4'>
    <Row>
    <Col md={1} ></Col>
    <Col xs={1}>
    <p className={`${styles.BoldBlack}`}>12.00</p>
    </Col>
    <Col xs={8}>
    <p className={ `${styles.BoldBlack}`}>WRANGLING LABOUR</p>
    </Col>
    </Row>
    {/* TITLES */}
    <Row className={ `mb-2 py-0`} >
    <Col md={1} ></Col>
    <Col className={ `${styles.Overview} py-1`} md={1} >
    <p className="mb-0">ACCT</p>
    </Col>
    <Col className={ `${styles.Overview} py-1`} md={3} >
    <p className="mb-0">Description</p>
    </Col>
    <Col className={`${styles.Overview} text-center py-1`} md={1} >
    <p className="mb-0">#</p>
    </Col>
    <Col className={`${styles.Overview} text-center py-1`} md={1} >
    <p># Unit</p>
    </Col>
    <Col md={1} className={`${styles.Overview} text-center py-1`} >
    <p className="mb-0">Unit</p>
    </Col>
    <Col md={1} className={`${styles.Overview} text-center py-1`} >
    <p className="mb-0">Price</p>
    </Col>
    <Col md={2} className={`${styles.Overview} text-center py-1`} >
    <p className="mb-0">Total</p>
    </Col>
    <Col md={1}></Col>
    </Row>
    {/* Head Wrangler */}
    <div>
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline} mb-0`}>12.10</p>
    </Col>
    <Col md={5} >
    <p className={`${styles.BoldBlack} mb-0`}>Head Wrangler</p>
    </Col>
    </Row>
    {/* Prep */}
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    </Col>
    <Col md={3} >
    <p className={`${styles.Underline7}`}>Prep</p>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
    py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{he_wran_qty_prep || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{he_wran_uno_prep || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{he_wran_una_prep}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{he_wran_rt_prep || 0}</p>
    </div>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box2} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{hewranprep_total || 0}</p>
    </div>
    </Col>
    </Row>
    {/* Shoot */}
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}></p>
    </Col>
    <Col md={3} >
    <p className={`${styles.Underline7}`}>Shoot</p>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{head_wrangler_quantity || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{head_wrangler_units_number || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{head_wrangler_units_name}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{head_wrangler_rate || 0}</p>
    </div>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box2} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{headwrangler_total || 0}</p>
    </div>
    </Col>
    </Row>
    {/* Wrap */}
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}></p>
    </Col>
    <Col md={3} >
    <p className={`${styles.Underline7}`}>Wrap</p>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{he_wran_qty_wrap || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{he_wran_uno_wrap || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{he_wran_una_wrap}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{he_wran_rt_wrap || 0}</p>
    </div>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box2} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{hewranwrap_total || 0}</p>
    </div>
    </Col>
    </Row>
    {/* Total */}
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline7}`}></p>
    </Col>
    <Col md={7} > 
    <p className={`${styles.Underline}`}>Total</p>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box4} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{hewranall_total || 0}</p>
    </div>
    </Col>
    </Row>
    </div>
    {/* hr */}
    <Row>
    <Col md={1}></Col>
    <Col md={10} >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Wranglers */}
    <div>
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline} mb-0`}>12.20</p>
    </Col>
    <Col md={5} >
    <p className={`${styles.BoldBlack} mb-0`}>Wranglers</p>
    </Col>
    </Row>
    {/* Prep */}
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    </Col>
    <Col md={3} >
    <p className={`${styles.Underline7}`}>Prep</p>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
    py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{oth_wran_qty_prep || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{oth_wran_uno_prep || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{oth_wran_una_prep}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{oth_wran_rt_prep || 0}</p>
    </div>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box2} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{othwranlabprep_total || 0}</p>
    </div>
    </Col>
    </Row>
    {/* Shoot */}
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}></p>
    </Col>
    <Col md={3} >
    <p className={`${styles.Underline7}`}>Shoot</p>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{other_wrangling_labour_quantity || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{other_wrangling_labour_units_number || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{other_wrangling_labour_units_name}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{other_wrangling_labour_rate || 0}</p>
    </div>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box2} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{otherwranglinglabour_total || 0}</p>
    </div>
    </Col>
    </Row>
    {/* Wrap */}
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}></p>
    </Col>
    <Col md={3} >
    <p className={`${styles.Underline7}`}>Wrap</p>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{oth_wran_qty_wrap || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{oth_wran_uno_wrap || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{oth_wran_una_wrap}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{oth_wran_rt_wrap || 0}</p>
    </div>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box2} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{othwranlabwrap_total || 0}</p>
    </div>
    </Col>
    </Row>
    {/* Total */}
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline7}`}></p>
    </Col>
    <Col md={7} > 
    <p className={`${styles.Underline}`}>Total</p>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box4} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{othwranlaball_total || 0}</p>
    </div>
    </Col>
    </Row>
    </div>
    {/* hr */}
    <Row>
    <Col md={1}></Col>
    <Col md={10} >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Other - Add'l Trainers/Handlers/Dailies */}
    <Row >
    <Col md={1} ></Col>
    <Col md={1}>
    <p className={`${styles.Underline}`}>12.30</p>
    </Col>
    <Col md={7}>
    <p className={`${styles.Underline}`}>Other - Add'l Trainers/Handlers/Dailies</p>
    </Col>
    <Col md={2}>
    <div className={`${styles.Box3} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{other_solo_wran || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col md={1}></Col>
    <Col md={10} >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* 6th/7th Days */}
    <Row >
    <Col md={1} ></Col>
    <Col md={1}>
    <p className={`${styles.Underline}`}>12.40</p>
    </Col>
    <Col md={5}>
    <p className={`${styles.BoldBlack}`}>6th/7th Days</p>
    </Col>
    <Col md={1}>
    <div className={`${styles.Box5} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{days6th7th_unit_wran} </p>
    </div>
    </Col>
    <Col md={1}>
    <p className={`${styles.Underline}`}></p>
    </Col>
    <Col md={2}>
    <div className={`${styles.Box3} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{days6th7th_wran || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col md={1}></Col>
    <Col md={10} >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Overtime */}
    <Row >
    <Col md={1} ></Col>
    <Col md={1}>
    <p className={`${styles.Underline}`}>12.50</p>
    </Col>
    <Col md={5}>
    <p className={`${styles.Underline}`}>Overtime</p>
    </Col>
    <Col md={1}>
    <div className={`${styles.Box5} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{overtime_unit_wran} </p>
    </div>
    </Col>
    <Col md={1}>
    <p className={`${styles.Underline}`}></p>
    </Col>
    <Col md={2}>
    <div className={`${styles.Box3} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{overtime_wran || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col md={1}></Col>
    <Col md={10} >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Holidays */}
    <Row >
    <Col md={1} ></Col>
    <Col md={1}>
    <p className={`${styles.Underline}`}>12.60</p>
    </Col>
    <Col md={5}>
    <p className={`${styles.Underline}`}>Holidays</p>
    </Col>
    <Col md={1}>
    <div className={`${styles.Box5} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{holidays_unit_wran} </p>
    </div>
    </Col>
    <Col md={1}>
    <p className={`${styles.Underline}`}></p>
    </Col>
    <Col md={2}>
    <div className={`${styles.Box3} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{holidays_wran || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col md={1}></Col>
    <Col md={10} >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Box Rentals */}
    <Row >
    <Col md={1} ></Col>
    <Col md={1}>
    <p className={`${styles.Underline}`}>12.70</p>
    </Col>
    <Col md={5}>
    <p className={`${styles.Underline}`}>Box Rentals</p>
    </Col>
    <Col md={1}>
    <div className={`${styles.Box5} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{box_rent_unit_wran} </p>
    </div>
    </Col>
    <Col md={1}>
    <p className={`${styles.Underline}`}></p>
    </Col>
    <Col md={2}>
    <div className={`${styles.Box3} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{box_rent_wran || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col md={1}></Col>
    <Col md={10} >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Fringes Taxes */}
    <Row >
    <Col md={1} ></Col>
    <Col md={1}>
    <p className={`${styles.Underline}`}>12.80</p>
    </Col>
    <Col md={7}>
    <p className={`${styles.Underline}`}>Fringes & Taxes</p>
    </Col>
    <Col md={2}>
    <div className={`${styles.Box3} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{fringes_taxes_wrangling || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col md={1}></Col>
    <Col md={10} >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Wrangling Total */}
    <Row className='mt-3 mb-1' >
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}></p>
    <p></p>
    </Col>
    <Col className={ `${styles.Overview} my-0 pt-1`} md={6} >
    <p className={ `${styles.Bold} pb-0 mb-0`}>TOTAL WRANGLING LABOUR</p>
    </Col>
    <Col md={1} >
    </Col>
    <Col md={2} >
    <div className={`${styles.Box4} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline} mb-0`}>{wranglerlabour_total || 0}</p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col md={1}></Col>
    <Col md={10} >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    </div>
    {/* FX LABOUR -------------------------------------------- */}
    <div className='mt-4'>
    <Row>
    <Col md={1} ></Col>
    <Col xs={1}>
    <p className={`${styles.BoldBlack}`}>13.00</p>
    </Col>
    <Col xs={8}>
    <p className={ `${styles.BoldBlack}`}>SFX LABOUR</p>
    </Col>
    </Row>
    {/* TITLES */}
    <Row className={ `mb-2 py-0`} >
    <Col md={1} ></Col>
    <Col className={ `${styles.Overview} py-1`} md={1} >
    <p className="mb-0">ACCT</p>
    </Col>
    <Col className={ `${styles.Overview} py-1`} md={3} >
    <p className="mb-0">Description</p>
    </Col>
    <Col className={`${styles.Overview} text-center py-1`} md={1} >
    <p className="mb-0">#</p>
    </Col>
    <Col className={`${styles.Overview} text-center py-1`} md={1} >
    <p># Unit</p>
    </Col>
    <Col md={1} className={`${styles.Overview} text-center py-1`} >
    <p className="mb-0">Unit</p>
    </Col>
    <Col md={1} className={`${styles.Overview} text-center py-1`} >
    <p className="mb-0">Price</p>
    </Col>
    <Col md={2} className={`${styles.Overview} text-center py-1`} >
    <p className="mb-0">Total</p>
    </Col>
    <Col md={1}></Col>
    </Row>
    {/* FX Supervisor */}
    <div>
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline} mb-0`}>13.10</p>
    </Col>
    <Col md={5} >
    <p className={`${styles.BoldBlack} mb-0`}>FX Supervisor</p>
    </Col>
    </Row>
    {/* Prep */}
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    </Col>
    <Col md={3} >
    <p className={`${styles.Underline7}`}>Prep</p>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
    py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{fx_sup_qty_prep || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{fx_sup_uno_prep || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{fx_sup_una_prep}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{fx_sup_rt_prep || 0}</p>
    </div>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box2} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{fxsupprep_total || 0}</p>
    </div>
    </Col>
    </Row>
    {/* Shoot */}
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}></p>
    </Col>
    <Col md={3} >
    <p className={`${styles.Underline7}`}>Shoot</p>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{fx_supervisor_quantity || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{fx_supervisor_units_number || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{fx_supervisor_units_name}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{fx_supervisor_rate || 0}</p>
    </div>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box2} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{fxsupervisor_total || 0}</p>
    </div>
    </Col>
    </Row>
    {/* Wrap */}
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}></p>
    </Col>
    <Col md={3} >
    <p className={`${styles.Underline7}`}>Wrap</p>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{fx_sup_qty_wrap || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{fx_sup_uno_wrap || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{fx_sup_una_wrap}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{fx_sup_rt_wrap || 0}</p>
    </div>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box2} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{fxsupwrap_total || 0}</p>
    </div>
    </Col>
    </Row>
    {/* Total */}
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline7}`}></p>
    </Col>
    <Col md={7} > 
    <p className={`${styles.Underline}`}>Total</p>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box4} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{fxsupall_total || 0}</p>
    </div>
    </Col>
    </Row>
    </div>
    {/* hr */}
    <Row>
    <Col md={1}></Col>
    <Col md={10} >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* FX Assistant */}
    <div>
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline} mb-0`}>13.20</p>
    </Col>
    <Col md={5} >
    <p className={`${styles.BoldBlack} mb-0`}>FX Assistant</p>
    </Col>
    </Row>
    {/* Prep */}
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    </Col>
    <Col md={3} >
    <p className={`${styles.Underline7}`}>Prep</p>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
    py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{ass_fx_qty_prep || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{ass_fx_uno_prep || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{ass_fx_una_prep}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{ass_fx_rt_prep || 0}</p>
    </div>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box2} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{assfxprep_total || 0}</p>
    </div>
    </Col>
    </Row>
    {/* Shoot */}
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}></p>
    </Col>
    <Col md={3} >
    <p className={`${styles.Underline7}`}>Shoot</p>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{assist_fx_quantity || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{assist_fx_units_number || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{assist_fx_units_name}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{assist_fx_rate || 0}</p>
    </div>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box2} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{assistfx_total || 0}</p>
    </div>
    </Col>
    </Row>
    {/* Wrap */}
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}></p>
    </Col>
    <Col md={3} >
    <p className={`${styles.Underline7}`}>Wrap</p>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{ass_fx_qty_wrap || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{ass_fx_uno_wrap || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{ass_fx_una_wrap}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{ass_fx_rt_wrap || 0}</p>
    </div>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box2} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{assfxwrap_total || 0}</p>
    </div>
    </Col>
    </Row>
    {/* Total */}
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline7}`}></p>
    </Col>
    <Col md={7} > 
    <p className={`${styles.Underline}`}>Total</p>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box4} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{assfxall_total || 0}</p>
    </div>
    </Col>
    </Row>
    </div>
    {/* hr */}
    <Row>
    <Col md={1}></Col>
    <Col md={10} >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Add'l FX Labour */}
    <div>
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline} mb-0`}>13.30</p>
    </Col>
    <Col md={5} >
    <p className={`${styles.BoldBlack} mb-0`}>Add'l FX Labour</p>
    </Col>
    </Row>
    {/* Prep */}
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    </Col>
    <Col md={3} >
    <p className={`${styles.Underline7}`}>Prep</p>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
    py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{ot_fx_l_qty_prep || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{ot_fx_l_uno_prep || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{ot_fx_l_una_prep}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{ot_fx_l_rt_prep || 0}</p>
    </div>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box2} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{othfxlabprep_total || 0}</p>
    </div>
    </Col>
    </Row>
    {/* Shoot */}
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}></p>
    </Col>
    <Col md={3} >
    <p className={`${styles.Underline7}`}>Shoot</p>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{other_fx_labour_quantity || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{other_fx_labour_units_number || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{other_fx_labour_units_name}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{other_fx_labour_rate || 0}</p>
    </div>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box2} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{otherfxlabour_total || 0}</p>
    </div>
    </Col>
    </Row>
    {/* Wrap */}
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}></p>
    </Col>
    <Col md={3} >
    <p className={`${styles.Underline7}`}>Wrap</p>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{ot_fx_l_qty_wrap || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{ot_fx_l_uno_wrap || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{ot_fx_l_una_wrap}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{ot_fx_l_rt_wrap || 0}</p>
    </div>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box2} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{othfxlabwrap_total || 0}</p>
    </div>
    </Col>
    </Row>
    {/* Total */}
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline7}`}></p>
    </Col>
    <Col md={7} > 
    <p className={`${styles.Underline}`}>Total</p>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box4} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{othfxlaball_total || 0}</p>
    </div>
    </Col>
    </Row>
    </div>
    {/* hr */}
    <Row>
    <Col md={1}></Col>
    <Col md={10} >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* 6th/7th Days */}
    <Row >
    <Col md={1} ></Col>
    <Col md={1}>
    <p className={`${styles.Underline}`}>13.40</p>
    </Col>
    <Col md={5}>
    <p className={`${styles.BoldBlack}`}>6th/7th Days</p>
    </Col>
    <Col md={1}>
    <div className={`${styles.Box5} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{days6th7th_unit_fx} </p>
    </div>
    </Col>
    <Col md={1}>
    <p className={`${styles.Underline}`}></p>
    </Col>
    <Col md={2}>
    <div className={`${styles.Box3} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{days6th7th_fx || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col md={1}></Col>
    <Col md={10} >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Overtime */}
    <Row >
    <Col md={1} ></Col>
    <Col md={1}>
    <p className={`${styles.Underline}`}>13.50</p>
    </Col>
    <Col md={5}>
    <p className={`${styles.Underline}`}>Overtime</p>
    </Col>
    <Col md={1}>
    <div className={`${styles.Box5} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{overtime_unit_fx} </p>
    </div>
    </Col>
    <Col md={1}>
    <p className={`${styles.Underline}`}></p>
    </Col>
    <Col md={2}>
    <div className={`${styles.Box3} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{overtime_fx || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col md={1}></Col>
    <Col md={10} >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Holidays */}
    <Row >
    <Col md={1} ></Col>
    <Col md={1}>
    <p className={`${styles.Underline}`}>13.60</p>
    </Col>
    <Col md={5}>
    <p className={`${styles.Underline}`}>Holidays</p>
    </Col>
    <Col md={1}>
    <div className={`${styles.Box5} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{holidays_unit_fx} </p>
    </div>
    </Col>
    <Col md={1}>
    <p className={`${styles.Underline}`}></p>
    </Col>
    <Col md={2}>
    <div className={`${styles.Box3} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{holidays_fx || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col md={1}></Col>
    <Col md={10} >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Box Rentals */}
    <Row >
    <Col md={1} ></Col>
    <Col md={1}>
    <p className={`${styles.Underline}`}>13.70</p>
    </Col>
    <Col md={5}>
    <p className={`${styles.Underline}`}>Box Rentals</p>
    </Col>
    <Col md={1}>
    <div className={`${styles.Box5} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{box_rent_unit_fx} </p>
    </div>
    </Col>
    <Col md={1}>
    <p className={`${styles.Underline}`}></p>
    </Col>
    <Col md={2}>
    <div className={`${styles.Box3} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{box_rent_fx || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col md={1}></Col>
    <Col md={10} >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Other */}
    <Row >
    <Col md={1} ></Col>
    <Col md={1}>
    <p className={`${styles.Underline}`}>13.80</p>
    </Col>
    <Col md={7}>
    <p className={`${styles.Underline}`}>Other</p>
    </Col>
    <Col md={2}>
    <div className={`${styles.Box3} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{other_solo_fx || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col md={1}></Col>
    <Col md={10} >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Fringes Taxes */}
    <Row >
    <Col md={1} ></Col>
    <Col md={1}>
    <p className={`${styles.Underline}`}>13.90</p>
    </Col>
    <Col md={7}>
    <p className={`${styles.Underline}`}>Fringes & Taxes</p>
    </Col>
    <Col md={2}>
    <div className={`${styles.Box3} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{fringes_taxes_fx || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col md={1}></Col>
    <Col md={10} >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* FX Total */}
    <Row className='mt-3 mb-1' >
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}></p>
    <p></p>
    </Col>
    <Col className={ `${styles.Overview} my-0 pt-1`} md={6} >
    <p className={ `${styles.Bold} pb-0 mb-0`}>TOTAL FX LABOUR</p>
    </Col>
    <Col md={1} >
    </Col>
    <Col md={2} >
    <div className={`${styles.Box4} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline} mb-0`}>{fxlabour_total || 0}</p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col md={1}></Col>
    <Col md={10} >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    </div>
    {/* WARDROBE LABOUR -------------------------------------- */}
    <div className='mt-4'>
    <Row>
    <Col md={1} ></Col>
    <Col xs={1}>
    <p className={`${styles.BoldBlack}`}>14.00</p>
    </Col>
    <Col xs={8}>
    <p className={ `${styles.BoldBlack}`}>WARDROBE LABOUR</p>
    </Col>
    </Row>
    {/* TITLES */}
    <Row className={ `mb-2 py-0`} >
    <Col md={1} ></Col>
    <Col className={ `${styles.Overview} py-1`} md={1} >
    <p className="mb-0">ACCT</p>
    </Col>
    <Col className={ `${styles.Overview} py-1`} md={3} >
    <p className="mb-0">Description</p>
    </Col>
    <Col className={`${styles.Overview} text-center py-1`} md={1} >
    <p className="mb-0">#</p>
    </Col>
    <Col className={`${styles.Overview} text-center py-1`} md={1} >
    <p># Unit</p>
    </Col>
    <Col md={1} className={`${styles.Overview} text-center py-1`} >
    <p className="mb-0">Unit</p>
    </Col>
    <Col md={1} className={`${styles.Overview} text-center py-1`} >
    <p className="mb-0">Price</p>
    </Col>
    <Col md={2} className={`${styles.Overview} text-center py-1`} >
    <p className="mb-0">Total</p>
    </Col>
    <Col md={1}></Col>
    </Row>
    {/* Costume Designer */}
    <div>
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline} mb-0`}>14.10</p>
    </Col>
    <Col md={5} >
    <p className={`${styles.BoldBlack} mb-0`}>Costume Designer</p>
    </Col>
    </Row>
    {/* Prep */}
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    </Col>
    <Col md={3} >
    <p className={`${styles.Underline7}`}>Prep</p>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
    py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{cos_des_qty_prep || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{cos_des_uno_prep || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{cos_des_una_prep}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{cos_des_rt_prep || 0}</p>
    </div>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box2} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{cosdesprep_total || 0}</p>
    </div>
    </Col>
    </Row>
    {/* Shoot */}
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}></p>
    </Col>
    <Col md={3} >
    <p className={`${styles.Underline7}`}>Shoot</p>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{costume_designer_quantity || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{costume_designer_units_number || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{costume_designer_units_name}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{costume_designer_rate || 0}</p>
    </div>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box2} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{costumedesigner_total || 0}</p>
    </div>
    </Col>
    </Row>
    {/* Wrap */}
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}></p>
    </Col>
    <Col md={3} >
    <p className={`${styles.Underline7}`}>Wrap</p>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{cos_des_qty_wrap || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{cos_des_uno_wrap || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{cos_des_una_wrap}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{cos_des_rt_wrap || 0}</p>
    </div>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box2} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{cosdeswrap_total || 0}</p>
    </div>
    </Col>
    </Row>
    {/* Total */}
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline7}`}></p>
    </Col>
    <Col md={7} > 
    <p className={`${styles.Underline}`}>Total</p>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box4} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{cosdesall_total || 0}</p>
    </div>
    </Col>
    </Row>
    </div>
    {/* hr */}
    <Row>
    <Col md={1}></Col>
    <Col md={10} >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Assistant Costume Designer */}
    <div>
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline} mb-0`}>14.20</p>
    </Col>
    <Col md={5} >
    <p className={`${styles.BoldBlack} mb-0`}>Assistant Costume Designer</p>
    </Col>
    </Row>
    {/* Prep */}
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    </Col>
    <Col md={3} >
    <p className={`${styles.Underline7}`}>Prep</p>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
    py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{as_cos_des_qty_prep || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{as_cos_des_uno_prep || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{as_cos_des_una_prep}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{as_cos_des_rt_prep || 0}</p>
    </div>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box2} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{ascosdesprep_total || 0}</p>
    </div>
    </Col>
    </Row>
    {/* Shoot */}
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}></p>
    </Col>
    <Col md={3} >
    <p className={`${styles.Underline7}`}>Shoot</p>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{assist_costume_designer_quantity || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{assist_costume_designer_units_number || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{assist_costume_designer_units_name}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{assist_costume_designer_rate || 0}</p>
    </div>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box2} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{assistcosdesigner_total || 0}</p>
    </div>
    </Col>
    </Row>
    {/* Wrap */}
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}></p>
    </Col>
    <Col md={3} >
    <p className={`${styles.Underline7}`}>Wrap</p>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{as_cos_des_qty_wrap || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{as_cos_des_uno_wrap || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{as_cos_des_una_wrap}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{as_cos_des_rt_wrap || 0}</p>
    </div>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box2} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{ascosdeswrap_total || 0}</p>
    </div>
    </Col>
    </Row>
    {/* Total */}
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline7}`}></p>
    </Col>
    <Col md={7} > 
    <p className={`${styles.Underline}`}>Total</p>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box4} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{ascosdesall_total || 0}</p>
    </div>
    </Col>
    </Row>
    </div>
    {/* hr */}
    <Row>
    <Col md={1}></Col>
    <Col md={10} >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Wardrobe Supervisor - using headwardrobe as variable */}
    <div>
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline} mb-0`}>14.30</p>
    </Col>
    <Col md={5} >
    <p className={`${styles.BoldBlack} mb-0`}>Wardrobe Supervisor</p>
    </Col>
    </Row>
    {/* Prep */}
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    </Col>
    <Col md={3} >
    <p className={`${styles.Underline7}`}>Prep</p>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
    py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{he_war_qty_prep || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{he_war_uno_prep || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{he_war_una_prep}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{he_war_rt_prep || 0}</p>
    </div>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box2} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{hewarprepTotal || 0}</p>
    </div>
    </Col>
    </Row>
    {/* Shoot */}
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}></p>
    </Col>
    <Col md={3} >
    <p className={`${styles.Underline7}`}>Shoot</p>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{head_wardrobe_quantity || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{head_wardrobe_units_number || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{head_wardrobe_units_name}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{head_wardrobe_rate || 0}</p>
    </div>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box2} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{headwardrobe_total || 0}</p>
    </div>
    </Col>
    </Row>
    {/* Wrap */}
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}></p>
    </Col>
    <Col md={3} >
    <p className={`${styles.Underline7}`}>Wrap</p>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{he_war_qty_wrap || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{he_war_uno_wrap || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{he_war_una_wrap}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{he_war_rt_wrap || 0}</p>
    </div>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box2} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{hewarwrap_total || 0}</p>
    </div>
    </Col>
    </Row>
    {/* Total */}
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline7}`}></p>
    </Col>
    <Col md={7} > 
    <p className={`${styles.Underline}`}>Total</p>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box4} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{hewarall_total || 0}</p>
    </div>
    </Col>
    </Row>
    </div>
    {/* hr */}
    <Row>
    <Col md={1}></Col>
    <Col md={10} >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Set Costumer - using Other Wardrobe Labour as variable */}
    <div>
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline} mb-0`}>14.40</p>
    </Col>
    <Col md={5} >
    <p className={`${styles.BoldBlack} mb-0`}>Set Costumer</p>
    </Col>
    </Row>
    {/* Prep */}
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    </Col>
    <Col md={3} >
    <p className={`${styles.Underline7}`}>Prep</p>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
    py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{ot_war_qty_prep || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{ot_war_uno_prep || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{ot_war_una_prep}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{ot_war_rt_prep || 0}</p>
    </div>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box2} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{othwarprep_total || 0}</p>
    </div>
    </Col>
    </Row>
    {/* Shoot */}
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}></p>
    </Col>
    <Col md={3} >
    <p className={`${styles.Underline7}`}>Shoot</p>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{other_wardrobe_labour_quantity || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{other_wardrobe_labour_units_number || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{other_wardrobe_labour_units_name}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{other_wardrobe_labour_rate || 0}</p>
    </div>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box2} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{otherwardrobe_total || 0}</p>
    </div>
    </Col>
    </Row>
    {/* Wrap */}
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}></p>
    </Col>
    <Col md={3} >
    <p className={`${styles.Underline7}`}>Wrap</p>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{ot_war_qty_wrap || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{ot_war_uno_wrap || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{ot_war_una_wrap}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{ot_war_rt_wrap || 0}</p>
    </div>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box2} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{othwarwrap_total || 0}</p>
    </div>
    </Col>
    </Row>
    {/* Total */}
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline7}`}></p>
    </Col>
    <Col md={7} > 
    <p className={`${styles.Underline}`}>Total</p>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box4} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{othwarall_total || 0}</p>
    </div>
    </Col>
    </Row>
    </div>
    {/* hr */}
    <Row>
    <Col md={1}></Col>
    <Col md={10} >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Truck Costumer */}
    <div>
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline} mb-0`}>14.50</p>
    </Col>
    <Col md={5} >
    <p className={`${styles.BoldBlack} mb-0`}>Truck Costumer</p>
    </Col>
    </Row>
    {/* Prep */}
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    </Col>
    <Col md={3} >
    <p className={`${styles.Underline7}`}>Prep</p>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
    py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{tru_cos_qty_prep || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{tru_cos_uno_prep || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{tru_cos_una_prep}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{tru_cos_rt_prep || 0}</p>
    </div>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box2} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{trucosprep_total || 0}</p>
    </div>
    </Col>
    </Row>
    {/* Shoot */}
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}></p>
    </Col>
    <Col md={3} >
    <p className={`${styles.Underline7}`}>Shoot</p>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{truck_costumer_quantity || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{truck_costumer_units_number || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{truck_costumer_units_name}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{truck_costumer_rate || 0}</p>
    </div>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box2} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{truckcostumer_total || 0}</p>
    </div>
    </Col>
    </Row>
    {/* Wrap */}
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}></p>
    </Col>
    <Col md={3} >
    <p className={`${styles.Underline7}`}>Wrap</p>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{tru_cos_qty_wrap || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{tru_cos_uno_wrap || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{tru_cos_una_wrap}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{tru_cos_rt_wrap || 0}</p>
    </div>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box2} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{trucoswrap_total || 0}</p>
    </div>
    </Col>
    </Row>
    {/* Total */}
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline7}`}></p>
    </Col>
    <Col md={7} > 
    <p className={`${styles.Underline}`}>Total</p>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box4} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{trucosall_total || 0}</p>
    </div>
    </Col>
    </Row>
    </div>
    {/* hr */}
    <Row>
    <Col md={1}></Col>
    <Col md={10} >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Shopper */}
    <div>
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline} mb-0`}>14.60</p>
    </Col>
    <Col md={5} >
    <p className={`${styles.BoldBlack} mb-0`}>Shopper</p>
    </Col>
    </Row>
    {/* Prep */}
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    </Col>
    <Col md={3} >
    <p className={`${styles.Underline7}`}>Prep</p>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
    py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{shopper_qty_prep || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{shopper_uno_prep || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{shopper_una_prep}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{shopper_rt_prep || 0}</p>
    </div>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box2} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{shopprep_total || 0}</p>
    </div>
    </Col>
    </Row>
    {/* Shoot */}
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}></p>
    </Col>
    <Col md={3} >
    <p className={`${styles.Underline7}`}>Shoot</p>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{shopper_qty || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{shopper_uno || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{shopper_una}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{shopper_rt || 0}</p>
    </div>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box2} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{shopper_total || 0}</p>
    </div>
    </Col>
    </Row>
    {/* Total */}
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline7}`}></p>
    </Col>
    <Col md={7} > 
    <p className={`${styles.Underline}`}>Total</p>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box4} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{shopall_total || 0}</p>
    </div>
    </Col>
    </Row>
    </div>
    {/* hr */}
    <Row>
    <Col md={1}></Col>
    <Col md={10} >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Wardrobe Assistant/Costume PA */}
    <div>
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline} mb-0`}>14.70</p>
    </Col>
    <Col md={5} >
    <p className={`${styles.BoldBlack} mb-0`}>Wardrobe Assistant/Costume PA</p>
    </Col>
    </Row>
    {/* Prep */}
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    </Col>
    <Col md={3} >
    <p className={`${styles.Underline7}`}>Prep</p>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
    py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{war_as_qty_prep || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{war_as_uno_prep || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{war_as_una_prep}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{war_as_rt_prep || 0}</p>
    </div>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box2} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{warasprep_total || 0}</p>
    </div>
    </Col>
    </Row>
    {/* Shoot */}
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}></p>
    </Col>
    <Col md={3} >
    <p className={`${styles.Underline7}`}>Shoot</p>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{wardrobe_assist_quantity || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{wardrobe_assist_units_number || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{wardrobe_assist_units_name}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{wardrobe_assist_rate || 0}</p>
    </div>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box2} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{wardrobeassist_total || 0}</p>
    </div>
    </Col>
    </Row>
    {/* Wrap */}
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}></p>
    </Col>
    <Col md={3} >
    <p className={`${styles.Underline7}`}>Wrap</p>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{war_as_qty_wrap || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{war_as_uno_wrap || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{war_as_una_wrap}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{war_as_rt_wrap || 0}</p>
    </div>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box2} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{waraswrap_total || 0}</p>
    </div>
    </Col>
    </Row>
    {/* Total */}
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline7}`}></p>
    </Col>
    <Col md={7} > 
    <p className={`${styles.Underline}`}>Total</p>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box4} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{warasall_total || 0}</p>
    </div>
    </Col>
    </Row>
    </div>
    {/* hr */}
    <Row>
    <Col md={1}></Col>
    <Col md={10} >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Wardrobe Coordinator */}
    <div>
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline} mb-0`}>14.80</p>
    </Col>
    <Col md={5} >
    <p className={`${styles.BoldBlack} mb-0`}>Wardrobe Coordinator</p>
    </Col>
    </Row>
    {/* Prep */}
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    </Col>
    <Col md={3} >
    <p className={`${styles.Underline7}`}>Prep</p>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
    py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{war_coor_qty_prep || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{war_coor_uno_prep || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{war_coor_una_prep}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{war_coor_rt_prep || 0}</p>
    </div>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box2} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{warcoprep_total || 0}</p>
    </div>
    </Col>
    </Row>
    {/* Shoot */}
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}></p>
    </Col>
    <Col md={3} >
    <p className={`${styles.Underline7}`}>Shoot</p>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{war_coor_qty || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{war_coor_uno || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{war_coor_una}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{war_coor_rt || 0}</p>
    </div>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box2} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{warcoor_total || 0}</p>
    </div>
    </Col>
    </Row>
    {/* Wrap */}
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}></p>
    </Col>
    <Col md={3} >
    <p className={`${styles.Underline7}`}>Wrap</p>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{war_coor_qty_wrap || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{war_coor_uno_wrap || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{war_coor_una_wrap}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{war_coor_rt_wrap || 0}</p>
    </div>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box2} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{warcowrap_total || 0}</p>
    </div>
    </Col>
    </Row>
    {/* Total */}
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline7}`}></p>
    </Col>
    <Col md={7} > 
    <p className={`${styles.Underline}`}>Total</p>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box4} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{warcoall_total || 0}</p>
    </div>
    </Col>
    </Row>
    </div>
    {/* hr */}
    <Row>
    <Col md={1}></Col>
    <Col md={10} >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Wardrobe Trainee */}
    <div>
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline} mb-0`}>14.90</p>
    </Col>
    <Col md={5} >
    <p className={`${styles.BoldBlack} mb-0`}>Wardrobe Trainee</p>
    </Col>
    </Row>
    {/* Prep */}
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    </Col>
    <Col md={3} >
    <p className={`${styles.Underline7}`}>Prep</p>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
    py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{train_qty_prep || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{train_uno_prep || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{train_una_prep}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{train_rt_prep || 0}</p>
    </div>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box2} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{wartraprep_total || 0}</p>
    </div>
    </Col>
    </Row>
    {/* Shoot */}
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}></p>
    </Col>
    <Col md={3} >
    <p className={`${styles.Underline7}`}>Shoot</p>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{train_qty || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{train_uno || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{train_una}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{train_rt || 0}</p>
    </div>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box2} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{wartrain_total || 0}</p>
    </div>
    </Col>
    </Row>
    {/* Wrap */}
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}></p>
    </Col>
    <Col md={3} >
    <p className={`${styles.Underline7}`}>Wrap</p>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{train_qty_wrap || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{train_uno_wrap || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{train_una_wrap}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{train_rt_wrap || 0}</p>
    </div>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box2} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{wartrawrap_total || 0}</p>
    </div>
    </Col>
    </Row>
    {/* Total */}
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline7}`}></p>
    </Col>
    <Col md={7} > 
    <p className={`${styles.Underline}`}>Total</p>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box4} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{wartraall_total || 0}</p>
    </div>
    </Col>
    </Row>
    </div>
    {/* hr */}
    <Row>
    <Col md={1}></Col>
    <Col md={10} >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Wardrobe Dailies */}
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>14.91</p>
    </Col>
    <Col md={3} >
    <p className={`${styles.Underline}`}>Wardrobe Dailies</p>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box5} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{day_war_qty || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box5} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{day_war_uno || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box5} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{day_war_una}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box5} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{day_war_rt || 0}</p>
    </div>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box3} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{warday_total || 0}</p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col md={1}></Col>
    <Col md={10} >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Tailors, Cutters, Sewers, Drapers */}
    <Row >
    <Col md={1} ></Col>
    <Col md={1}>
    <p className={`${styles.Underline}`}>14.92</p>
    </Col>
    <Col md={7}>
    <p className={`${styles.BoldBlack}`}>Tailors, Cutters, Sewers, Drapers</p>
    </Col>
    <Col md={2}>
    <div className={`${styles.Box3} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{tailors || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col md={1}></Col>
    <Col md={10} >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Textile Artist, Dyer, Breakdown Artist */}
    <Row >
    <Col md={1} ></Col>
    <Col md={1}>
    <p className={`${styles.Underline}`}>14.93</p>
    </Col>
    <Col md={7}>
    <p className={`${styles.BoldBlack}`}>Textile Artist, Dyer, Breakdown Artist</p>
    </Col>
    <Col md={2}>
    <div className={`${styles.Box3} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{textile_ar || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col md={1}></Col>
    <Col md={10} >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* 6th/7th Days */}
    <Row >
    <Col md={1} ></Col>
    <Col md={1}>
    <p className={`${styles.Underline}`}>14.94</p>
    </Col>
    <Col md={5}>
    <p className={`${styles.BoldBlack}`}>6th/7th Days</p>
    </Col>
    <Col md={1}>
    <div className={`${styles.Box5} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{days6th7th_unit_war} </p>
    </div>
    </Col>
    <Col md={1}>
    <p className={`${styles.Underline}`}></p>
    </Col>
    <Col md={2}>
    <div className={`${styles.Box3} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{days6th7th_war || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col md={1}></Col>
    <Col md={10} >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Overtime */}
    <Row >
    <Col md={1} ></Col>
    <Col md={1}>
    <p className={`${styles.Underline}`}>14.95</p>
    </Col>
    <Col md={5}>
    <p className={`${styles.Underline}`}>Overtime</p>
    </Col>
    <Col md={1}>
    <div className={`${styles.Box5} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{overtime_unit_war} </p>
    </div>
    </Col>
    <Col md={1}>
    <p className={`${styles.Underline}`}></p>
    </Col>
    <Col md={2}>
    <div className={`${styles.Box3} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{overtime_war || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col md={1}></Col>
    <Col md={10} >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Holidays */}
    <Row >
    <Col md={1} ></Col>
    <Col md={1}>
    <p className={`${styles.Underline}`}>14.96</p>
    </Col>
    <Col md={5}>
    <p className={`${styles.Underline}`}>Holidays</p>
    </Col>
    <Col md={1}>
    <div className={`${styles.Box5} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{holidays_unit_war} </p>
    </div>
    </Col>
    <Col md={1}>
    <p className={`${styles.Underline}`}></p>
    </Col>
    <Col md={2}>
    <div className={`${styles.Box3} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{holidays_war || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col md={1}></Col>
    <Col md={10} >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Box Rentals */}
    <Row >
    <Col md={1} ></Col>
    <Col md={1}>
    <p className={`${styles.Underline}`}>14.97</p>
    </Col>
    <Col md={5}>
    <p className={`${styles.Underline}`}>Box Rentals</p>
    </Col>
    <Col md={1}>
    <div className={`${styles.Box5} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{box_rent_unit_war} </p>
    </div>
    </Col>
    <Col md={1}>
    <p className={`${styles.Underline}`}></p>
    </Col>
    <Col md={2}>
    <div className={`${styles.Box3} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{box_rent_war || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col md={1}></Col>
    <Col md={10} >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Other */}
    <Row >
    <Col md={1} ></Col>
    <Col md={1}>
    <p className={`${styles.Underline}`}>14.98</p>
    </Col>
    <Col md={7}>
    <p className={`${styles.Underline}`}>Other</p>
    </Col>
    <Col md={2}>
    <div className={`${styles.Box3} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{other_solo_war || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col md={1}></Col>
    <Col md={10} >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Fringes Taxes */}
    <Row >
    <Col md={1} ></Col>
    <Col md={1}>
    <p className={`${styles.Underline}`}>14.99</p>
    </Col>
    <Col md={7}>
    <p className={`${styles.Underline}`}>Fringes & Taxes</p>
    </Col>
    <Col md={2}>
    <div className={`${styles.Box3} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{fringes_taxes_wardrobe || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col md={1}></Col>
    <Col md={10} >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Wardrobe Total */}
    <Row className='mt-3 mb-1' >
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}></p>
    <p></p>
    </Col>
    <Col className={ `${styles.Overview} my-0 pt-1`} md={6} >
    <p className={ `${styles.Bold} pb-0 mb-0`}>TOTAL WARDROBE LABOUR</p>
    </Col>
    <Col md={1} >
    </Col>
    <Col md={2} >
    <div className={`${styles.Box4} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline} mb-0`}>{wardrobelabour_total || 0}</p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col md={1}></Col>
    <Col md={10} >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    </div>
    {/* MAKEUP LABOUR ---------------------------------------- */}
    <div className='mt-4'>
    <Row>
    <Col md={1} ></Col>
    <Col xs={1}>
    <p className={`${styles.BoldBlack}`}>15.00</p>
    </Col>
    <Col xs={8}>
    <p className={ `${styles.BoldBlack}`}>HAIR & MAKEUP LABOUR</p>
    </Col>
    </Row>
    {/* TITLES */}
    <Row className={ `mb-2 py-0`} >
    <Col md={1} ></Col>
    <Col className={ `${styles.Overview} py-1`} md={1} >
    <p className="mb-0">ACCT</p>
    </Col>
    <Col className={ `${styles.Overview} py-1`} md={3} >
    <p className="mb-0">Description</p>
    </Col>
    <Col className={`${styles.Overview} text-center py-1`} md={1} >
    <p className="mb-0">#</p>
    </Col>
    <Col className={`${styles.Overview} text-center py-1`} md={1} >
    <p># Unit</p>
    </Col>
    <Col md={1} className={`${styles.Overview} text-center py-1`} >
    <p className="mb-0">Unit</p>
    </Col>
    <Col md={1} className={`${styles.Overview} text-center py-1`} >
    <p className="mb-0">Price</p>
    </Col>
    <Col md={2} className={`${styles.Overview} text-center py-1`} >
    <p className="mb-0">Total</p>
    </Col>
    <Col md={1}></Col>
    </Row>
    {/* Makeup Department Head */}
    <div>
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline} mb-0`}>15.10</p>
    </Col>
    <Col md={5} >
    <p className={`${styles.BoldBlack} mb-0`}>Makeup Department Head</p>
    </Col>
    </Row>
    {/* Prep */}
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    </Col>
    <Col md={3} >
    <p className={`${styles.Underline7}`}>Prep</p>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
    py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{mak_head_qty_prep || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{mak_head_uno_prep || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{mak_head_una_prep}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{mak_head_rt_prep || 0}</p>
    </div>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box2} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{headmakprep_total || 0}</p>
    </div>
    </Col>
    </Row>
    {/* Shoot */}
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}></p>
    </Col>
    <Col md={3} >
    <p className={`${styles.Underline7}`}>Shoot</p>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{makeup_dept_head_quantity || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{makeup_dept_head_units_number || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{makeup_dept_head_units_name}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{makeup_dept_head_rate || 0}</p>
    </div>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box2} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{headmakeup_total || 0}</p>
    </div>
    </Col>
    </Row>
    {/* Wrap */}
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}></p>
    </Col>
    <Col md={3} >
    <p className={`${styles.Underline7}`}>Wrap</p>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{mak_head_qty_wrap || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{mak_head_uno_wrap || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{mak_head_una_wrap}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{mak_head_rt_wrap || 0}</p>
    </div>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box2} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{headmakwrap_total || 0}</p>
    </div>
    </Col>
    </Row>
    {/* Total */}
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline7}`}></p>
    </Col>
    <Col md={7} > 
    <p className={`${styles.Underline}`}>Total</p>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box4} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{headmakall_total || 0}</p>
    </div>
    </Col>
    </Row>
    </div>
    {/* hr */}
    <Row>
    <Col md={1}></Col>
    <Col md={10} >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Key Makeup */}
    <div>
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline} mb-0`}>15.20</p>
    </Col>
    <Col md={5} >
    <p className={`${styles.BoldBlack} mb-0`}>Key Makeup</p>
    </Col>
    </Row>
    {/* Prep */}
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    </Col>
    <Col md={3} >
    <p className={`${styles.Underline7}`}>Prep</p>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
    py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{key_mak_qty_prep || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{key_mak_uno_prep || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{key_mak_una_prep}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{key_mak_rt_prep || 0}</p>
    </div>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box2} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{keymakprep_total || 0}</p>
    </div>
    </Col>
    </Row>
    {/* Shoot */}
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}></p>
    </Col>
    <Col md={3} >
    <p className={`${styles.Underline7}`}>Shoot</p>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{key_makeup_quantity || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{key_makeup_units_number || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{key_makeup_units_name}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{key_makeup_rate || 0}</p>
    </div>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box2} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{keymakeup_total || 0}</p>
    </div>
    </Col>
    </Row>
    {/* Wrap */}
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}></p>
    </Col>
    <Col md={3} >
    <p className={`${styles.Underline7}`}>Wrap</p>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{key_mak_qty_wrap || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{key_mak_uno_wrap || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{key_mak_una_wrap}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{key_mak_rt_wrap || 0}</p>
    </div>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box2} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{keymakwrap_total || 0}</p>
    </div>
    </Col>
    </Row>
    {/* Total */}
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline7}`}></p>
    </Col>
    <Col md={7} > 
    <p className={`${styles.Underline}`}>Total</p>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box4} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{keymakall_total || 0}</p>
    </div>
    </Col>
    </Row>
    </div>
    {/* hr */}
    <Row>
    <Col md={1}></Col>
    <Col md={10} >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Makeup Artist */}
    <div>
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline} mb-0`}>15.30</p>
    </Col>
    <Col md={5} >
    <p className={`${styles.BoldBlack} mb-0`}>Makeup Artist</p>
    </Col>
    </Row>
    {/* Prep */}
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    </Col>
    <Col md={3} >
    <p className={`${styles.Underline7}`}>Prep</p>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
    py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{mak_art_qty_prep || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{mak_art_uno_prep || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{mak_art_una_prep}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{mak_art_rt_prep || 0}</p>
    </div>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box2} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{makartprep_total || 0}</p>
    </div>
    </Col>
    </Row>
    {/* Shoot */}
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}></p>
    </Col>
    <Col md={3} >
    <p className={`${styles.Underline7}`}>Shoot</p>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{makeup_artist_quantity || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{makeup_artist_units_number || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{makeup_artist_units_name}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{makeup_artist_rate || 0}</p>
    </div>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box2} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{makeupartist_total || 0}</p>
    </div>
    </Col>
    </Row>
    {/* Wrap */}
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}></p>
    </Col>
    <Col md={3} >
    <p className={`${styles.Underline7}`}>Wrap</p>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{mak_art_qty_wrap || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{mak_art_uno_wrap || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{mak_art_una_wrap}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{mak_art_rt_wrap || 0}</p>
    </div>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box2} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{makartwrap_total || 0}</p>
    </div>
    </Col>
    </Row>
    {/* Total */}
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline7}`}></p>
    </Col>
    <Col md={7} > 
    <p className={`${styles.Underline}`}>Total</p>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box4} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{makartall_total || 0}</p>
    </div>
    </Col>
    </Row>
    </div>
    {/* hr */}
    <Row>
    <Col md={1}></Col>
    <Col md={10} >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Key Hairstylist */}
    <div>
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline} mb-0`}>15.40</p>
    </Col>
    <Col md={5} >
    <p className={`${styles.BoldBlack} mb-0`}>Key Hairstylist</p>
    </Col>
    </Row>
    {/* Prep */}
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    </Col>
    <Col md={3} >
    <p className={`${styles.Underline7}`}>Prep</p>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
    py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{key_hair_qty_prep || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{key_hair_uno_prep || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{key_hair_una_prep}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{key_hair_rt_prep || 0}</p>
    </div>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box2} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{keyhairprep_total || 0}</p>
    </div>
    </Col>
    </Row>
    {/* Shoot */}
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}></p>
    </Col>
    <Col md={3} >
    <p className={`${styles.Underline7}`}>Shoot</p>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{key_hairstylist_quantity || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{key_hairstylist_units_number || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{key_hairstylist_units_name}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{key_hairstylist_rate || 0}</p>
    </div>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box2} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{keyhairstylist_total || 0}</p>
    </div>
    </Col>
    </Row>
    {/* Wrap */}
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}></p>
    </Col>
    <Col md={3} >
    <p className={`${styles.Underline7}`}>Wrap</p>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{key_hair_qty_wrap || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{key_hair_uno_wrap || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{key_hair_una_wrap}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{key_hair_rt_wrap || 0}</p>
    </div>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box2} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{keyhairwrap_total || 0}</p>
    </div>
    </Col>
    </Row>
    {/* Total */}
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline7}`}></p>
    </Col>
    <Col md={7} > 
    <p className={`${styles.Underline}`}>Total</p>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box4} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{keyhairall_total || 0}</p>
    </div>
    </Col>
    </Row>
    </div>
    {/* hr */}
    <Row>
    <Col md={1}></Col>
    <Col md={10} >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Hairdresser */}
    <div>
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline} mb-0`}>15.50</p>
    </Col>
    <Col md={5} >
    <p className={`${styles.BoldBlack} mb-0`}>Hairdresser</p>
    </Col>
    </Row>
    {/* Prep */}
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    </Col>
    <Col md={3} >
    <p className={`${styles.Underline7}`}>Prep</p>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
    py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{hair_qty_prep || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{hair_uno_prep || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{hair_una_prep}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{hair_rt_prep || 0}</p>
    </div>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box2} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{hairprep_total || 0}</p>
    </div>
    </Col>
    </Row>
    {/* Shoot */}
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}></p>
    </Col>
    <Col md={3} >
    <p className={`${styles.Underline7}`}>Shoot</p>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{hairdresser_quantity || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{hairdresser_units_number || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{hairdresser_units_name}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{hairdresser_rate || 0}</p>
    </div>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box2} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{hairdresser_total || 0}</p>
    </div>
    </Col>
    </Row>
    {/* Wrap */}
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}></p>
    </Col>
    <Col md={3} >
    <p className={`${styles.Underline7}`}>Wrap</p>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{hair_qty_wrap || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{hair_uno_wrap || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{hair_una_wrap}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{hair_rt_wrap || 0}</p>
    </div>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box2} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{hairwrap_total || 0}</p>
    </div>
    </Col>
    </Row>
    {/* Total */}
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline7}`}></p>
    </Col>
    <Col md={7} > 
    <p className={`${styles.Underline}`}>Total</p>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box4} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{hairall_total || 0}</p>
    </div>
    </Col>
    </Row>
    </div>
    {/* hr */}
    <Row>
    <Col md={1}></Col>
    <Col md={10} >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Hair/Makeup Assistants - using Other makeup labour as var */}
    <div>
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline} mb-0`}>15.60</p>
    </Col>
    <Col md={5} >
    <p className={`${styles.BoldBlack} mb-0`}>Hair/Makeup Assistants</p>
    </Col>
    </Row>
    {/* Prep */}
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    </Col>
    <Col md={3} >
    <p className={`${styles.Underline7}`}>Prep</p>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
    py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{oth_mak_qty_prep || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{oth_mak_uno_prep || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{oth_mak_una_prep}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{oth_mak_rt_prep || 0}</p>
    </div>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box2} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{othmakprep_total || 0}</p>
    </div>
    </Col>
    </Row>
    {/* Shoot */}
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}></p>
    </Col>
    <Col md={3} >
    <p className={`${styles.Underline7}`}>Shoot</p>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{other_makeup_labour_quantity || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{other_makeup_labour_units_number || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{other_makeup_labour_units_name}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{other_makeup_labour_rate || 0}</p>
    </div>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box2} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{othermakeuplabour_total || 0}</p>
    </div>
    </Col>
    </Row>
    {/* Wrap */}
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}></p>
    </Col>
    <Col md={3} >
    <p className={`${styles.Underline7}`}>Wrap</p>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{oth_mak_qty_wrap || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{oth_mak_uno_wrap || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{oth_mak_una_wrap}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{oth_mak_rt_wrap || 0}</p>
    </div>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box2} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{othmakwrap_total || 0}</p>
    </div>
    </Col>
    </Row>
    {/* Total */}
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline7}`}></p>
    </Col>
    <Col md={7} > 
    <p className={`${styles.Underline}`}>Total</p>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box4} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{othmakall_total || 0}</p>
    </div>
    </Col>
    </Row>
    </div>
    {/* hr */}
    <Row>
    <Col md={1}></Col>
    <Col md={10} >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* SFX Makeup Artist */}
    <div>
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline} mb-0`}>15.70</p>
    </Col>
    <Col md={5} >
    <p className={`${styles.BoldBlack} mb-0`}>SFX Makeup Artist</p>
    </Col>
    </Row>
    {/* Prep */}
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    </Col>
    <Col md={3} >
    <p className={`${styles.Underline7}`}>Prep</p>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
    py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{sfx_mak_qty_prep || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{sfx_mak_uno_prep || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{sfx_mak_una_prep}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{sfx_mak_rt_prep || 0}</p>
    </div>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box2} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{sfxmakprep_total || 0}</p>
    </div>
    </Col>
    </Row>
    {/* Shoot */}
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}></p>
    </Col>
    <Col md={3} >
    <p className={`${styles.Underline7}`}>Shoot</p>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{sfx_makeup_quantity || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{sfx_makeup_units_number || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{sfx_makeup_units_name}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{sfx_makeup_rate || 0}</p>
    </div>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box2} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{sfxmakeup_total || 0}</p>
    </div>
    </Col>
    </Row>
    {/* Wrap */}
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}></p>
    </Col>
    <Col md={3} >
    <p className={`${styles.Underline7}`}>Wrap</p>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{sfx_mak_qty_wrap || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{sfx_mak_uno_wrap || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{sfx_mak_una_wrap}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{sfx_mak_rt_wrap || 0}</p>
    </div>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box2} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{sfxmakwrap_total || 0}</p>
    </div>
    </Col>
    </Row>
    {/* Total */}
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline7}`}></p>
    </Col>
    <Col md={7} > 
    <p className={`${styles.Underline}`}>Total</p>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box4} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{sfxmakall_total || 0}</p>
    </div>
    </Col>
    </Row>
    </div>
    {/* hr */}
    <Row>
    <Col md={1}></Col>
    <Col md={10} >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Hair/Makeup Trainee */}
    <div>
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline} mb-0`}>15.80</p>
    </Col>
    <Col md={5} >
    <p className={`${styles.BoldBlack} mb-0`}>Hair/Makeup Trainee</p>
    </Col>
    </Row>
    {/* Prep */}
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    </Col>
    <Col md={3} >
    <p className={`${styles.Underline7}`}>Prep</p>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
    py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{mak_train_qty_prep || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{mak_train_uno_prep || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{mak_train_una_prep}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{mak_train_rt_prep || 0}</p>
    </div>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box2} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{maktraprep_total || 0}</p>
    </div>
    </Col>
    </Row>
    {/* Shoot */}
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}></p>
    </Col>
    <Col md={3} >
    <p className={`${styles.Underline7}`}>Shoot</p>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{mak_train_qty || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{mak_train_uno || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{mak_train_una}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{mak_train_rt || 0}</p>
    </div>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box2} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{maktrain_total || 0}</p>
    </div>
    </Col>
    </Row>
    {/* Wrap */}
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}></p>
    </Col>
    <Col md={3} >
    <p className={`${styles.Underline7}`}>Wrap</p>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{mak_train_qty_wrap || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{mak_train_uno_wrap || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{mak_train_una_wrap}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{mak_train_rt_wrap || 0}</p>
    </div>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box2} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{maktrawrap_total || 0}</p>
    </div>
    </Col>
    </Row>
    {/* Total */}
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline7}`}></p>
    </Col>
    <Col md={7} > 
    <p className={`${styles.Underline}`}>Total</p>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box4} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{maktraall_total || 0}</p>
    </div>
    </Col>
    </Row>
    </div>
    {/* hr */}
    <Row>
    <Col md={1}></Col>
    <Col md={10} >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Hair/Makeup Dailies */}
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>15.90</p>
    </Col>
    <Col md={3} >
    <p className={`${styles.Underline}`}>Hair/Makeup Dailies</p>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box5} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{hair_makeup_dailies_quantity || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box5} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{hair_makeup_dailies_units_number || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box5} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{hair_makeup_dailies_units_name}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box5} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{hair_makeup_dailies_rate || 0}</p>
    </div>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box3} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{hairmakeupdailies_total || 0}</p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col md={1}></Col>
    <Col md={10} >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* 6th/7th Days */}
    <Row >
    <Col md={1} ></Col>
    <Col md={1}>
    <p className={`${styles.Underline}`}>15.91</p>
    </Col>
    <Col md={5}>
    <p className={`${styles.BoldBlack}`}>6th/7th Days</p>
    </Col>
    <Col md={1}>
    <div className={`${styles.Box5} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{days6th7th_unit_mak} </p>
    </div>
    </Col>
    <Col md={1}>
    <p className={`${styles.Underline}`}></p>
    </Col>
    <Col md={2}>
    <div className={`${styles.Box3} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{days6th7th_mak || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col md={1}></Col>
    <Col md={10} >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Overtime */}
    <Row >
    <Col md={1} ></Col>
    <Col md={1}>
    <p className={`${styles.Underline}`}>15.92</p>
    </Col>
    <Col md={5}>
    <p className={`${styles.Underline}`}>Overtime</p>
    </Col>
    <Col md={1}>
    <div className={`${styles.Box5} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{overtime_unit_mak} </p>
    </div>
    </Col>
    <Col md={1}>
    <p className={`${styles.Underline}`}></p>
    </Col>
    <Col md={2}>
    <div className={`${styles.Box3} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{overtime_mak || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col md={1}></Col>
    <Col md={10} >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Holidays */}
    <Row >
    <Col md={1} ></Col>
    <Col md={1}>
    <p className={`${styles.Underline}`}>15.93</p>
    </Col>
    <Col md={5}>
    <p className={`${styles.Underline}`}>Holidays</p>
    </Col>
    <Col md={1}>
    <div className={`${styles.Box5} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{holidays_unit_mak} </p>
    </div>
    </Col>
    <Col md={1}>
    <p className={`${styles.Underline}`}></p>
    </Col>
    <Col md={2}>
    <div className={`${styles.Box3} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{holidays_mak || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col md={1}></Col>
    <Col md={10} >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Box Rentals */}
    <Row >
    <Col md={1} ></Col>
    <Col md={1}>
    <p className={`${styles.Underline}`}>15.94</p>
    </Col>
    <Col md={5}>
    <p className={`${styles.Underline}`}>Box Rentals</p>
    </Col>
    <Col md={1}>
    <div className={`${styles.Box5} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{box_rent_unit_mak} </p>
    </div>
    </Col>
    <Col md={1}>
    <p className={`${styles.Underline}`}></p>
    </Col>
    <Col md={2}>
    <div className={`${styles.Box3} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{box_rent_mak || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col md={1}></Col>
    <Col md={10} >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Other */}
    <Row >
    <Col md={1} ></Col>
    <Col md={1}>
    <p className={`${styles.Underline}`}>15.95</p>
    </Col>
    <Col md={7}>
    <p className={`${styles.Underline}`}>Other</p>
    </Col>
    <Col md={2}>
    <div className={`${styles.Box3} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{other_solo_mak || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col md={1}></Col>
    <Col md={10} >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Fringes Taxes */}
    <Row >
    <Col md={1} ></Col>
    <Col md={1}>
    <p className={`${styles.Underline}`}>15.96</p>
    </Col>
    <Col md={7}>
    <p className={`${styles.Underline}`}>Fringes & Taxes</p>
    </Col>
    <Col md={2}>
    <div className={`${styles.Box3} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{fringes_taxes_makeup || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col md={1}></Col>
    <Col md={10} >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* makeup Total */}
    <Row className='mt-3 mb-1' >
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}></p>
    <p></p>
    </Col>
    <Col className={ `${styles.Overview} my-0 pt-1`} md={6} >
    <p className={ `${styles.Bold} pb-0 mb-0`}>TOTAL MAKEUP LABOUR</p>
    </Col>
    <Col md={1} >
    </Col>
    <Col md={2} >
    <div className={`${styles.Box4} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline} mb-0`}>{makeuplabour_total || 0}</p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col md={1}></Col>
    <Col md={10} >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    </div>
    {/* CAMERA ----------------------------------------------- */}
    <div className='mt-4'>
    <Row>
    <Col md={1} ></Col>
    <Col xs={1}>
    <p className={`${styles.BoldBlack}`}>16.00</p>
    </Col>
    <Col xs={8}>
    <p className={ `${styles.BoldBlack}`}>CAMERA LABOUR</p>
    </Col>
    </Row>
    {/* TITLES */}
    <Row className={ `mb-2 py-0`} >
    <Col md={1} ></Col>
    <Col className={ `${styles.Overview} py-1`} md={1} >
    <p className="mb-0">ACCT</p>
    </Col>
    <Col className={ `${styles.Overview} py-1`} md={3} >
    <p className="mb-0">Description</p>
    </Col>
    <Col className={`${styles.Overview} text-center py-1`} md={1} >
    <p className="mb-0">#</p>
    </Col>
    <Col className={`${styles.Overview} text-center py-1`} md={1} >
    <p># Unit</p>
    </Col>
    <Col md={1} className={`${styles.Overview} text-center py-1`} >
    <p className="mb-0">Unit</p>
    </Col>
    <Col md={1} className={`${styles.Overview} text-center py-1`} >
    <p className="mb-0">Price</p>
    </Col>
    <Col md={2} className={`${styles.Overview} text-center py-1`} >
    <p className="mb-0">Total</p>
    </Col>
    <Col md={1}></Col>
    </Row>
    {/* DOP */}
    <div>
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline} mb-0`}>16.10</p>
    </Col>
    <Col md={5} >
    <p className={`${styles.BoldBlack} mb-0`}>Director of Photography</p>
    </Col>
    </Row>
    {/* Prep */}
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    </Col>
    <Col md={3} >
    <p className={`${styles.Underline7}`}>Prep</p>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
    py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{dop_qty_prep || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{dop_uno_prep || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{dop_una_prep}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{dop_rt_prep || 0}</p>
    </div>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box2} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{dopprep_total || 0}</p>
    </div>
    </Col>
    </Row>
    {/* Shoot */}
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}></p>
    </Col>
    <Col md={3} >
    <p className={`${styles.Underline7}`}>Shoot</p>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{dop_qty || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{dop_uno || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{dop_una}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{dop_rt || 0}</p>
    </div>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box2} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{dop_total || 0}</p>
    </div>
    </Col>
    </Row>
    {/* Wrap */}
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}></p>
    </Col>
    <Col md={3} >
    <p className={`${styles.Underline7}`}>Wrap</p>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{dop_qty_wrap || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{dop_uno_wrap || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{dop_una_wrap}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{dop_rt_wrap || 0}</p>
    </div>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box2} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{dopwrap_total || 0}</p>
    </div>
    </Col>
    </Row>
    {/* Total */}
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline7}`}></p>
    </Col>
    <Col md={7} > 
    <p className={`${styles.Underline}`}>Total</p>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box4} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{dopall_total || 0}</p>
    </div>
    </Col>
    </Row>
    </div>
    {/* hr */}
    <Row>
    <Col md={1}></Col>
    <Col md={10} >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Camera Operator */}
    <div>
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline} mb-0`}>16.20</p>
    </Col>
    <Col md={5} >
    <p className={`${styles.BoldBlack} mb-0`}>Camera Operator</p>
    </Col>
    </Row>
    {/* Prep */}
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    </Col>
    <Col md={3} >
    <p className={`${styles.Underline7}`}>Prep</p>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
    py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{cam_op_qty_prep || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{cam_op_uno_prep || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{cam_op_una_prep}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{cam_op_rt_prep || 0}</p>
    </div>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box2} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{camopprep_total || 0}</p>
    </div>
    </Col>
    </Row>
    {/* Shoot */}
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}></p>
    </Col>
    <Col md={3} >
    <p className={`${styles.Underline7}`}>Shoot</p>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{camera_op_qty || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{camera_op_uno || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{camera_op_una}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{camera_op_rt || 0}</p>
    </div>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box2} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{cameraop_total || 0}</p>
    </div>
    </Col>
    </Row>
    {/* Wrap */}
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}></p>
    </Col>
    <Col md={3} >
    <p className={`${styles.Underline7}`}>Wrap</p>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{cam_op_qty_wrap || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{cam_op_uno_wrap || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{cam_op_una_wrap}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{cam_op_rt_wrap || 0}</p>
    </div>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box2} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{camopwrap_total || 0}</p>
    </div>
    </Col>
    </Row>
    {/* Total */}
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline7}`}></p>
    </Col>
    <Col md={7} > 
    <p className={`${styles.Underline}`}>Total</p>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box4} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{camopall_total || 0}</p>
    </div>
    </Col>
    </Row>
    </div>
    {/* hr */}
    <Row>
    <Col md={1}></Col>
    <Col md={10} >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* 1st Assistant Camera */}
    <div>
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline} mb-0`}>16.30</p>
    </Col>
    <Col md={5} >
    <p className={`${styles.BoldBlack} mb-0`}>1st Assistant Camera</p>
    </Col>
    </Row>
    {/* Prep */}
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    </Col>
    <Col md={3} >
    <p className={`${styles.Underline7}`}>Prep</p>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
    py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{cam_ac1_qty_prep || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{cam_ac1_uno_prep || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{cam_ac1_una_prep}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{cam_ac1_rt_prep || 0}</p>
    </div>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box2} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{camac1prep_total || 0}</p>
    </div>
    </Col>
    </Row>
    {/* Shoot */}
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}></p>
    </Col>
    <Col md={3} >
    <p className={`${styles.Underline7}`}>Shoot</p>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{cam_ac1_qty || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{cam_ac1_uno || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{cam_ac1_una}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{cam_ac1_rt || 0}</p>
    </div>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box2} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{camac1_total || 0}</p>
    </div>
    </Col>
    </Row>
    {/* Wrap */}
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}></p>
    </Col>
    <Col md={3} >
    <p className={`${styles.Underline7}`}>Wrap</p>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{cam_ac1_qty_wrap || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{cam_ac1_uno_wrap || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{cam_ac1_una_wrap}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{cam_ac1_rt_wrap || 0}</p>
    </div>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box2} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{camac1wrap_total || 0}</p>
    </div>
    </Col>
    </Row>
    {/* Total */}
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline7}`}></p>
    </Col>
    <Col md={7} > 
    <p className={`${styles.Underline}`}>Total</p>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box4} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{camac1all_total || 0}</p>
    </div>
    </Col>
    </Row>
    </div>
    {/* hr */}
    <Row>
    <Col md={1}></Col>
    <Col md={10} >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* 2nd Assistant Camera */}
    <div>
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline} mb-0`}>16.40</p>
    </Col>
    <Col md={5} >
    <p className={`${styles.BoldBlack} mb-0`}>2nd Assistant Camera</p>
    </Col>
    </Row>
    {/* Prep */}
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    </Col>
    <Col md={3} >
    <p className={`${styles.Underline7}`}>Prep</p>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
    py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{cam_ac2_qty_prep || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{cam_ac2_uno_prep || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{cam_ac2_una_prep}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{cam_ac2_rt_prep || 0}</p>
    </div>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box2} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{camac2prep_total || 0}</p>
    </div>
    </Col>
    </Row>
    {/* Shoot */}
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}></p>
    </Col>
    <Col md={3} >
    <p className={`${styles.Underline7}`}>Shoot</p>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{cam_ac2_qty || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{cam_ac2_uno || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{cam_ac2_una}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{cam_ac2_rt || 0}</p>
    </div>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box2} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{camac2_total || 0}</p>
    </div>
    </Col>
    </Row>
    {/* Wrap */}
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}></p>
    </Col>
    <Col md={3} >
    <p className={`${styles.Underline7}`}>Wrap</p>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{cam_ac2_qty_wrap || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{cam_ac2_uno_wrap || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{cam_ac2_una_wrap}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{cam_ac2_rt_wrap || 0}</p>
    </div>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box2} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{camac2wrap_total || 0}</p>
    </div>
    </Col>
    </Row>
    {/* Total */}
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline7}`}></p>
    </Col>
    <Col md={7} > 
    <p className={`${styles.Underline}`}>Total</p>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box4} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{camac2all_total || 0}</p>
    </div>
    </Col>
    </Row>
    </div>
    {/* hr */}
    <Row>
    <Col md={1}></Col>
    <Col md={10} >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* DIT */}
    <div>
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline} mb-0`}>16.50</p>
    </Col>
    <Col md={5} >
    <p className={`${styles.BoldBlack} mb-0`}>DIT</p>
    </Col>
    </Row>
    {/* Prep */}
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    </Col>
    <Col md={3} >
    <p className={`${styles.Underline7}`}>Prep</p>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
    py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{dit_qty_prep || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{dit_uno_prep || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{dit_una_prep}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{dit_rt_prep || 0}</p>
    </div>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box2} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{ditprep_total || 0}</p>
    </div>
    </Col>
    </Row>
    {/* Shoot */}
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}></p>
    </Col>
    <Col md={3} >
    <p className={`${styles.Underline7}`}>Shoot</p>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{dit_qty || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{dit_uno || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{dit_una}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{dit_rt}</p>
    </div>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box2} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{dit_total || 0}</p>
    </div>
    </Col>
    </Row>
    {/* Wrap */}
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}></p>
    </Col>
    <Col md={3} >
    <p className={`${styles.Underline7}`}>Wrap</p>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{dit_qty_wrap || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{dit_uno_wrap || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{dit_una_wrap}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{dit_rt_wrap || 0}</p>
    </div>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box2} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{ditwrap_total || 0}</p>
    </div>
    </Col>
    </Row>
    {/* Total */}
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline7}`}></p>
    </Col>
    <Col md={7} > 
    <p className={`${styles.Underline}`}>Total</p>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box4} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{ditall_total || 0}</p>
    </div>
    </Col>
    </Row>
    </div>
    {/* hr */}
    <Row>
    <Col md={1}></Col>
    <Col md={10} >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Steadicam */}
    <div>
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline} mb-0`}>16.60</p>
    </Col>
    <Col md={5} >
    <p className={`${styles.BoldBlack} mb-0`}>Steadicam</p>
    </Col>
    </Row>
    {/* Prep */}
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    </Col>
    <Col md={3} >
    <p className={`${styles.Underline7}`}>Prep</p>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
    py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{stead_qty_prep || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{stead_uno_prep || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{stead_una_prep}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{stead_rt_prep || 0}</p>
    </div>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box2} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{stecamprep_total || 0}</p>
    </div>
    </Col>
    </Row>
    {/* Shoot */}
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}></p>
    </Col>
    <Col md={3} >
    <p className={`${styles.Underline7}`}>Shoot</p>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{steadicam_qty || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{steadicam_uno || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{steadicam_una}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{steadicam_rt}</p>
    </div>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box2} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{steadicam_total || 0}</p>
    </div>
    </Col>
    </Row>
    {/* Wrap */}
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}></p>
    </Col>
    <Col md={3} >
    <p className={`${styles.Underline7}`}>Wrap</p>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{stead_qty_wrap || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{stead_uno_wrap || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{stead_una_wrap}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{stead_rt_wrap || 0}</p>
    </div>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box2} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{stecamwrap_total || 0}</p>
    </div>
    </Col>
    </Row>
    {/* Total */}
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline7}`}></p>
    </Col>
    <Col md={7} > 
    <p className={`${styles.Underline}`}>Total</p>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box4} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{stecamall_total || 0}</p>
    </div>
    </Col>
    </Row>
    </div>
    {/* hr */}
    <Row>
    <Col md={1}></Col>
    <Col md={10} >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Camera PA */}
    <div>
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline} mb-0`}>16.70</p>
    </Col>
    <Col md={5} >
    <p className={`${styles.BoldBlack} mb-0`}>Camera PA</p>
    </Col>
    </Row>
    {/* Prep */}
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    </Col>
    <Col md={3} >
    <p className={`${styles.Underline7}`}>Prep</p>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
    py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{cam_pa_qty_prep || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{cam_pa_uno_prep || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{cam_pa_una_prep}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{cam_pa_rt_prep || 0}</p>
    </div>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box2} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{campaprep_total || 0}</p>
    </div>
    </Col>
    </Row>
    {/* Shoot */}
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}></p>
    </Col>
    <Col md={3} >
    <p className={`${styles.Underline7}`}>Shoot</p>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{cam_pa_qty || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{cam_pa_uno || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{cam_pa_una}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{cam_pa_rt}</p>
    </div>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box2} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{campa_total || 0}</p>
    </div>
    </Col>
    </Row>
    {/* Wrap */}
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}></p>
    </Col>
    <Col md={3} >
    <p className={`${styles.Underline7}`}>Wrap</p>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{cam_pa_qty_wrap || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{cam_pa_uno_wrap || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{cam_pa_una_wrap}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{cam_pa_rt_wrap || 0}</p>
    </div>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box2} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{campawrap_total || 0}</p>
    </div>
    </Col>
    </Row>
    {/* Total */}
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline7}`}></p>
    </Col>
    <Col md={7} > 
    <p className={`${styles.Underline}`}>Total</p>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box4} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{campaall_total || 0}</p>
    </div>
    </Col>
    </Row>
    </div>
    {/* hr */}
    <Row>
    <Col md={1}></Col>
    <Col md={10} >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Drone Pilot */}
    <div>
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline} mb-0`}>16.80</p>
    </Col>
    <Col md={5} >
    <p className={`${styles.BoldBlack} mb-0`}>Drone Pilot</p>
    </Col>
    </Row>
    {/* Prep */}
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    </Col>
    <Col md={3} >
    <p className={`${styles.Underline7}`}>Prep</p>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
    py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{dro_pil_qty_prep || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{dro_pil_uno_prep || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{dro_pil_una_prep}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{dro_pil_rt_prep || 0}</p>
    </div>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box2} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{dronpiprep_total || 0}</p>
    </div>
    </Col>
    </Row>
    {/* Shoot */}
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}></p>
    </Col>
    <Col md={3} >
    <p className={`${styles.Underline7}`}>Shoot</p>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{drone_pilot_qty || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{drone_pilot_uno || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{drone_pilot_una}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{drone_pilot_rt}</p>
    </div>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box2} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{dronepilot_total || 0}</p>
    </div>
    </Col>
    </Row>
    {/* Wrap */}
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}></p>
    </Col>
    <Col md={3} >
    <p className={`${styles.Underline7}`}>Wrap</p>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{dro_pil_qty_wrap || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{dro_pil_uno_wrap || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{dro_pil_una_wrap}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{dro_pil_rt_wrap || 0}</p>
    </div>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box2} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{dronpiwrap_total || 0}</p>
    </div>
    </Col>
    </Row>
    {/* Total */}
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline7}`}></p>
    </Col>
    <Col md={7} > 
    <p className={`${styles.Underline}`}>Total</p>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box4} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{dronpiall_total || 0}</p>
    </div>
    </Col>
    </Row>
    </div>
    {/* hr */}
    <Row>
    <Col md={1}></Col>
    <Col md={10} >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Additional Camera Labour */}
    <div>
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline} mb-0`}>16.90</p>
    </Col>
    <Col md={5} >
    <p className={`${styles.BoldBlack} mb-0`}>Additional Camera Labour</p>
    </Col>
    </Row>
    {/* Prep */}
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    </Col>
    <Col md={3} >
    <p className={`${styles.Underline7}`}>Prep</p>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
    py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{ot_cam_qty_prep || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{ot_cam_uno_prep || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{ot_cam_una_prep}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{ot_cam_rt_prep || 0}</p>
    </div>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box2} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{othcamprep_total || 0}</p>
    </div>
    </Col>
    </Row>
    {/* Shoot */}
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}></p>
    </Col>
    <Col md={3} >
    <p className={`${styles.Underline7}`}>Shoot</p>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{other_cam_qty || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{other_cam_uno || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{other_cam_una}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{other_cam_rt}</p>
    </div>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box2} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{othercam_total || 0}</p>
    </div>
    </Col>
    </Row>
    {/* Wrap */}
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}></p>
    </Col>
    <Col md={3} >
    <p className={`${styles.Underline7}`}>Wrap</p>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{ot_cam_qty_wrap || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{ot_cam_uno_wrap || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{ot_cam_una_wrap}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{ot_cam_rt_wrap || 0}</p>
    </div>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box2} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{othcamwrap_total || 0}</p>
    </div>
    </Col>
    </Row>
    {/* Total */}
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline7}`}></p>
    </Col>
    <Col md={7} > 
    <p className={`${styles.Underline}`}>Total</p>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box4} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{othcamall_total || 0}</p>
    </div>
    </Col>
    </Row>
    </div>
    {/* hr */}
    <Row>
    <Col md={1}></Col>
    <Col md={10} >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Stills Photographer */}
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>15.91</p>
    </Col>
    <Col md={3} >
    <p className={`${styles.Underline}`}>Stills Photographer</p>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box5} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{stills_qty || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box5} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{stills_uno || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box5} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{stills_una}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box5} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{stills_rt || 0}</p>
    </div>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box3} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{stills_total || 0}</p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col md={1}></Col>
    <Col md={10} >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* 6th/7th Days */}
    <Row >
    <Col md={1} ></Col>
    <Col md={1}>
    <p className={`${styles.Underline}`}>16.92</p>
    </Col>
    <Col md={5}>
    <p className={`${styles.BoldBlack}`}>6th/7th Days</p>
    </Col>
    <Col md={1}>
    <div className={`${styles.Box5} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{days6th7th_unit_cam} </p>
    </div>
    </Col>
    <Col md={1}>
    <p className={`${styles.Underline}`}></p>
    </Col>
    <Col md={2}>
    <div className={`${styles.Box3} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{days6th7th_cam || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col md={1}></Col>
    <Col md={10} >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Overtime */}
    <Row >
    <Col md={1} ></Col>
    <Col md={1}>
    <p className={`${styles.Underline}`}>16.93</p>
    </Col>
    <Col md={5}>
    <p className={`${styles.Underline}`}>Overtime</p>
    </Col>
    <Col md={1}>
    <div className={`${styles.Box5} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{overtime_unit_cam} </p>
    </div>
    </Col>
    <Col md={1}>
    <p className={`${styles.Underline}`}></p>
    </Col>
    <Col md={2}>
    <div className={`${styles.Box3} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{overtime_cam || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col md={1}></Col>
    <Col md={10} >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Holidays */}
    <Row >
    <Col md={1} ></Col>
    <Col md={1}>
    <p className={`${styles.Underline}`}>16.94</p>
    </Col>
    <Col md={5}>
    <p className={`${styles.Underline}`}>Holidays</p>
    </Col>
    <Col md={1}>
    <div className={`${styles.Box5} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{holidays_unit_cam} </p>
    </div>
    </Col>
    <Col md={1}>
    <p className={`${styles.Underline}`}></p>
    </Col>
    <Col md={2}>
    <div className={`${styles.Box3} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{holidays_cam || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col md={1}></Col>
    <Col md={10} >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Box Rentals */}
    <Row >
    <Col md={1} ></Col>
    <Col md={1}>
    <p className={`${styles.Underline}`}>16.95</p>
    </Col>
    <Col md={5}>
    <p className={`${styles.Underline}`}>Box Rentals</p>
    </Col>
    <Col md={1}>
    <div className={`${styles.Box5} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{box_rent_unit_cam} </p>
    </div>
    </Col>
    <Col md={1}>
    <p className={`${styles.Underline}`}></p>
    </Col>
    <Col md={2}>
    <div className={`${styles.Box3} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{box_rent_cam || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col md={1}></Col>
    <Col md={10} >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Other */}
    <Row >
    <Col md={1} ></Col>
    <Col md={1}>
    <p className={`${styles.Underline}`}>16.96</p>
    </Col>
    <Col md={7}>
    <p className={`${styles.Underline}`}>Other</p>
    </Col>
    <Col md={2}>
    <div className={`${styles.Box3} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{other_solo_cam || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col md={1}></Col>
    <Col md={10} >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Fringes Taxes */}
    <Row >
    <Col md={1} ></Col>
    <Col md={1}>
    <p className={`${styles.Underline}`}>16.97</p>
    </Col>
    <Col md={7}>
    <p className={`${styles.Underline}`}>Fringes & Taxes</p>
    </Col>
    <Col md={2}>
    <div className={`${styles.Box3} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{fringes_taxes_camera || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col md={1}></Col>
    <Col md={10} >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Camera Total */}
    <Row className='mt-3 mb-1' >
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}></p>
    <p></p>
    </Col>
    <Col className={ `${styles.Overview} my-0 pt-1`} md={6} >
    <p className={ `${styles.Bold} pb-0 mb-0`}>TOTAL CAMERA LABOUR</p>
    </Col>
    <Col md={1} >
    </Col>
    <Col md={2} >
    <div className={`${styles.Box4} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline} mb-0`}>{cameralabour_total || 0}</p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col md={1}></Col>
    <Col md={10} >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    </div>
    {/* ELECTRICAL ------------------------------------------- */}
    <div className='mt-4'>
    <Row>
    <Col md={1} ></Col>
    <Col xs={1}>
    <p className={`${styles.BoldBlack}`}>17.00</p>
    </Col>
    <Col xs={8}>
    <p className={ `${styles.BoldBlack}`}>ELECTRICAL LABOUR</p>
    </Col>
    </Row>
    {/* TITLES */}
    <Row className={ `mb-2 py-0`} >
    <Col md={1} ></Col>
    <Col className={ `${styles.Overview} py-1`} md={1} >
    <p className="mb-0">ACCT</p>
    </Col>
    <Col className={ `${styles.Overview} py-1`} md={3} >
    <p className="mb-0">Description</p>
    </Col>
    <Col className={`${styles.Overview} text-center py-1`} md={1} >
    <p className="mb-0">#</p>
    </Col>
    <Col className={`${styles.Overview} text-center py-1`} md={1} >
    <p># Unit</p>
    </Col>
    <Col md={1} className={`${styles.Overview} text-center py-1`} >
    <p className="mb-0">Unit</p>
    </Col>
    <Col md={1} className={`${styles.Overview} text-center py-1`} >
    <p className="mb-0">Price</p>
    </Col>
    <Col md={2} className={`${styles.Overview} text-center py-1`} >
    <p className="mb-0">Total</p>
    </Col>
    <Col md={1}></Col>
    </Row>
    {/* Gaffer */}
    <div>
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline} mb-0`}>17.10</p>
    </Col>
    <Col md={5} >
    <p className={`${styles.BoldBlack} mb-0`}>Gaffer</p>
    </Col>
    </Row>
    {/* Prep */}
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    </Col>
    <Col md={3} >
    <p className={`${styles.Underline7}`}>Prep</p>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
    py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{gaf_qty_prep || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{gaf_uno_prep || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{gaf_una_prep}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{gaf_rt_prep || 0}</p>
    </div>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box2} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{gafprep_total || 0}</p>
    </div>
    </Col>
    </Row>
    {/* Shoot */}
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}></p>
    </Col>
    <Col md={3} >
    <p className={`${styles.Underline7}`}>Shoot</p>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{gaffer_qty || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{gaffer_uno || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{gaffer_una}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{gaffer_rt || 0}</p>
    </div>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box2} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{gaffer_total || 0}</p>
    </div>
    </Col>
    </Row>
    {/* Wrap */}
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}></p>
    </Col>
    <Col md={3} >
    <p className={`${styles.Underline7}`}>Wrap</p>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{gaf_qty_wrap || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{gaf_uno_wrap || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{gaf_una_wrap}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{gaf_rt_wrap || 0}</p>
    </div>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box2} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{gafwrap_total || 0}</p>
    </div>
    </Col>
    </Row>
    {/* Total */}
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline7}`}></p>
    </Col>
    <Col md={7} > 
    <p className={`${styles.Underline}`}>Total</p>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box4} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{gafall_total || 0}</p>
    </div>
    </Col>
    </Row>
    </div>
    {/* hr */}
    <Row>
    <Col md={1}></Col>
    <Col md={10} >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Best Boy start here */}
    <div>
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline} mb-0`}>17.20</p>
    </Col>
    <Col md={5} >
    <p className={`${styles.BoldBlack} mb-0`}>Best Boy</p>
    </Col>
    </Row>
    {/* Prep */}
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    </Col>
    <Col md={3} >
    <p className={`${styles.Underline7}`}>Prep</p>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
    py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{b_boy_qty_prep || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{b_boy_uno_prep || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{b_boy_una_prep}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{b_boy_rt_prep || 0}</p>
    </div>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box2} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{bboyprep_total || 0}</p>
    </div>
    </Col>
    </Row>
    {/* Shoot */}
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}></p>
    </Col>
    <Col md={3} >
    <p className={`${styles.Underline7}`}>Shoot</p>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{best_boy_qty || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{best_boy_uno || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{best_boy_una}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{best_boy_rt || 0}</p>
    </div>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box2} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{bestboy_total || 0}</p>
    </div>
    </Col>
    </Row>
    {/* Wrap */}
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}></p>
    </Col>
    <Col md={3} >
    <p className={`${styles.Underline7}`}>Wrap</p>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{b_boy_qty_wrap || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{b_boy_uno_wrap || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{b_boy_una_wrap}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{b_boy_rt_wrap || 0}</p>
    </div>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box2} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{bboywrap_total || 0}</p>
    </div>
    </Col>
    </Row>
    {/* Total */}
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline7}`}></p>
    </Col>
    <Col md={7} > 
    <p className={`${styles.Underline}`}>Total</p>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box4} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{bboyall_total || 0}</p>
    </div>
    </Col>
    </Row>
    </div>
    {/* hr */}
    <Row>
    <Col md={1}></Col>
    <Col md={10} >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Electrician/Lighting Technician */}
    <div>
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline} mb-0`}>17.30</p>
    </Col>
    <Col md={5} >
    <p className={`${styles.BoldBlack} mb-0`}>Electrician/Lighting Technician</p>
    </Col>
    </Row>
    {/* Prep */}
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    </Col>
    <Col md={3} >
    <p className={`${styles.Underline7}`}>Prep</p>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
    py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{elec_qty_prep || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{elec_uno_prep || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{elec_una_prep}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{elec_rt_prep || 0}</p>
    </div>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box2} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{elecprep_total || 0}</p>
    </div>
    </Col>
    </Row>
    {/* Shoot */}
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}></p>
    </Col>
    <Col md={3} >
    <p className={`${styles.Underline7}`}>Shoot</p>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{electrician_qty || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{electrician_uno || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{electrician_una}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{electrician_rt || 0}</p>
    </div>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box2} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{electrician_total || 0}</p>
    </div>
    </Col>
    </Row>
    {/* Wrap */}
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}></p>
    </Col>
    <Col md={3} >
    <p className={`${styles.Underline7}`}>Wrap</p>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{elec_qty_wrap || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{elec_uno_wrap || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{elec_una_wrap}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{elec_rt_wrap || 0}</p>
    </div>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box2} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{elecwrapTotal || 0}</p>
    </div>
    </Col>
    </Row>
    {/* Total */}
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline7}`}></p>
    </Col>
    <Col md={7} > 
    <p className={`${styles.Underline}`}>Total</p>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box4} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{elecall_total || 0}</p>
    </div>
    </Col>
    </Row>
    </div>
    {/* hr */}
    <Row>
    <Col md={1}></Col>
    <Col md={10} >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Generator Operator */}
    <div>
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline} mb-0`}>17.40</p>
    </Col>
    <Col md={5} >
    <p className={`${styles.BoldBlack} mb-0`}>Generator Operator</p>
    </Col>
    </Row>
    {/* Prep */}
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    </Col>
    <Col md={3} >
    <p className={`${styles.Underline7}`}>Prep</p>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
    py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{gen_op_qty_prep || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{gen_op_uno_prep || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{gen_op_una_prep}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{gen_op_rt_prep || 0}</p>
    </div>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box2} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{genopprep_total || 0}</p>
    </div>
    </Col>
    </Row>
    {/* Shoot */}
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}></p>
    </Col>
    <Col md={3} >
    <p className={`${styles.Underline7}`}>Shoot</p>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{generator_op_qty || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{generator_op_uno || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{generator_op_una}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{generator_op_rt || 0}</p>
    </div>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box2} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{generatorop_total || 0}</p>
    </div>
    </Col>
    </Row>
    {/* Wrap */}
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}></p>
    </Col>
    <Col md={3} >
    <p className={`${styles.Underline7}`}>Wrap</p>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{gen_op_qty_wrap || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{gen_op_uno_wrap || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{gen_op_una_wrap}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{gen_op_rt_wrap || 0}</p>
    </div>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box2} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{genopwrap_total || 0}</p>
    </div>
    </Col>
    </Row>
    {/* Total */}
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline7}`}></p>
    </Col>
    <Col md={7} > 
    <p className={`${styles.Underline}`}>Total</p>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box4} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{genopall_total || 0}</p>
    </div>
    </Col>
    </Row>
    </div>
    {/* hr */}
    <Row>
    <Col md={1}></Col>
    <Col md={10} >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Other Electrical */}
    <div>
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline} mb-0`}>17.50</p>
    </Col>
    <Col md={5} >
    <p className={`${styles.BoldBlack} mb-0`}>Other Electrical Labour</p>
    </Col>
    </Row>
    {/* Prep */}
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    </Col>
    <Col md={3} >
    <p className={`${styles.Underline7}`}>Prep</p>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
    py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{ot_el_qty_prep || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{ot_el_uno_prep || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{ot_el_una_prep}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{ot_el_rt_prep || 0}</p>
    </div>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box2} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{otelecprep_total || 0}</p>
    </div>
    </Col>
    </Row>
    {/* Shoot */}
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}></p>
    </Col>
    <Col md={3} >
    <p className={`${styles.Underline7}`}>Shoot</p>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{other_elec_qty || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{other_elec_uno || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{other_elec_una}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{other_elec_rt || 0}</p>
    </div>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box2} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{otherelectric_total || 0}</p>
    </div>
    </Col>
    </Row>
    {/* Wrap */}
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}></p>
    </Col>
    <Col md={3} >
    <p className={`${styles.Underline7}`}>Wrap</p>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{ot_el_qty_wrap || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{ot_el_uno_wrap || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{ot_el_una_wrap}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{ot_el_rt_wrap || 0}</p>
    </div>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box2} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{otelecwrap_total || 0}</p>
    </div>
    </Col>
    </Row>
    {/* Total */}
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline7}`}></p>
    </Col>
    <Col md={7} > 
    <p className={`${styles.Underline}`}>Total</p>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box4} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{otelecall_total || 0}</p>
    </div>
    </Col>
    </Row>
    </div>
    {/* hr */}
    <Row>
    <Col md={1}></Col>
    <Col md={10} >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Electric Dailies */}
    <div>
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline} mb-0`}>17.60</p>
    </Col>
    <Col md={5} >
    <p className={`${styles.BoldBlack} mb-0`}>Electrical Dailies</p>
    </Col>
    </Row>
    {/* Prep */}
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    </Col>
    <Col md={3} >
    <p className={`${styles.Underline7}`}>Prep</p>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
    py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{d_elec_qty_prep || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{d_elec_uno_prep || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{d_elec_una_prep}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{d_elec_rt_prep || 0}</p>
    </div>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box2} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{daelecprep_total || 0}</p>
    </div>
    </Col>
    </Row>
    {/* Shoot */}
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}></p>
    </Col>
    <Col md={3} >
    <p className={`${styles.Underline7}`}>Shoot</p>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{dailies_elec_qty || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{dailies_elec_uno || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{dailies_elec_una}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{dailies_elec_rt || 0}</p>
    </div>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box2} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{dailieselec_total || 0}</p>
    </div>
    </Col>
    </Row>
    {/* Wrap */}
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}></p>
    </Col>
    <Col md={3} >
    <p className={`${styles.Underline7}`}>Wrap</p>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{d_elec_qty_wrap || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{d_elec_uno_wrap || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{d_elec_una_wrap}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{d_elec_rt_wrap || 0}</p>
    </div>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box2} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{daelecwrap_total || 0}</p>
    </div>
    </Col>
    </Row>
    {/* Total */}
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline7}`}></p>
    </Col>
    <Col md={7} > 
    <p className={`${styles.Underline}`}>Total</p>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box4} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{daelecall_total || 0}</p>
    </div>
    </Col>
    </Row>
    </div>
    {/* hr */}
    <Row>
    <Col md={1}></Col>
    <Col md={10} >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* 6th/7th Days */}
    <Row >
    <Col md={1} ></Col>
    <Col md={1}>
    <p className={`${styles.Underline}`}>17.70</p>
    </Col>
    <Col md={5}>
    <p className={`${styles.BoldBlack}`}>6th/7th Days</p>
    </Col>
    <Col md={1}>
    <div className={`${styles.Box5} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{days6th7th_unit_ele} </p>
    </div>
    </Col>
    <Col md={1}>
    <p className={`${styles.Underline}`}></p>
    </Col>
    <Col md={2}>
    <div className={`${styles.Box3} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{days6th7th_ele || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col md={1}></Col>
    <Col md={10} >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Overtime */}
    <Row >
    <Col md={1} ></Col>
    <Col md={1}>
    <p className={`${styles.Underline}`}>17.80</p>
    </Col>
    <Col md={5}>
    <p className={`${styles.Underline}`}>Overtime</p>
    </Col>
    <Col md={1}>
    <div className={`${styles.Box5} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{overtime_unit_ele} </p>
    </div>
    </Col>
    <Col md={1}>
    <p className={`${styles.Underline}`}></p>
    </Col>
    <Col md={2}>
    <div className={`${styles.Box3} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{overtime_ele || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col md={1}></Col>
    <Col md={10} >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Holidays */}
    <Row >
    <Col md={1} ></Col>
    <Col md={1}>
    <p className={`${styles.Underline}`}>17.90</p>
    </Col>
    <Col md={5}>
    <p className={`${styles.Underline}`}>Holidays</p>
    </Col>
    <Col md={1}>
    <div className={`${styles.Box5} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{holidays_unit_ele} </p>
    </div>
    </Col>
    <Col md={1}>
    <p className={`${styles.Underline}`}></p>
    </Col>
    <Col md={2}>
    <div className={`${styles.Box3} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{holidays_ele || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col md={1}></Col>
    <Col md={10} >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Box Rentals */}
    <Row >
    <Col md={1} ></Col>
    <Col md={1}>
    <p className={`${styles.Underline}`}>17.91</p>
    </Col>
    <Col md={5}>
    <p className={`${styles.Underline}`}>Box Rentals</p>
    </Col>
    <Col md={1}>
    <div className={`${styles.Box5} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{box_rent_unit_ele} </p>
    </div>
    </Col>
    <Col md={1}>
    <p className={`${styles.Underline}`}></p>
    </Col>
    <Col md={2}>
    <div className={`${styles.Box3} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{box_rent_ele || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col md={1}></Col>
    <Col md={10} >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Other */}
    <Row >
    <Col md={1} ></Col>
    <Col md={1}>
    <p className={`${styles.Underline}`}>17.92</p>
    </Col>
    <Col md={7}>
    <p className={`${styles.Underline}`}>Other</p>
    </Col>
    <Col md={2}>
    <div className={`${styles.Box3} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{other_solo_ele || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col md={1}></Col>
    <Col md={10} >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Fringes Taxes */}
    <Row >
    <Col md={1} ></Col>
    <Col md={1}>
    <p className={`${styles.Underline}`}>17.93</p>
    </Col>
    <Col md={7}>
    <p className={`${styles.Underline}`}>Fringes & Taxes</p>
    </Col>
    <Col md={2}>
    <div className={`${styles.Box3} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{fringes_taxes_electric || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col md={1}></Col>
    <Col md={10} >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Electric Total */}
    <Row className='mt-3 mb-1' >
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}></p>
    <p></p>
    </Col>
    <Col className={ `${styles.Overview} my-0 pt-1`} md={6} >
    <p className={ `${styles.Bold} pb-0 mb-0`}>TOTAL ELECTRICAL LABOUR</p>
    </Col>
    <Col md={1} >
    </Col>
    <Col md={2} >
    <div className={`${styles.Box4} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline} mb-0`}>{electriclabour_total || 0}</p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col md={1}></Col>
    <Col md={10} >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    </div>
    {/* GRIP ------------------------------------------------- */}
    <div className='mt-4'>
    <Row>
    <Col md={1} ></Col>
    <Col xs={1}>
    <p className={`${styles.BoldBlack}`}>18.00</p>
    </Col>
    <Col xs={8}>
    <p className={ `${styles.BoldBlack}`}>GRIP LABOUR</p>
    </Col>
    </Row>
    {/* TITLES */}
    <Row className={ `mb-2 py-0`} >
    <Col md={1} ></Col>
    <Col className={ `${styles.Overview} py-1`} md={1} >
    <p className="mb-0">ACCT</p>
    </Col>
    <Col className={ `${styles.Overview} py-1`} md={3} >
    <p className="mb-0">Description</p>
    </Col>
    <Col className={`${styles.Overview} text-center py-1`} md={1} >
    <p className="mb-0">#</p>
    </Col>
    <Col className={`${styles.Overview} text-center py-1`} md={1} >
    <p># Unit</p>
    </Col>
    <Col md={1} className={`${styles.Overview} text-center py-1`} >
    <p className="mb-0">Unit</p>
    </Col>
    <Col md={1} className={`${styles.Overview} text-center py-1`} >
    <p className="mb-0">Price</p>
    </Col>
    <Col md={2} className={`${styles.Overview} text-center py-1`} >
    <p className="mb-0">Total</p>
    </Col>
    <Col md={1}></Col>
    </Row>
    {/* Key Grip */}
    <div>
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline} mb-0`}>18.10</p>
    </Col>
    <Col md={5} >
    <p className={`${styles.BoldBlack} mb-0`}>Key Grip</p>
    </Col>
    </Row>
    {/* Prep */}
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    </Col>
    <Col md={3} >
    <p className={`${styles.Underline7}`}>Prep</p>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
    py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{k_grip_qty_prep || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{k_grip_uno_prep || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{k_grip_una_prep}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{k_grip_rt_prep || 0}</p>
    </div>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box2} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{kgripprep_total || 0}</p>
    </div>
    </Col>
    </Row>
    {/* Shoot */}
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}></p>
    </Col>
    <Col md={3} >
    <p className={`${styles.Underline7}`}>Shoot</p>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{key_grip_qty || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{key_grip_uno || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{key_grip_una}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{key_grip_rt || 0}</p>
    </div>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box2} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{keygrip_total || 0}</p>
    </div>
    </Col>
    </Row>
    {/* Wrap */}
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}></p>
    </Col>
    <Col md={3} >
    <p className={`${styles.Underline7}`}>Wrap</p>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{k_grip_qty_wrap || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{k_grip_uno_wrap || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{k_grip_una_wrap}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{k_grip_rt_wrap || 0}</p>
    </div>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box2} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{kgripwrap_total || 0}</p>
    </div>
    </Col>
    </Row>
    {/* Total */}
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline7}`}></p>
    </Col>
    <Col md={7} > 
    <p className={`${styles.Underline}`}>Total</p>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box4} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{kgripall_total || 0}</p>
    </div>
    </Col>
    </Row>
    </div>
    {/* hr */}
    <Row>
    <Col md={1}></Col>
    <Col md={10} >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Best Boy Grip */}
    <div>
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline} mb-0`}>18.20</p>
    </Col>
    <Col md={5} >
    <p className={`${styles.BoldBlack} mb-0`}>Best Boy Grip</p>
    </Col>
    </Row>
    {/* Prep */}
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    </Col>
    <Col md={3} >
    <p className={`${styles.Underline7}`}>Prep</p>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
    py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{bb_grip_qty_prep || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{bb_grip_uno_prep || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{bb_grip_una_prep}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{bb_grip_rt_prep || 0}</p>
    </div>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box2} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{bbgripprep_total || 0}</p>
    </div>
    </Col>
    </Row>
    {/* Shoot */}
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}></p>
    </Col>
    <Col md={3} >
    <p className={`${styles.Underline7}`}>Shoot</p>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{best_boy_grip_qty || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{best_boy_grip_uno || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{best_boy_grip_una}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{best_boy_grip_rt || 0}</p>
    </div>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box2} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{bestboygrip_total || 0}</p>
    </div>
    </Col>
    </Row>
    {/* Wrap */}
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}></p>
    </Col>
    <Col md={3} >
    <p className={`${styles.Underline7}`}>Wrap</p>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{bb_grip_qty_wrap || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{bb_grip_uno_wrap || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{bb_grip_una_wrap}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{bb_grip_rt_wrap || 0}</p>
    </div>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box2} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{bbgripwrap_total || 0}</p>
    </div>
    </Col>
    </Row>
    {/* Total */}
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline7}`}></p>
    </Col>
    <Col md={7} > 
    <p className={`${styles.Underline}`}>Total</p>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box4} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{bbgripall_total || 0}</p>
    </div>
    </Col>
    </Row>
    </div>
    {/* hr */}
    <Row>
    <Col md={1}></Col>
    <Col md={10} >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Grips */}
    <div>
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline} mb-0`}>18.30</p>
    </Col>
    <Col md={5} >
    <p className={`${styles.BoldBlack} mb-0`}>Grips</p>
    </Col>
    </Row>
    {/* Prep */}
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    </Col>
    <Col md={3} >
    <p className={`${styles.Underline7}`}>Prep</p>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
    py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{grips_qty_prep || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{grips_uno_prep || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{grips_una_prep}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{grips_rt_prep || 0}</p>
    </div>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box2} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{gripsprep_total || 0}</p>
    </div>
    </Col>
    </Row>
    {/* Shoot */}
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}></p>
    </Col>
    <Col md={3} >
    <p className={`${styles.Underline7}`}>Shoot</p>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{grips_qty || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{grips_uno || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{grips_una}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{grips_rt || 0}</p>
    </div>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box2} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{grips_total || 0}</p>
    </div>
    </Col>
    </Row>
    {/* Wrap */}
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}></p>
    </Col>
    <Col md={3} >
    <p className={`${styles.Underline7}`}>Wrap</p>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{grips_qty_wrap || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{grips_uno_wrap || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{grips_una_wrap}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{grips_rt_wrap || 0}</p>
    </div>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box2} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{gripswrap_total || 0}</p>
    </div>
    </Col>
    </Row>
    {/* Total */}
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline7}`}></p>
    </Col>
    <Col md={7} > 
    <p className={`${styles.Underline}`}>Total</p>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box4} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{gripsall_total || 0}</p>
    </div>
    </Col>
    </Row>
    </div>
    {/* hr */}
    <Row>
    <Col md={1}></Col>
    <Col md={10} >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Dolly/Crane Grips */}
    <div>
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline} mb-0`}>18.40</p>
    </Col>
    <Col md={5} >
    <p className={`${styles.BoldBlack} mb-0`}>Dolly/Crane Grips</p>
    </Col>
    </Row>
    {/* Prep */}
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    </Col>
    <Col md={3} >
    <p className={`${styles.Underline7}`}>Prep</p>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
    py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{dol_grip_qty_prep || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{dol_grip_uno_prep || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{dol_grip_una_prep}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{dol_grip_rt_prep || 0}</p>
    </div>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box2} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{dolgripprep_total || 0}</p>
    </div>
    </Col>
    </Row>
    {/* Shoot */}
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}></p>
    </Col>
    <Col md={3} >
    <p className={`${styles.Underline7}`}>Shoot</p>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{dolly_crane_grip_qty || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{dolly_crane_grip_uno || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{dolly_crane_grip_una}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{dolly_crane_grip_rt || 0}</p>
    </div>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box2} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{dollycranegrip_total || 0}</p>
    </div>
    </Col>
    </Row>
    {/* Wrap */}
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}></p>
    </Col>
    <Col md={3} >
    <p className={`${styles.Underline7}`}>Wrap</p>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{dol_grip_qty_wrap || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{dol_grip_uno_wrap || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{dol_grip_una_wrap}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{dol_grip_rt_wrap || 0}</p>
    </div>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box2} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{dolgripwrap_total || 0}</p>
    </div>
    </Col>
    </Row>
    {/* Total */}
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline7}`}></p>
    </Col>
    <Col md={7} > 
    <p className={`${styles.Underline}`}>Total</p>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box4} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{dolgripall_total || 0}</p>
    </div>
    </Col>
    </Row>
    </div>
    {/* hr */}
    <Row>
    <Col md={1}></Col>
    <Col md={10} >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Swing Grips */}
    <div>
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline} mb-0`}>18.50</p>
    </Col>
    <Col md={5} >
    <p className={`${styles.BoldBlack} mb-0`}>Swing Grips</p>
    </Col>
    </Row>
    {/* Prep */}
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    </Col>
    <Col md={3} >
    <p className={`${styles.Underline7}`}>Prep</p>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
    py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{sw_grips_qty_prep || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{sw_grips_uno_prep || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{sw_grips_una_prep}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{sw_grips_rt_prep || 0}</p>
    </div>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box2} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{swigripsprep_total || 0}</p>
    </div>
    </Col>
    </Row>
    {/* Shoot */}
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}></p>
    </Col>
    <Col md={3} >
    <p className={`${styles.Underline7}`}>Shoot</p>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{swing_grips_qty || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{swing_grips_uno || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{swing_grips_una}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{swing_grips_rt || 0}</p>
    </div>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box2} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{swinggrips_total || 0}</p>
    </div>
    </Col>
    </Row>
    {/* Wrap */}
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}></p>
    </Col>
    <Col md={3} >
    <p className={`${styles.Underline7}`}>Wrap</p>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{sw_grips_qty_wrap || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{sw_grips_uno_wrap || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{sw_grips_una_wrap}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{sw_grips_rt_wrap || 0}</p>
    </div>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box2} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{swigripswrap_total || 0}</p>
    </div>
    </Col>
    </Row>
    {/* Total */}
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline7}`}></p>
    </Col>
    <Col md={7} > 
    <p className={`${styles.Underline}`}>Total</p>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box4} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{swigripsall_total || 0}</p>
    </div>
    </Col>
    </Row>
    </div>
    {/* hr */}
    <Row>
    <Col md={1}></Col>
    <Col md={10} >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Other Grip Labour */}
    <div>
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline} mb-0`}>18.60</p>
    </Col>
    <Col md={5} >
    <p className={`${styles.BoldBlack} mb-0`}>Other Grip Labour</p>
    </Col>
    </Row>
    {/* Prep */}
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    </Col>
    <Col md={3} >
    <p className={`${styles.Underline7}`}>Prep</p>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
    py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{oth_grip_qty_prep || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{oth_grip_uno_prep || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{oth_grip_una_prep}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{oth_grip_rt_prep || 0}</p>
    </div>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box2} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{othgripprep_total || 0}</p>
    </div>
    </Col>
    </Row>
    {/* Shoot */}
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}></p>
    </Col>
    <Col md={3} >
    <p className={`${styles.Underline7}`}>Shoot</p>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{other_grip_labour_qty || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{other_grip_labour_uno || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{other_grip_labour_una}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{other_grip_labour_rt || 0}</p>
    </div>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box2} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{othergriplabour_total || 0}</p>
    </div>
    </Col>
    </Row>
    {/* Wrap */}
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}></p>
    </Col>
    <Col md={3} >
    <p className={`${styles.Underline7}`}>Wrap</p>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{oth_grip_qty_wrap || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{oth_grip_uno_wrap || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{oth_grip_una_wrap}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{oth_grip_rt_wrap || 0}</p>
    </div>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box2} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{othgripwrap_total || 0}</p>
    </div>
    </Col>
    </Row>
    {/* Total */}
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline7}`}></p>
    </Col>
    <Col md={7} > 
    <p className={`${styles.Underline}`}>Total</p>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box4} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{othgripall_total || 0}</p>
    </div>
    </Col>
    </Row>
    </div>
    {/* hr */}
    <Row>
    <Col md={1}></Col>
    <Col md={10} >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Grip Dailies */}
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>18.70</p>
    </Col>
    <Col md={3} >
    <p className={`${styles.Underline}`}>Grip Dailies</p>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box5} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{dailies_grip_qty || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box5} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{dailies_grip_uno || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box5} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{dailies_grip_una}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box5} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{dailies_grip_rt || 0}</p>
    </div>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box3} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{dailiesgrip_total || 0}</p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col md={1}></Col>
    <Col md={10} >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* 6th/7th Days */}
    <Row >
    <Col md={1} ></Col>
    <Col md={1}>
    <p className={`${styles.Underline}`}>18.80</p>
    </Col>
    <Col md={5}>
    <p className={`${styles.BoldBlack}`}>6th/7th Days</p>
    </Col>
    <Col md={1}>
    <div className={`${styles.Box5} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{days6th7th_unit_grip} </p>
    </div>
    </Col>
    <Col md={1}>
    <p className={`${styles.Underline}`}></p>
    </Col>
    <Col md={2}>
    <div className={`${styles.Box3} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{days6th7th_grip || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col md={1}></Col>
    <Col md={10} >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Overtime */}
    <Row >
    <Col md={1} ></Col>
    <Col md={1}>
    <p className={`${styles.Underline}`}>18.90</p>
    </Col>
    <Col md={5}>
    <p className={`${styles.Underline}`}>Overtime</p>
    </Col>
    <Col md={1}>
    <div className={`${styles.Box5} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{overtime_unit_grip} </p>
    </div>
    </Col>
    <Col md={1}>
    <p className={`${styles.Underline}`}></p>
    </Col>
    <Col md={2}>
    <div className={`${styles.Box3} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{overtime_grip || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col md={1}></Col>
    <Col md={10} >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Holidays */}
    <Row >
    <Col md={1} ></Col>
    <Col md={1}>
    <p className={`${styles.Underline}`}>18.91</p>
    </Col>
    <Col md={5}>
    <p className={`${styles.Underline}`}>Holidays</p>
    </Col>
    <Col md={1}>
    <div className={`${styles.Box5} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{holidays_unit_grip} </p>
    </div>
    </Col>
    <Col md={1}>
    <p className={`${styles.Underline}`}></p>
    </Col>
    <Col md={2}>
    <div className={`${styles.Box3} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{holidays_grip || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col md={1}></Col>
    <Col md={10} >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Box Rentals */}
    <Row >
    <Col md={1} ></Col>
    <Col md={1}>
    <p className={`${styles.Underline}`}>18.92</p>
    </Col>
    <Col md={5}>
    <p className={`${styles.Underline}`}>Box Rentals</p>
    </Col>
    <Col md={1}>
    <div className={`${styles.Box5} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{box_rent_unit_grip} </p>
    </div>
    </Col>
    <Col md={1}>
    <p className={`${styles.Underline}`}></p>
    </Col>
    <Col md={2}>
    <div className={`${styles.Box3} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{box_rent_grip || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col md={1}></Col>
    <Col md={10} >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Other */}
    <Row >
    <Col md={1} ></Col>
    <Col md={1}>
    <p className={`${styles.Underline}`}>18.93</p>
    </Col>
    <Col md={7}>
    <p className={`${styles.Underline}`}>Other</p>
    </Col>
    <Col md={2}>
    <div className={`${styles.Box3} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{other_solo_grip || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col md={1}></Col>
    <Col md={10} >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Fringes Taxes */}
    <Row >
    <Col md={1} ></Col>
    <Col md={1}>
    <p className={`${styles.Underline}`}>18.94</p>
    </Col>
    <Col md={7}>
    <p className={`${styles.Underline}`}>Fringes & Taxes</p>
    </Col>
    <Col md={2}>
    <div className={`${styles.Box3} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{fringes_taxes_grip || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col md={1}></Col>
    <Col md={10} >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Grip Total */}
    <Row className='mt-3 mb-1' >
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}></p>
    <p></p>
    </Col>
    <Col className={ `${styles.Overview} my-0 pt-1`} md={6} >
    <p className={ `${styles.Bold} pb-0 mb-0`}>TOTAL GRIP LABOUR</p>
    </Col>
    <Col md={1} >
    </Col>
    <Col md={2} >
    <div className={`${styles.Box4} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline} mb-0`}>{griplabour_total || 0}</p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col md={1}></Col>
    <Col md={10} >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    </div>
    {/* SOUND ------------------------------------------------ */}
    <div className='mt-4'>
    <Row>
    <Col md={1} ></Col>
    <Col xs={1}>
    <p className={`${styles.BoldBlack}`}>19.00</p>
    </Col>
    <Col xs={8}>
    <p className={ `${styles.BoldBlack}`}>PRODUCTION SOUND LABOUR</p>
    </Col>
    </Row>
    {/* TITLES */}
    <Row className={ `mb-2 py-0`} >
    <Col md={1} ></Col>
    <Col className={ `${styles.Overview} py-1`} md={1} >
    <p className="mb-0">ACCT</p>
    </Col>
    <Col className={ `${styles.Overview} py-1`} md={3} >
    <p className="mb-0">Description</p>
    </Col>
    <Col className={`${styles.Overview} text-center py-1`} md={1} >
    <p className="mb-0">#</p>
    </Col>
    <Col className={`${styles.Overview} text-center py-1`} md={1} >
    <p># Unit</p>
    </Col>
    <Col md={1} className={`${styles.Overview} text-center py-1`} >
    <p className="mb-0">Unit</p>
    </Col>
    <Col md={1} className={`${styles.Overview} text-center py-1`} >
    <p className="mb-0">Price</p>
    </Col>
    <Col md={2} className={`${styles.Overview} text-center py-1`} >
    <p className="mb-0">Total</p>
    </Col>
    <Col md={1}></Col>
    </Row>
    {/* Sound Mixer */}
    <div>
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline} mb-0`}>19.10</p>
    </Col>
    <Col md={5} >
    <p className={`${styles.BoldBlack} mb-0`}>Sound Mixer</p>
    </Col>
    </Row>
    {/* Prep */}
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    </Col>
    <Col md={3} >
    <p className={`${styles.Underline7}`}>Prep</p>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
    py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{so_mix_qty_prep || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{so_mix_uno_prep || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{so_mix_una_prep}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{so_mix_rt_prep || 0}</p>
    </div>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box2} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{somixprep_total || 0}</p>
    </div>
    </Col>
    </Row>
    {/* Shoot */}
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}></p>
    </Col>
    <Col md={3} >
    <p className={`${styles.Underline7}`}>Shoot</p>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{sound_mixer_qty || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{sound_mixer_uno || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{sound_mixer_una}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{sound_mixer_rt || 0}</p>
    </div>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box2} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{soundmixer_total || 0}</p>
    </div>
    </Col>
    </Row>
    {/* Wrap */}
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}></p>
    </Col>
    <Col md={3} >
    <p className={`${styles.Underline7}`}>Wrap</p>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{so_mix_qty_wrap || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{so_mix_uno_wrap || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{so_mix_una_wrap}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{so_mix_rt_wrap || 0}</p>
    </div>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box2} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{somixwrap_total || 0}</p>
    </div>
    </Col>
    </Row>
    {/* Total */}
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline7}`}></p>
    </Col>
    <Col md={7} > 
    <p className={`${styles.Underline}`}>Total</p>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box4} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{somixall_total || 0}</p>
    </div>
    </Col>
    </Row>
    </div>
    {/* hr */}
    <Row>
    <Col md={1}></Col>
    <Col md={10} >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Boom Operator */}
    <div>
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline} mb-0`}>19.20</p>
    </Col>
    <Col md={5} >
    <p className={`${styles.BoldBlack} mb-0`}>Boom Operator</p>
    </Col>
    </Row>
    {/* Prep */}
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    </Col>
    <Col md={3} >
    <p className={`${styles.Underline7}`}>Prep</p>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
    py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{boom_op_qty_prep || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{boom_op_uno_prep || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{boom_op_una_prep}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{boom_op_rt_prep || 0}</p>
    </div>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box2} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{boomopprep_total || 0}</p>
    </div>
    </Col>
    </Row>
    {/* Shoot */}
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}></p>
    </Col>
    <Col md={3} >
    <p className={`${styles.Underline7}`}>Shoot</p>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{boom_operator_qty || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{boom_operator_uno || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{boom_operator_una}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{boom_operator_rt || 0}</p>
    </div>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box2} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{boomoperator_total || 0}</p>
    </div>
    </Col>
    </Row>
    {/* Wrap */}
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}></p>
    </Col>
    <Col md={3} >
    <p className={`${styles.Underline7}`}>Wrap</p>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{boom_op_qty_wrap || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{boom_op_uno_wrap || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{boom_op_una_wrap}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{boom_op_rt_wrap || 0}</p>
    </div>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box2} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{boomopwrap_total || 0}</p>
    </div>
    </Col>
    </Row>
    {/* Total */}
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline7}`}></p>
    </Col>
    <Col md={7} > 
    <p className={`${styles.Underline}`}>Total</p>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box4} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{boomopall_total || 0}</p>
    </div>
    </Col>
    </Row>
    </div>
    {/* hr */}
    <Row>
    <Col md={1}></Col>
    <Col md={10} >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Cable Wrangler */}
    <div>
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline} mb-0`}>19.30</p>
    </Col>
    <Col md={5} >
    <p className={`${styles.BoldBlack} mb-0`}>Cable Wrangler</p>
    </Col>
    </Row>
    {/* Prep */}
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    </Col>
    <Col md={3} >
    <p className={`${styles.Underline7}`}>Prep</p>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
    py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{cab_wran_qty_prep || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{cab_wran_uno_prep || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{cab_wran_una_prep}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{cab_wran_rt_prep || 0}</p>
    </div>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box2} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{cawranprep_total || 0}</p>
    </div>
    </Col>
    </Row>
    {/* Shoot */}
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}></p>
    </Col>
    <Col md={3} >
    <p className={`${styles.Underline7}`}>Shoot</p>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{cable_wrangler_qty || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{cable_wrangler_uno || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{cable_wrangler_una}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{cable_wrangler_rt || 0}</p>
    </div>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box2} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{cablewrangler_total || 0}</p>
    </div>
    </Col>
    </Row>
    {/* Wrap */}
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}></p>
    </Col>
    <Col md={3} >
    <p className={`${styles.Underline7}`}>Wrap</p>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{cab_wran_qty_wrap || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{cab_wran_uno_wrap || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{cab_wran_una_wrap}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{cab_wran_rt_wrap || 0}</p>
    </div>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box2} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{cawranwrap_total || 0}</p>
    </div>
    </Col>
    </Row>
    {/* Total */}
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline7}`}></p>
    </Col>
    <Col md={7} > 
    <p className={`${styles.Underline}`}>Total</p>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box4} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{cawranall_total || 0}</p>
    </div>
    </Col>
    </Row>
    </div>
    {/* hr */}
    <Row>
    <Col md={1}></Col>
    <Col md={10} >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Other Sound Labour */}
    <div>
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline} mb-0`}>19.40</p>
    </Col>
    <Col md={5} >
    <p className={`${styles.BoldBlack} mb-0`}>Other Sound Labour</p>
    </Col>
    </Row>
    {/* Prep */}
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    </Col>
    <Col md={3} >
    <p className={`${styles.Underline7}`}>Prep</p>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
    py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{ot_sound_qty_prep || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{ot_sound_uno_prep || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{ot_sound_una_prep}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{ot_sound_rt_prep || 0}</p>
    </div>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box2} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{otsoundprep_total || 0}</p>
    </div>
    </Col>
    </Row>
    {/* Shoot */}
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}></p>
    </Col>
    <Col md={3} >
    <p className={`${styles.Underline7}`}>Shoot</p>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{other_sound_labour_qty || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{other_sound_labour_uno || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{other_sound_labour_una}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{other_sound_labour_rt || 0}</p>
    </div>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box2} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{othersoundlabour_total || 0}</p>
    </div>
    </Col>
    </Row>
    {/* Wrap */}
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}></p>
    </Col>
    <Col md={3} >
    <p className={`${styles.Underline7}`}>Wrap</p>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{ot_sound_qty_wrap || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{ot_sound_uno_wrap || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{ot_sound_una_wrap}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{ot_sound_rt_wrap || 0}</p>
    </div>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box2} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{otsoundwrap_total || 0}</p>
    </div>
    </Col>
    </Row>
    {/* Total */}
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline7}`}></p>
    </Col>
    <Col md={7} > 
    <p className={`${styles.Underline}`}>Total</p>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box4} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{otsoundall_total || 0}</p>
    </div>
    </Col>
    </Row>
    </div>
    {/* hr */}
    <Row>
    <Col md={1}></Col>
    <Col md={10} >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* 6th/7th Days */}
    <Row >
    <Col md={1} ></Col>
    <Col md={1}>
    <p className={`${styles.Underline}`}>19.50</p>
    </Col>
    <Col md={5}>
    <p className={`${styles.BoldBlack}`}>6th/7th Days</p>
    </Col>
    <Col md={1}>
    <div className={`${styles.Box5} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{days6th7th_unit_sound} </p>
    </div>
    </Col>
    <Col md={1}>
    <p className={`${styles.Underline}`}></p>
    </Col>
    <Col md={2}>
    <div className={`${styles.Box3} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{days6th7th_sound || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col md={1}></Col>
    <Col md={10} >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Overtime */}
    <Row >
    <Col md={1} ></Col>
    <Col md={1}>
    <p className={`${styles.Underline}`}>19.60</p>
    </Col>
    <Col md={5}>
    <p className={`${styles.Underline}`}>Overtime</p>
    </Col>
    <Col md={1}>
    <div className={`${styles.Box5} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{overtime_unit_sound} </p>
    </div>
    </Col>
    <Col md={1}>
    <p className={`${styles.Underline}`}></p>
    </Col>
    <Col md={2}>
    <div className={`${styles.Box3} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{overtime_sound || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col md={1}></Col>
    <Col md={10} >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Holidays */}
    <Row >
    <Col md={1} ></Col>
    <Col md={1}>
    <p className={`${styles.Underline}`}>19.70</p>
    </Col>
    <Col md={5}>
    <p className={`${styles.Underline}`}>Holidays</p>
    </Col>
    <Col md={1}>
    <div className={`${styles.Box5} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{holidays_unit_sound} </p>
    </div>
    </Col>
    <Col md={1}>
    <p className={`${styles.Underline}`}></p>
    </Col>
    <Col md={2}>
    <div className={`${styles.Box3} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{holidays_sound || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col md={1}></Col>
    <Col md={10} >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Box Rentals */}
    <Row >
    <Col md={1} ></Col>
    <Col md={1}>
    <p className={`${styles.Underline}`}>19.80</p>
    </Col>
    <Col md={5}>
    <p className={`${styles.Underline}`}>Box Rentals</p>
    </Col>
    <Col md={1}>
    <div className={`${styles.Box5} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{box_rent_unit_sound} </p>
    </div>
    </Col>
    <Col md={1}>
    <p className={`${styles.Underline}`}></p>
    </Col>
    <Col md={2}>
    <div className={`${styles.Box3} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{box_rent_sound || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col md={1}></Col>
    <Col md={10} >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Other */}
    <Row >
    <Col md={1} ></Col>
    <Col md={1}>
    <p className={`${styles.Underline}`}>19.90</p>
    </Col>
    <Col md={7}>
    <p className={`${styles.Underline}`}>Other</p>
    </Col>
    <Col md={2}>
    <div className={`${styles.Box3} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{other_solo_sound || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col md={1}></Col>
    <Col md={10} >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Fringes Taxes */}
    <Row >
    <Col md={1} ></Col>
    <Col md={1}>
    <p className={`${styles.Underline}`}>19.91</p>
    </Col>
    <Col md={7}>
    <p className={`${styles.Underline}`}>Fringes & Taxes</p>
    </Col>
    <Col md={2}>
    <div className={`${styles.Box3} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{fringes_taxes_sound || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col md={1}></Col>
    <Col md={10} >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Sound Total */}
    <Row className='mt-3 mb-1' >
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}></p>
    <p></p>
    </Col>
    <Col className={ `${styles.Overview} my-0 pt-1`} md={6} >
    <p className={ `${styles.Bold} pb-0 mb-0`}>TOTAL SOUND LABOUR</p>
    </Col>
    <Col md={1} >
    </Col>
    <Col md={2} >
    <div className={`${styles.Box4} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline} mb-0`}>{soundlabour_total || 0}</p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col md={1}></Col>
    <Col md={10} >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    </div>
    {/* TRANSPORTATION --------------------------------------- */}
    <div className='mt-4'>
    <Row>
    <Col md={1} ></Col>
    <Col xs={1}>
    <p className={`${styles.BoldBlack}`}>20.00</p>
    </Col>
    <Col xs={8}>
    <p className={ `${styles.BoldBlack}`}>TRANSPORTATION LABOUR</p>
    </Col>
    </Row>
    {/* TITLES */}
    <Row className={ `mb-2 py-0`} >
    <Col md={1} ></Col>
    <Col className={ `${styles.Overview} py-1`} md={1} >
    <p className="mb-0">ACCT</p>
    </Col>
    <Col className={ `${styles.Overview} py-1`} md={3} >
    <p className="mb-0">Description</p>
    </Col>
    <Col className={`${styles.Overview} text-center py-1`} md={1} >
    <p className="mb-0">#</p>
    </Col>
    <Col className={`${styles.Overview} text-center py-1`} md={1} >
    <p># Unit</p>
    </Col>
    <Col md={1} className={`${styles.Overview} text-center py-1`} >
    <p className="mb-0">Unit</p>
    </Col>
    <Col md={1} className={`${styles.Overview} text-center py-1`} >
    <p className="mb-0">Price</p>
    </Col>
    <Col md={2} className={`${styles.Overview} text-center py-1`} >
    <p className="mb-0">Total</p>
    </Col>
    <Col md={1}></Col>
    </Row>
    {/* Transport Coordinator */}
    <div>
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline} mb-0`}>20.10</p>
    </Col>
    <Col md={5} >
    <p className={`${styles.BoldBlack} mb-0`}>Transport Coordinator</p>
    </Col>
    </Row>
    {/* Prep */}
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    </Col>
    <Col md={3} >
    <p className={`${styles.Underline7}`}>Prep</p>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
    py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{tp_coor_qty_prep || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{tp_coor_uno_prep || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{tp_coor_una_prep}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{tp_coor_rt_prep || 0}</p>
    </div>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box2} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{tpcoorprep_total || 0}</p>
    </div>
    </Col>
    </Row>
    {/* Shoot */}
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}></p>
    </Col>
    <Col md={3} >
    <p className={`${styles.Underline7}`}>Shoot</p>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{tp_coordinator_qty || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{tp_coordinator_uno || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{tp_coordinator_una}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{tp_coordinator_rt || 0}</p>
    </div>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box2} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{tpcoordinator_total || 0}</p>
    </div>
    </Col>
    </Row>
    {/* Wrap */}
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}></p>
    </Col>
    <Col md={3} >
    <p className={`${styles.Underline7}`}>Wrap</p>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{tp_coor_qty_wrap || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{tp_coor_uno_wrap || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{tp_coor_una_wrap}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{tp_coor_rt_wrap || 0}</p>
    </div>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box2} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{tpcoorwrap_total || 0}</p>
    </div>
    </Col>
    </Row>
    {/* Total */}
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline7}`}></p>
    </Col>
    <Col md={7} > 
    <p className={`${styles.Underline}`}>Total</p>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box4} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{tpcoorall_total || 0}</p>
    </div>
    </Col>
    </Row>
    </div>
    {/* hr */}
    <Row>
    <Col md={1}></Col>
    <Col md={10} >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Transport Captain */}
    <div>
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline} mb-0`}>20.20</p>
    </Col>
    <Col md={5} >
    <p className={`${styles.BoldBlack} mb-0`}>Transport Captain</p>
    </Col>
    </Row>
    {/* Prep */}
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    </Col>
    <Col md={3} >
    <p className={`${styles.Underline7}`}>Prep</p>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
    py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{tp_cap_qty_prep || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{tp_cap_uno_prep || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{tp_cap_una_prep}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{tp_cap_rt_prep || 0}</p>
    </div>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box2} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{tpcapprep_total || 0}</p>
    </div>
    </Col>
    </Row>
    {/* Shoot */}
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}></p>
    </Col>
    <Col md={3} >
    <p className={`${styles.Underline7}`}>Shoot</p>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{tp_captain_qty || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{tp_captain_uno || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{tp_captain_una}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{tp_captain_rt || 0}</p>
    </div>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box2} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{tpcaptain_total || 0}</p>
    </div>
    </Col>
    </Row>
    {/* Wrap */}
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}></p>
    </Col>
    <Col md={3} >
    <p className={`${styles.Underline7}`}>Wrap</p>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{tp_cap_qty_wrap || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{tp_cap_uno_wrap || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{tp_cap_una_wrap}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{tp_cap_rt_wrap || 0}</p>
    </div>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box2} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{tpcapwrap_total || 0}</p>
    </div>
    </Col>
    </Row>
    {/* Total */}
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline7}`}></p>
    </Col>
    <Col md={7} > 
    <p className={`${styles.Underline}`}>Total</p>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box4} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{tpcapall_total || 0}</p>
    </div>
    </Col>
    </Row>
    </div>
    {/* hr */}
    <Row>
    <Col md={1}></Col>
    <Col md={10} >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Transport Manager */}
    <div>
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline} mb-0`}>20.30</p>
    </Col>
    <Col md={5} >
    <p className={`${styles.BoldBlack} mb-0`}>Transport Manager</p>
    </Col>
    </Row>
    {/* Prep */}
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    </Col>
    <Col md={3} >
    <p className={`${styles.Underline7}`}>Prep</p>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
    py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{tp_man_qty_prep || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{tp_man_uno_prep || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{tp_man_una_prep}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{tp_man_rt_prep || 0}</p>
    </div>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box2} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{tpmanprep_total || 0}</p>
    </div>
    </Col>
    </Row>
    {/* Shoot */}
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}></p>
    </Col>
    <Col md={3} >
    <p className={`${styles.Underline7}`}>Shoot</p>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{tp_manager_qty || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{tp_manager_uno || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{tp_manager_una}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{tp_manager_rt || 0}</p>
    </div>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box2} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{tpmanager_total || 0}</p>
    </div>
    </Col>
    </Row>
    {/* Wrap */}
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}></p>
    </Col>
    <Col md={3} >
    <p className={`${styles.Underline7}`}>Wrap</p>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{tp_man_qty_wrap || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{tp_man_uno_wrap || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{tp_man_una_wrap}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{tp_man_rt_wrap || 0}</p>
    </div>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box2} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{tpmanwrap_total || 0}</p>
    </div>
    </Col>
    </Row>
    {/* Total */}
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline7}`}></p>
    </Col>
    <Col md={7} > 
    <p className={`${styles.Underline}`}>Total</p>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box4} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{tpmanall_total || 0}</p>
    </div>
    </Col>
    </Row>
    </div>
    {/* hr */}
    <Row>
    <Col md={1}></Col>
    <Col md={10} >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Head Driver */}
    <div>
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline} mb-0`}>20.40</p>
    </Col>
    <Col md={5} >
    <p className={`${styles.BoldBlack} mb-0`}>Head Driver</p>
    </Col>
    </Row>
    {/* Prep */}
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    </Col>
    <Col md={3} >
    <p className={`${styles.Underline7}`}>Prep</p>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
    py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{head_dr_qty_prep || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{head_dr_uno_prep || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{head_dr_una_prep}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{head_dr_rt_prep || 0}</p>
    </div>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box2} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{headdriprep_total || 0}</p>
    </div>
    </Col>
    </Row>
    {/* Shoot */}
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}></p>
    </Col>
    <Col md={3} >
    <p className={`${styles.Underline7}`}>Shoot</p>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{head_driver_qty || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{head_driver_uno || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{head_driver_una}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{head_driver_rt || 0}</p>
    </div>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box2} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{headdriver_total || 0}</p>
    </div>
    </Col>
    </Row>
    {/* Wrap */}
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}></p>
    </Col>
    <Col md={3} >
    <p className={`${styles.Underline7}`}>Wrap</p>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{head_dr_qty_wrap || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{head_dr_uno_wrap || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{head_dr_una_wrap}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{head_dr_rt_wrap || 0}</p>
    </div>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box2} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{headdriwrap_total || 0}</p>
    </div>
    </Col>
    </Row>
    {/* Total */}
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline7}`}></p>
    </Col>
    <Col md={7} > 
    <p className={`${styles.Underline}`}>Total</p>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box4} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{headdriall_total || 0}</p>
    </div>
    </Col>
    </Row>
    </div>
    {/* hr */}
    <Row>
    <Col md={1}></Col>
    <Col md={10} >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Drivers */}
    <div>
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline} mb-0`}>20.50</p>
    </Col>
    <Col md={5} >
    <p className={`${styles.BoldBlack} mb-0`}>Drivers</p>
    </Col>
    </Row>
    {/* Prep */}
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    </Col>
    <Col md={3} >
    <p className={`${styles.Underline7}`}>Prep</p>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
    py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{drive_qty_prep || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{drive_uno_prep || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{drive_una_prep}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{drive_rt_prep || 0}</p>
    </div>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box2} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{driverprep_total || 0}</p>
    </div>
    </Col>
    </Row>
    {/* Shoot */}
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}></p>
    </Col>
    <Col md={3} >
    <p className={`${styles.Underline7}`}>Shoot</p>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{drivers_qty || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{drivers_uno || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{drivers_una}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{drivers_rt || 0}</p>
    </div>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box2} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{drivers_total || 0}</p>
    </div>
    </Col>
    </Row>
    {/* Wrap */}
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}></p>
    </Col>
    <Col md={3} >
    <p className={`${styles.Underline7}`}>Wrap</p>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{drive_qty_wrap || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{drive_uno_wrap || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{drive_una_wrap}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{drive_rt_wrap || 0}</p>
    </div>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box2} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{driverwrap_total || 0}</p>
    </div>
    </Col>
    </Row>
    {/* Total */}
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline7}`}></p>
    </Col>
    <Col md={7} > 
    <p className={`${styles.Underline}`}>Total</p>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box4} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{driverall_total || 0}</p>
    </div>
    </Col>
    </Row>
    </div>
    {/* hr */}
    <Row>
    <Col md={1}></Col>
    <Col md={10} >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* 6th/7th Days */}
    <Row >
    <Col md={1} ></Col>
    <Col md={1}>
    <p className={`${styles.Underline}`}>20.60</p>
    </Col>
    <Col md={5}>
    <p className={`${styles.BoldBlack}`}>6th/7th Days</p>
    </Col>
    <Col md={1}>
    <div className={`${styles.Box5} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{days6th7th_unit_tran} </p>
    </div>
    </Col>
    <Col md={1}>
    <p className={`${styles.Underline}`}></p>
    </Col>
    <Col md={2}>
    <div className={`${styles.Box3} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{days6th7th_tran || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col md={1}></Col>
    <Col md={10} >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Overtime */}
    <Row >
    <Col md={1} ></Col>
    <Col md={1}>
    <p className={`${styles.Underline}`}>20.70</p>
    </Col>
    <Col md={5}>
    <p className={`${styles.Underline}`}>Overtime</p>
    </Col>
    <Col md={1}>
    <div className={`${styles.Box5} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{overtime_unit_tran} </p>
    </div>
    </Col>
    <Col md={1}>
    <p className={`${styles.Underline}`}></p>
    </Col>
    <Col md={2}>
    <div className={`${styles.Box3} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{overtime_tran || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col md={1}></Col>
    <Col md={10} >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Holidays */}
    <Row >
    <Col md={1} ></Col>
    <Col md={1}>
    <p className={`${styles.Underline}`}>20.80</p>
    </Col>
    <Col md={5}>
    <p className={`${styles.Underline}`}>Holidays</p>
    </Col>
    <Col md={1}>
    <div className={`${styles.Box5} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{holidays_unit_tran} </p>
    </div>
    </Col>
    <Col md={1}>
    <p className={`${styles.Underline}`}></p>
    </Col>
    <Col md={2}>
    <div className={`${styles.Box3} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{holidays_tran || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col md={1}></Col>
    <Col md={10} >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Box Rentals */}
    <Row >
    <Col md={1} ></Col>
    <Col md={1}>
    <p className={`${styles.Underline}`}>20.90</p>
    </Col>
    <Col md={5}>
    <p className={`${styles.Underline}`}>Box Rentals</p>
    </Col>
    <Col md={1}>
    <div className={`${styles.Box5} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{box_rent_unit_tran} </p>
    </div>
    </Col>
    <Col md={1}>
    <p className={`${styles.Underline}`}></p>
    </Col>
    <Col md={2}>
    <div className={`${styles.Box3} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{box_rent_tran || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col md={1}></Col>
    <Col md={10} >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Other */}
    <Row >
    <Col md={1} ></Col>
    <Col md={1}>
    <p className={`${styles.Underline}`}>20.91</p>
    </Col>
    <Col md={7}>
    <p className={`${styles.Underline}`}>Other</p>
    </Col>
    <Col md={2}>
    <div className={`${styles.Box3} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{other_solo_tran || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col md={1}></Col>
    <Col md={10} >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Fringes Taxes */}
    <Row >
    <Col md={1} ></Col>
    <Col md={1}>
    <p className={`${styles.Underline}`}>20.92</p>
    </Col>
    <Col md={7}>
    <p className={`${styles.Underline}`}>Fringes & Taxes</p>
    </Col>
    <Col md={2}>
    <div className={`${styles.Box3} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{fringes_taxes_transport || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col md={1}></Col>
    <Col md={10} >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Transport Total */}
    <Row className='mt-3 mb-1' >
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}></p>
    <p></p>
    </Col>
    <Col className={ `${styles.Overview} my-0 pt-1`} md={6} >
    <p className={ `${styles.Bold} pb-0 mb-0`}>TOTAL TRANSPORTATION LABOUR</p>
    </Col>
    <Col md={1} >
    </Col>
    <Col md={2} >
    <div className={`${styles.Box4} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline} mb-0`}>{transportlabour_total || 0}</p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col md={1}></Col>
    <Col md={10} >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    </div>
    {/* TV SPECIFIC ------------------------------------------ */}
    <div className='mt-4'>
    <Row>
    <Col md={1} ></Col>
    <Col xs={1}>
    <p className={`${styles.BoldBlack}`}>21.00</p>
    </Col>
    <Col xs={8}>
    <p className={ `${styles.BoldBlack}`}>TV SPECIFIC LABOUR</p>
    </Col>
    </Row>
    {/* TITLES */}
    <Row className={ `mb-2 py-0`} >
    <Col md={1} ></Col>
    <Col className={ `${styles.Overview} py-1`} md={1} >
    <p className="mb-0">ACCT</p>
    </Col>
    <Col className={ `${styles.Overview} py-1`} md={3} >
    <p className="mb-0">Description</p>
    </Col>
    <Col className={`${styles.Overview} text-center py-1`} md={1} >
    <p className="mb-0">#</p>
    </Col>
    <Col className={`${styles.Overview} text-center py-1`} md={1} >
    <p># Unit</p>
    </Col>
    <Col md={1} className={`${styles.Overview} text-center py-1`} >
    <p className="mb-0">Unit</p>
    </Col>
    <Col md={1} className={`${styles.Overview} text-center py-1`} >
    <p className="mb-0">Price</p>
    </Col>
    <Col md={2} className={`${styles.Overview} text-center py-1`} >
    <p className="mb-0">Total</p>
    </Col>
    <Col md={1}></Col>
    </Row>
    {/* Technical Supervisor */}
    <div>
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline} mb-0`}>21.10</p>
    </Col>
    <Col md={5} >
    <p className={`${styles.BoldBlack} mb-0`}>Technical Supervisor</p>
    </Col>
    </Row>
    {/* Prep */}
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    </Col>
    <Col md={3} >
    <p className={`${styles.Underline7}`}>Prep</p>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
    py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{tec_sup_qty_prep || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{tec_sup_uno_prep || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{tec_sup_una_prep}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{tec_sup_rt_prep || 0}</p>
    </div>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box2} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{tecsupprep_total || 0}</p>
    </div>
    </Col>
    </Row>
    {/* Shoot */}
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}></p>
    </Col>
    <Col md={3} >
    <p className={`${styles.Underline7}`}>Shoot</p>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{tech_super_qty || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{tech_super_uno || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{tech_super_una}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{tech_super_rt || 0}</p>
    </div>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box2} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{techsuper_total || 0}</p>
    </div>
    </Col>
    </Row>
    {/* Wrap */}
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}></p>
    </Col>
    <Col md={3} >
    <p className={`${styles.Underline7}`}>Wrap</p>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{tec_sup_qty_wrap || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{tec_sup_uno_wrap || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{tec_sup_una_wrap}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{tec_sup_rt_wrap || 0}</p>
    </div>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box2} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{tecsupwrap_total || 0}</p>
    </div>
    </Col>
    </Row>
    {/* Total */}
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline7}`}></p>
    </Col>
    <Col md={7} > 
    <p className={`${styles.Underline}`}>Total</p>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box4} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{tecsupall_total || 0}</p>
    </div>
    </Col>
    </Row>
    </div>
    {/* hr */}
    <Row>
    <Col md={1}></Col>
    <Col md={10} >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Technical Director */}
    <div>
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline} mb-0`}>21.20</p>
    </Col>
    <Col md={5} >
    <p className={`${styles.BoldBlack} mb-0`}>Technical Director</p>
    </Col>
    </Row>
    {/* Prep */}
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    </Col>
    <Col md={3} >
    <p className={`${styles.Underline7}`}>Prep</p>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
    py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{tec_dir_qty_prep || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{tec_dir_uno_prep || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{tec_dir_una_prep}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{tec_dir_rt_prep || 0}</p>
    </div>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box2} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{tecdirprep_total || 0}</p>
    </div>
    </Col>
    </Row>
    {/* Shoot */}
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}></p>
    </Col>
    <Col md={3} >
    <p className={`${styles.Underline7}`}>Shoot</p>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{tech_direct_qty || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{tech_direct_uno || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{tech_direct_una}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{tech_direct_rt || 0}</p>
    </div>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box2} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{techdirect_total || 0}</p>
    </div>
    </Col>
    </Row>
    {/* Wrap */}
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}></p>
    </Col>
    <Col md={3} >
    <p className={`${styles.Underline7}`}>Wrap</p>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{tec_dir_qty_wrap || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{tec_dir_uno_wrap || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{tec_dir_una_wrap}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{tec_dir_rt_wrap || 0}</p>
    </div>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box2} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{tecdirwrap_total || 0}</p>
    </div>
    </Col>
    </Row>
    {/* Total */}
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline7}`}></p>
    </Col>
    <Col md={7} > 
    <p className={`${styles.Underline}`}>Total</p>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box4} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{tecdirall_total || 0}</p>
    </div>
    </Col>
    </Row>
    </div>
    {/* hr */}
    <Row>
    <Col md={1}></Col>
    <Col md={10} >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Floor Manager */}
    <div>
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline} mb-0`}>21.30</p>
    </Col>
    <Col md={5} >
    <p className={`${styles.BoldBlack} mb-0`}>Floor Manager</p>
    </Col>
    </Row>
    {/* Prep */}
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    </Col>
    <Col md={3} >
    <p className={`${styles.Underline7}`}>Prep</p>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
    py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{flo_man_qty_prep || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{flo_man_uno_prep || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{flo_man_una_prep}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{flo_man_rt_prep || 0}</p>
    </div>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box2} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{flomanprep_total || 0}</p>
    </div>
    </Col>
    </Row>
    {/* Shoot */}
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}></p>
    </Col>
    <Col md={3} >
    <p className={`${styles.Underline7}`}>Shoot</p>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{floor_man_qty || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{floor_man_uno || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{floor_man_una}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{floor_man_rt || 0}</p>
    </div>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box2} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{floorman_total || 0}</p>
    </div>
    </Col>
    </Row>
    {/* Wrap */}
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}></p>
    </Col>
    <Col md={3} >
    <p className={`${styles.Underline7}`}>Wrap</p>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{flo_man_qty_wrap || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{flo_man_uno_wrap || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{flo_man_una_wrap}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{flo_man_rt_wrap || 0}</p>
    </div>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box2} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{flomanwrap_total || 0}</p>
    </div>
    </Col>
    </Row>
    {/* Total */}
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline7}`}></p>
    </Col>
    <Col md={7} > 
    <p className={`${styles.Underline}`}>Total</p>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box4} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{flomanall_total || 0}</p>
    </div>
    </Col>
    </Row>
    </div>
    {/* hr */}
    <Row>
    <Col md={1}></Col>
    <Col md={10} >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Lighting Director */}
    <div>
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline} mb-0`}>21.40</p>
    </Col>
    <Col md={5} >
    <p className={`${styles.BoldBlack} mb-0`}>Lighting Director</p>
    </Col>
    </Row>
    {/* Prep */}
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    </Col>
    <Col md={3} >
    <p className={`${styles.Underline7}`}>Prep</p>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
    py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{lig_dir_qty_prep || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{lig_dir_uno_prep || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{lig_dir_una_prep}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{lig_dir_rt_prep || 0}</p>
    </div>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box2} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{ligdirprep_total || 0}</p>
    </div>
    </Col>
    </Row>
    {/* Shoot */}
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}></p>
    </Col>
    <Col md={3} >
    <p className={`${styles.Underline7}`}>Shoot</p>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{light_direct_qty || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{light_direct_uno || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{light_direct_una}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{light_direct_rt || 0}</p>
    </div>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box2} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{lightdirect_total || 0}</p>
    </div>
    </Col>
    </Row>
    {/* Wrap */}
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}></p>
    </Col>
    <Col md={3} >
    <p className={`${styles.Underline7}`}>Wrap</p>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{lig_dir_qty_wrap || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{lig_dir_uno_wrap || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{lig_dir_una_wrap}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{lig_dir_rt_wrap || 0}</p>
    </div>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box2} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{ligdirwrap_total || 0}</p>
    </div>
    </Col>
    </Row>
    {/* Total */}
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline7}`}></p>
    </Col>
    <Col md={7} > 
    <p className={`${styles.Underline}`}>Total</p>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box4} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{ligdirall_total || 0}</p>
    </div>
    </Col>
    </Row>
    </div>
    {/* hr */}
    <Row>
    <Col md={1}></Col>
    <Col md={10} >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Boardman */}
    <div>
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline} mb-0`}>21.50</p>
    </Col>
    <Col md={5} >
    <p className={`${styles.BoldBlack} mb-0`}>Boardman</p>
    </Col>
    </Row>
    {/* Prep */}
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    </Col>
    <Col md={3} >
    <p className={`${styles.Underline7}`}>Prep</p>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
    py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{boardm_qty_prep || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{boardm_uno_prep || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{boardm_una_prep}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{boardm_rt_prep || 0}</p>
    </div>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box2} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{boamanprep_total || 0}</p>
    </div>
    </Col>
    </Row>
    {/* Shoot */}
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}></p>
    </Col>
    <Col md={3} >
    <p className={`${styles.Underline7}`}>Shoot</p>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{boardman_qty || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{boardman_uno || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{boardman_una}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{boardman_rt || 0}</p>
    </div>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box2} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{boardman_total || 0}</p>
    </div>
    </Col>
    </Row>
    {/* Wrap */}
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}></p>
    </Col>
    <Col md={3} >
    <p className={`${styles.Underline7}`}>Wrap</p>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{boardm_qty_wrap || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{boardm_uno_wrap || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{boardm_una_wrap}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{boardm_rt_wrap || 0}</p>
    </div>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box2} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{boamanwrap_total || 0}</p>
    </div>
    </Col>
    </Row>
    {/* Total */}
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline7}`}></p>
    </Col>
    <Col md={7} > 
    <p className={`${styles.Underline}`}>Total</p>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box4} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{boamanall_total || 0}</p>
    </div>
    </Col>
    </Row>
    </div>
    {/* hr */}
    <Row>
    <Col md={1}></Col>
    <Col md={10} >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Audio */}
    <div>
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline} mb-0`}>21.60</p>
    </Col>
    <Col md={5} >
    <p className={`${styles.BoldBlack} mb-0`}>Audio</p>
    </Col>
    </Row>
    {/* Prep */}
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    </Col>
    <Col md={3} >
    <p className={`${styles.Underline7}`}>Prep</p>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
    py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{audio_qty_prep || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{audio_uno_prep || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{audio_una_prep}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{audio_rt_prep || 0}</p>
    </div>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box2} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{audprep_total || 0}</p>
    </div>
    </Col>
    </Row>
    {/* Shoot */}
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}></p>
    </Col>
    <Col md={3} >
    <p className={`${styles.Underline7}`}>Shoot</p>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{audio_qty || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{audio_uno || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{audio_una}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{audio_rt || 0}</p>
    </div>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box2} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{audio_total || 0}</p>
    </div>
    </Col>
    </Row>
    {/* Wrap */}
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}></p>
    </Col>
    <Col md={3} >
    <p className={`${styles.Underline7}`}>Wrap</p>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{audio_qty_wrap || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{audio_uno_wrap || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{audio_una_wrap}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{audio_rt_wrap || 0}</p>
    </div>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box2} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{audwrap_total || 0}</p>
    </div>
    </Col>
    </Row>
    {/* Total */}
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline7}`}></p>
    </Col>
    <Col md={7} > 
    <p className={`${styles.Underline}`}>Total</p>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box4} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{audall_total || 0}</p>
    </div>
    </Col>
    </Row>
    </div>
    {/* hr */}
    <Row>
    <Col md={1}></Col>
    <Col md={10} >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* VRT Operator */}
    <div>
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline} mb-0`}>21.70</p>
    </Col>
    <Col md={5} >
    <p className={`${styles.BoldBlack} mb-0`}>VRT Operator</p>
    </Col>
    </Row>
    {/* Prep */}
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    </Col>
    <Col md={3} >
    <p className={`${styles.Underline7}`}>Prep</p>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
    py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{vtr_op_qty_prep || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{vtr_op_uno_prep || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{vtr_op_una_prep}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{vtr_op_rt_prep || 0}</p>
    </div>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box2} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{vtropprep_total || 0}</p>
    </div>
    </Col>
    </Row>
    {/* Shoot */}
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}></p>
    </Col>
    <Col md={3} >
    <p className={`${styles.Underline7}`}>Shoot</p>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{vtr_operator_qty || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{vtr_operator_uno || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{vtr_operator_una}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{vtr_operator_rt || 0}</p>
    </div>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box2} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{vtroperator_total || 0}</p>
    </div>
    </Col>
    </Row>
    {/* Wrap */}
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}></p>
    </Col>
    <Col md={3} >
    <p className={`${styles.Underline7}`}>Wrap</p>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{vtr_op_qty_wrap || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{vtr_op_uno_wrap || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{vtr_op_una_wrap}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{vtr_op_rt_wrap || 0}</p>
    </div>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box2} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{vtropwrap_total || 0}</p>
    </div>
    </Col>
    </Row>
    {/* Total */}
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline7}`}></p>
    </Col>
    <Col md={7} > 
    <p className={`${styles.Underline}`}>Total</p>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box4} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{vtropall_total || 0}</p>
    </div>
    </Col>
    </Row>
    </div>
    {/* hr */}
    <Row>
    <Col md={1}></Col>
    <Col md={10} >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Stagehands */}
    <div>
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline} mb-0`}>21.80</p>
    </Col>
    <Col md={5} >
    <p className={`${styles.BoldBlack} mb-0`}>Stagehands</p>
    </Col>
    </Row>
    {/* Prep */}
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    </Col>
    <Col md={3} >
    <p className={`${styles.Underline7}`}>Prep</p>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
    py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{stageh_qty_prep || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{stageh_uno_prep || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{stageh_una_prep}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{stageh_rt_prep || 0}</p>
    </div>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box2} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{stagehprep_total || 0}</p>
    </div>
    </Col>
    </Row>
    {/* Shoot */}
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}></p>
    </Col>
    <Col md={3} >
    <p className={`${styles.Underline7}`}>Shoot</p>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{stagehands_qty || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{stagehands_uno || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{stagehands_una}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{stagehands_rt || 0}</p>
    </div>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box2} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{stagehands_total || 0}</p>
    </div>
    </Col>
    </Row>
    {/* Wrap */}
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}></p>
    </Col>
    <Col md={3} >
    <p className={`${styles.Underline7}`}>Wrap</p>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{stageh_qty_wrap || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{stageh_uno_wrap || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{stageh_una_wrap}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{stageh_rt_wrap || 0}</p>
    </div>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box2} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{stagehwrap_total || 0}</p>
    </div>
    </Col>
    </Row>
    {/* Total */}
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline7}`}></p>
    </Col>
    <Col md={7} > 
    <p className={`${styles.Underline}`}>Total</p>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box4} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{stagehall_total || 0}</p>
    </div>
    </Col>
    </Row>
    </div>
    {/* hr */}
    <Row>
    <Col md={1}></Col>
    <Col md={10} >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Other TV Labour */}
    <div>
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline} mb-0`}>21.90</p>
    </Col>
    <Col md={5} >
    <p className={`${styles.BoldBlack} mb-0`}>Add'l TV Specific Labour</p>
    </Col>
    </Row>
    {/* Prep */}
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    </Col>
    <Col md={3} >
    <p className={`${styles.Underline7}`}>Prep</p>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
    py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{oth_tv_qty_prep || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{oth_tv_uno_prep || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{oth_tv_una_prep}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{oth_tv_rt_prep || 0}</p>
    </div>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box2} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{othtvprep_total || 0}</p>
    </div>
    </Col>
    </Row>
    {/* Shoot */}
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}></p>
    </Col>
    <Col md={3} >
    <p className={`${styles.Underline7}`}>Shoot</p>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{other_tv_qty || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{other_tv_uno || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{other_tv_una}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{other_tv_rt || 0}</p>
    </div>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box2} py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{othertv_total || 0}</p>
    </div>
    </Col>
    </Row>
    {/* Wrap */}
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}></p>
    </Col>
    <Col md={3} >
    <p className={`${styles.Underline7}`}>Wrap</p>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{oth_tv_qty_wrap || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{oth_tv_uno_wrap || 0}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{oth_tv_una_wrap}</p>
    </div>
    </Col>
    <Col md={1} >
    <div className={`${styles.Box} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{oth_tv_rt_wrap || 0}</p>
    </div>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box2} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{othtvwrap_total || 0}</p>
    </div>
    </Col>
    </Row>
    {/* Total */}
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline7}`}></p>
    </Col>
    <Col md={7} > 
    <p className={`${styles.Underline}`}>Total</p>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box4} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{othtvall_total || 0}</p>
    </div>
    </Col>
    </Row>
    </div>
    {/* hr */}
    <Row>
    <Col md={1}></Col>
    <Col md={10} >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* 6th/7th Days */}
    <Row >
    <Col md={1} ></Col>
    <Col md={1}>
    <p className={`${styles.Underline}`}>21.91</p>
    </Col>
    <Col md={5}>
    <p className={`${styles.BoldBlack}`}>6th/7th Days</p>
    </Col>
    <Col md={1}>
    <div className={`${styles.Box5} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{days6th7th_unit_tv} </p>
    </div>
    </Col>
    <Col md={1}>
    <p className={`${styles.Underline}`}></p>
    </Col>
    <Col md={2}>
    <div className={`${styles.Box3} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{days6th7th_tv || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col md={1}></Col>
    <Col md={10} >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Overtime */}
    <Row >
    <Col md={1} ></Col>
    <Col md={1}>
    <p className={`${styles.Underline}`}>21.92</p>
    </Col>
    <Col md={5}>
    <p className={`${styles.Underline}`}>Overtime</p>
    </Col>
    <Col md={1}>
    <div className={`${styles.Box5} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{overtime_unit_tv} </p>
    </div>
    </Col>
    <Col md={1}>
    <p className={`${styles.Underline}`}></p>
    </Col>
    <Col md={2}>
    <div className={`${styles.Box3} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{overtime_tv || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col md={1}></Col>
    <Col md={10} >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Holidays */}
    <Row >
    <Col md={1} ></Col>
    <Col md={1}>
    <p className={`${styles.Underline}`}>21.93</p>
    </Col>
    <Col md={5}>
    <p className={`${styles.Underline}`}>Holidays</p>
    </Col>
    <Col md={1}>
    <div className={`${styles.Box5} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{holidays_unit_tv} </p>
    </div>
    </Col>
    <Col md={1}>
    <p className={`${styles.Underline}`}></p>
    </Col>
    <Col md={2}>
    <div className={`${styles.Box3} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{holidays_tv || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col md={1}></Col>
    <Col md={10} >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Box Rentals */}
    <Row >
    <Col md={1} ></Col>
    <Col md={1}>
    <p className={`${styles.Underline}`}>21.94</p>
    </Col>
    <Col md={5}>
    <p className={`${styles.Underline}`}>Box Rentals</p>
    </Col>
    <Col md={1}>
    <div className={`${styles.Box5} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{box_rent_unit_tv} </p>
    </div>
    </Col>
    <Col md={1}>
    <p className={`${styles.Underline}`}></p>
    </Col>
    <Col md={2}>
    <div className={`${styles.Box3} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{box_rent_tv || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col md={1}></Col>
    <Col md={10} >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Other */}
    <Row >
    <Col md={1} ></Col>
    <Col md={1}>
    <p className={`${styles.Underline}`}>21.95</p>
    </Col>
    <Col md={7}>
    <p className={`${styles.Underline}`}>Other</p>
    </Col>
    <Col md={2}>
    <div className={`${styles.Box3} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{other_solo_tv || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col md={1}></Col>
    <Col md={10} >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Fringes Taxes */}
    <Row >
    <Col md={1} ></Col>
    <Col md={1}>
    <p className={`${styles.Underline}`}>21.96</p>
    </Col>
    <Col md={7}>
    <p className={`${styles.Underline}`}>Fringes & Taxes</p>
    </Col>
    <Col md={2}>
    <div className={`${styles.Box3} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{fringes_taxes_tv || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col md={1}></Col>
    <Col md={10} >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* TV Total */}
    <Row className='mt-3 mb-1' >
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}></p>
    <p></p>
    </Col>
    <Col className={ `${styles.Overview} my-0 pt-1`} md={6} >
    <p className={ `${styles.Bold} pb-0 mb-0`}>TOTAL TV SPECIFIC LABOUR</p>
    </Col>
    <Col md={1} >
    </Col>
    <Col md={2} >
    <div className={`${styles.Box4} 
      py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline} mb-0`}>{tvspecificlabour_total || 0}</p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col md={1}></Col>
    <Col md={10} >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    </div>
    {/* TOTAL - BELOW THE LINE "B" PRODUCTION */}
    <div className="mt-5 pl-3">
    <Row >
    <Col md={1} ></Col>
    <Col className={ `${styles.Overview} my-0 pt-1`} md={8} >
    <p className={ `${styles.Bold} pb-0 mb-0`}>TOTAL - "B" PRODUCTION - LABOUR </p>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box3} 
     py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.BoldBlack} `}>{below_the_lineB_total || 0}</p>
    </div>
    </Col>
    </Row>
    </div>
    </div>
    {/* BELOW THE LINE "B" PRODUCTION - COSTS ----------------- */}
    <div className='px-3'>
    <Row >
    <Col md={1} ></Col>
    <Col md={10} className={ `${styles.OverviewBlue} mt-5 mb-3 py-2 d-flex align-items-center justify-content-center`}>
    <h5 className={ `${styles.BoldBlack}`}>BELOW THE LINE - "B" PRODUCTION - COSTS</h5>
    </Col>
    </Row>
    {/* PRODUCTION OFFICE ------------------------------------ */}
    <div className='mt-4'>
    <Row>
    <Col md={1} ></Col>
    <Col xs={1}>
    <p className={`${styles.Underline}`}>22.00</p>
    </Col>
    <Col xs={7}>
    <p className={ `${styles.BoldBlack}`}>PRODUCTION OFFICE</p>
    </Col>
    </Row>
    {/* TITLES */}
    <Row className={ `mb-2 py-0`} >
    <Col md={1} ></Col>
    <Col className={ `${styles.Overview} py-1`} md={1} >
    <p className="mb-0">ACCT</p>
    </Col>
    <Col className={ `${styles.Overview} py-1`} md={3} >
    <p className="mb-0">Description</p>
    </Col>
    <Col className={`${styles.Overview} text-center py-1`} md={1} >
    <p className="mb-0">#</p>
    </Col>
    <Col className={`${styles.Overview} text-center py-1`} md={1} >
    <p># Unit</p>
    </Col>
    <Col md={1} className={`${styles.Overview} text-center py-1`} >
    <p className="mb-0">Unit</p>
    </Col>
    <Col md={1} className={`${styles.Overview} text-center py-1`} >
    <p className="mb-0">Price</p>
    </Col>
    <Col md={2} className={`${styles.Overview} text-center py-1`} >
    <p className="mb-0">Total</p>
    </Col>
    <Col md={1}></Col>
    </Row>
    {/* Office Rentals */}
    <Row>
    <Col md={1} ></Col>
    <Col md={1}>
    <p className={`${styles.Underline}`}>22.10</p>
    </Col>
    <Col md={7}>
    <p className={`${styles.Underline}`}>Office Rentals</p>
    </Col>
    <Col md={2}>
    <div className={`${styles.Box3} 
     d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{office_rentals || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col md={1}></Col>
    <Col md={10} >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Office Equipment */}
    <Row>
    <Col md={1} ></Col>
    <Col md={1}>
    <p className={`${styles.Underline}`}>22.20</p>
    </Col>
    <Col md={7}>
    <p className={`${styles.Underline}`}>Office Equipment</p>
    </Col>
    <Col md={2}>
    <div className={`${styles.Box3} 
     d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{office_equipment || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col md={1}></Col>
    <Col md={10} >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Office Supplies */}
    <Row>
    <Col md={1} ></Col>
    <Col md={1}>
    <p className={`${styles.Underline}`}>22.30</p>
    </Col>
    <Col md={7}>
    <p className={`${styles.Underline}`}>Office Supplies</p>
    </Col>
    <Col md={2}>
    <div className={`${styles.Box3} 
     d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{office_supplies || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col md={1}></Col>
    <Col md={10} >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Phones/Internet/Mobiles */}
    <Row>
    <Col md={1} ></Col>
    <Col md={1}>
    <p className={`${styles.Underline}`}>22.40</p>
    </Col>
    <Col md={7}>
    <p className={`${styles.Underline}`}>Phones/Internet/Mobiles</p>
    </Col>
    <Col md={2}>
    <div className={`${styles.Box3} 
     d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{phones_net || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col md={1}></Col>
    <Col md={10} >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Couriers/Postage */}
    <Row>
    <Col md={1} ></Col>
    <Col md={1}>
    <p className={`${styles.Underline}`}>22.50</p>
    </Col>
    <Col md={7}>
    <p className={`${styles.Underline}`}>Couriers/Postage</p>
    </Col>
    <Col md={2}>
    <div className={`${styles.Box3} 
     d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{courier_postage || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col md={1}></Col>
    <Col md={10} >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Other */}
    <Row>
    <Col md={1} ></Col>
    <Col md={1}>
    <p className={`${styles.Underline}`}>22.60</p>
    </Col>
    <Col md={7}>
    <p className={`${styles.Underline}`}>Other</p>
    </Col>
    <Col md={2}>
    <div className={`${styles.Box3} 
     d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{office_other || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col md={1}></Col>
    <Col md={10} >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Production Office Total */}
    <Row className='mt-3 mb-1' >
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}></p>
    <p></p>
    </Col>
    <Col className={ `${styles.Overview} my-0 pt-1`} md={6} >
    <p className={ `${styles.BoldBlack} pb-0 mb-0`}>TOTAL PRODUCTION OFFICE </p>
    </Col>
    <Col md={1} >
    </Col>
    <Col md={2} >
    <div className={`${styles.Box4} 
     py-2 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline} mb-0`}>{proOff_total || 0}</p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col md={1}></Col>
    <Col md={10} >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    </div>
    {/* STUDIO ----------------------------------------------- */}
    <div className='mt-4'>
    <Row>
    <Col md={1} ></Col>
    <Col xs={1}>
    <p className={`${styles.Underline}`}>23.00</p>
    </Col>
    <Col xs={8}>
    <p className={ `${styles.BoldBlack}`}>STUDIO/BACKLOT EXPENSES</p>
    </Col>
    </Row>
    {/* TITLES */}
    <Row className={ `mb-2 py-0`} >
    <Col md={1} ></Col>
    <Col className={ `${styles.Overview} py-1`} md={1} >
    <p className="mb-0">ACCT</p>
    </Col>
    <Col className={ `${styles.Overview} py-1`} md={3} >
    <p className="mb-0">Description</p>
    </Col>
    <Col className={`${styles.Overview} text-center py-1`} md={1} >
    <p className="mb-0">#</p>
    </Col>
    <Col className={`${styles.Overview} text-center py-1`} md={1} >
    <p># Unit</p>
    </Col>
    <Col md={1} className={`${styles.Overview} text-center py-1`} >
    <p className="mb-0">Unit</p>
    </Col>
    <Col md={1} className={`${styles.Overview} text-center py-1`} >
    <p className="mb-0">Price</p>
    </Col>
    <Col md={2} className={`${styles.Overview} text-center py-1`} >
    <p className="mb-0">Total</p>
    </Col>
    <Col md={1}></Col>
    </Row>
    {/* Studio/Backlot Rentals */}
    <Row>
    <Col md={1} ></Col>
    <Col md={1}>
    <p className={`${styles.Underline}`}>23.10</p>
    </Col>
    <Col md={7}>
    <p className={`${styles.Underline}`}>Studio/Backlot Rentals</p>
    </Col>
    <Col md={2}>
    <div className={`${styles.Box3} 
     py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{studio_rentals || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col md={1}></Col>
    <Col md={10} >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Power */}
    <Row>
    <Col md={1} ></Col>
    <Col md={1}>
    <p className={`${styles.Underline}`}>23.20</p>
    </Col>
    <Col md={7}>
    <p className={`${styles.Underline}`}>Power</p>
    </Col>
    <Col md={2}>
    <div className={`${styles.Box3} 
     py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{power || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col md={1}></Col>
    <Col md={10} >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Carpentry Shop Rentals */}
    <Row>
    <Col md={1} ></Col>
    <Col md={1}>
    <p className={`${styles.Underline}`}>23.30</p>
    </Col>
    <Col md={7}>
    <p className={`${styles.Underline}`}>Carpentry Shop Rentals</p>
    </Col>
    <Col md={2}>
    <div className={`${styles.Box3} 
     py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{carpentry_rentals || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col md={1}></Col>
    <Col md={10} >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Special Effects Equipment */}
    <Row>
    <Col md={1} ></Col>
    <Col md={1}>
    <p className={`${styles.Underline}`}>23.40</p>
    </Col>
    <Col md={7}>
    <p className={`${styles.Underline}`}>Special Effects Equipment</p>
    </Col>
    <Col md={2}>
    <div className={`${styles.Box3} 
     py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{studio_fx_equipment || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col md={1}></Col>
    <Col md={10} >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Security */}
    <Row>
    <Col md={1} ></Col>
    <Col md={1}>
    <p className={`${styles.Underline}`}>23.50</p>
    </Col>
    <Col md={7}>
    <p className={`${styles.Underline}`}>Security</p>
    </Col>
    <Col md={2}>
    <div className={`${styles.Box3} 
     py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{studio_security || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col md={1}></Col>
    <Col md={10} >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Other */}
    <Row>
    <Col md={1} ></Col>
    <Col md={1}>
    <p className={`${styles.Underline}`}>23.60</p>
    </Col>
    <Col md={7}>
    <p className={`${styles.Underline}`}>Other - Studio</p>
    </Col>
    <Col md={2}>
    <div className={`${styles.Box3} 
     py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{studio_other || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col md={1}></Col>
    <Col md={10} >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Studio Total */}
    <Row className='mt-3 mb-1' >
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}></p>
    <p></p>
    </Col>
    <Col className={ `${styles.Overview} my-0 pt-1`} md={6} >
    <p className={ `${styles.Bold} pb-0 mb-0`}>TOTAL STUDIO/BACKLOT EXPENSES </p>
    </Col>
    <Col md={1} >
    </Col>
    <Col md={2} >
    <div className={`${styles.Box4} 
     py-0 d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline} mb-0`}>{studio_total || 0}</p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col md={1}></Col>
    <Col md={10} >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    </div>
    {/* SITE ------------------------------------------------- */}
    <div className='mt-4'>
    <Row>
    <Col md={1} ></Col>
    <Col xs={1}>
    <p className={`${styles.Underline}`}>24.00</p>
    </Col>
    <Col xs={8}>
    <p className={ `${styles.BoldBlack}`}>SITE EXPENSES</p>
    </Col>
    </Row>
    {/* TITLES */}
    <Row className={ `mb-2 py-0`} >
    <Col md={1} ></Col>
    <Col className={ `${styles.Overview} py-1`} md={1} >
    <p className="mb-0">ACCT</p>
    </Col>
    <Col className={ `${styles.Overview} py-1`} md={3} >
    <p className="mb-0">Description</p>
    </Col>
    <Col className={`${styles.Overview} text-center py-1`} md={1} >
    <p className="mb-0">#</p>
    </Col>
    <Col className={`${styles.Overview} text-center py-1`} md={1} >
    <p># Unit</p>
    </Col>
    <Col md={1} className={`${styles.Overview} text-center py-1`} >
    <p className="mb-0">Unit</p>
    </Col>
    <Col md={1} className={`${styles.Overview} text-center py-1`} >
    <p className="mb-0">Price</p>
    </Col>
    <Col md={2} className={`${styles.Overview} text-center py-1`} >
    <p className="mb-0">Total</p>
    </Col>
    <Col md={1}></Col>
    </Row>
    {/* Surveying/Scouting */}
    <Row>
    <Col md={1} ></Col>
    <Col md={1}>
    <p className={`${styles.Underline}`}>24.10</p>
    </Col>
    <Col md={7}>
    <p className={`${styles.Underline}`}>Surveying/Scouting Expences</p>
    </Col>
    <Col md={2}>
    <div className={`${styles.Box3} 
     d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{surveying_scouting || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col md={1}></Col>
    <Col md={10} >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Site Rentals */}
    <Row>
    <Col md={1} ></Col>
    <Col md={1}>
    <p className={`${styles.Underline}`}>24.20</p>
    </Col>
    <Col md={7}>
    <p className={`${styles.Underline}`}>Site Rentals</p>
    </Col>
    <Col md={2}>
    <div className={`${styles.Box3} 
     d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{site_rentals || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col md={1}></Col>
    <Col md={10} >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Site Power */}
    <Row>
    <Col md={1} ></Col>
    <Col md={1}>
    <p className={`${styles.Underline}`}>24.30</p>
    </Col>
    <Col md={7}>
    <p className={`${styles.Underline}`}>Site Power</p>
    </Col>
    <Col md={2}>
    <div className={`${styles.Box3} 
     d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{site_power || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col md={1}></Col>
    <Col md={10} >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Site Access */}
    <Row>
    <Col md={1} ></Col>
    <Col md={1}>
    <p className={`${styles.Underline}`}>24.40</p>
    </Col>
    <Col md={7}>
    <p className={`${styles.Underline}`}>Site Access</p>
    </Col>
    <Col md={2}>
    <div className={`${styles.Box3} 
     d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{site_access || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col md={1}></Col>
    <Col md={10} >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Site Insurance */}
    <Row>
    <Col md={1} ></Col>
    <Col md={1}>
    <p className={`${styles.Underline}`}>24.50</p>
    </Col>
    <Col md={7}>
    <p className={`${styles.Underline}`}>Site Insurance</p>
    </Col>
    <Col md={2}>
    <div className={`${styles.Box3} 
     d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{site_insurance || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col md={1}></Col>
    <Col md={10} >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Repairs/Construction */}
    <Row>
    <Col md={1} ></Col>
    <Col md={1}>
    <p className={`${styles.Underline}`}>24.60</p>
    </Col>
    <Col md={7}>
    <p className={`${styles.Underline}`}>Repairs/Construction</p>
    </Col>
    <Col md={2}>
    <div className={`${styles.Box3} 
     d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{repairs_construction || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col md={1}></Col>
    <Col md={10} >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Security */}
    <Row>
    <Col md={1} ></Col>
    <Col md={1}>
    <p className={`${styles.Underline}`}>24.70</p>
    </Col>
    <Col md={7}>
    <p className={`${styles.Underline}`}>Security</p>
    </Col>
    <Col md={2}>
    <div className={`${styles.Box3} 
     d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{site_security || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col md={1}></Col>
    <Col md={10} >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Police Control */}
    <Row>
    <Col md={1} ></Col>
    <Col md={1}>
    <p className={`${styles.Underline}`}>24.80</p>
    </Col>
    <Col md={7}>
    <p className={`${styles.Underline}`}>Police Control</p>
    </Col>
    <Col md={2}>
    <div className={`${styles.Box3} 
     d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{police_control || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col md={1}></Col>
    <Col md={10} >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Other */}
    <Row>
    <Col md={1} ></Col>
    <Col md={1}>
    <p className={`${styles.Underline}`}>24.90</p>
    </Col>
    <Col md={7}>
    <p className={`${styles.Underline}`}>Other</p>
    </Col>
    <Col md={2}>
    <div className={`${styles.Box3} 
    d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{site_other || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col md={1}></Col>
    <Col md={10} >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Site Total */}
    <Row className='mt-3 mb-1' >
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}></p>
    <p></p>
    </Col>
    <Col className={ `${styles.Overview} my-0 pt-1`} md={6} >
    <p className={ `${styles.Bold} pb-0 mb-0`}>TOTAL SITE EXPENSES </p>
    </Col>
    <Col md={1} >
    </Col>
    <Col md={2} >
    <div className={`${styles.Box4} 
     d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline} mb-0`}>{site_total || 0}</p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col md={1}></Col>
    <Col md={10} >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    </div>   
    {/* UNIT ------------------------------------------------- */}
    <div className='mt-4'>
    <Row>
    <Col md={1} ></Col>
    <Col xs={1}>
    <p className={`${styles.Underline}`}>25.00</p>
    </Col>
    <Col xs={8}>
    <p className={ `${styles.BoldBlack}`}>UNIT EXPENSES</p>
    </Col>
    </Row>
    {/* TITLES */}
    <Row className={ `mb-2 py-0`} >
    <Col md={1} ></Col>
    <Col className={ `${styles.Overview} py-1`} md={1} >
    <p className="mb-0">ACCT</p>
    </Col>
    <Col className={ `${styles.Overview} py-1`} md={3} >
    <p className="mb-0">Description</p>
    </Col>
    <Col className={`${styles.Overview} text-center py-1`} md={1} >
    <p className="mb-0">#</p>
    </Col>
    <Col className={`${styles.Overview} text-center py-1`} md={1} >
    <p># Unit</p>
    </Col>
    <Col md={1} className={`${styles.Overview} text-center py-1`} >
    <p className="mb-0">Unit</p>
    </Col>
    <Col md={1} className={`${styles.Overview} text-center py-1`} >
    <p className="mb-0">Price</p>
    </Col>
    <Col md={2} className={`${styles.Overview} text-center py-1`} >
    <p className="mb-0">Total</p>
    </Col>
    <Col md={1}></Col>
    </Row>
    {/* Catering */}
    <Row>
    <Col md={1} ></Col>
    <Col md={1}>
    <p className={`${styles.Underline}`}>25.10</p>
    </Col>
    <Col md={7}>
    <p className={`${styles.Underline}`}>Catering</p>
    </Col>
    <Col md={2}>
    <div className={`${styles.Box3} 
         d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{catering || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col md={1}></Col>
    <Col md={10} >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Craft Expenses */}
    <Row>
    <Col md={1} ></Col>
    <Col md={1}>
    <p className={`${styles.Underline}`}>25.20</p>
    </Col>
    <Col md={7}>
    <p className={`${styles.Underline}`}>Craft Expenses</p>
    </Col>
    <Col md={2}>
    <div className={`${styles.Box3} 
         d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{craft_expenses || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col md={1}></Col>
    <Col md={10} >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Meal Penalty */}
    <Row>
    <Col md={1} ></Col>
    <Col md={1}>
    <p className={`${styles.Underline}`}>25.30</p>
    </Col>
    <Col md={7}>
    <p className={`${styles.Underline}`}>Meal Penalty</p>
    </Col>
    <Col md={2}>
    <div className={`${styles.Box3} 
       d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{meal_penalty || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col md={1}></Col>
    <Col md={10} >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Support Area/Green Room */}
    <Row>
    <Col md={1} ></Col>
    <Col md={1}>
    <p className={`${styles.Underline}`}>25.40</p>
    </Col>
    <Col md={7}>
    <p className={`${styles.Underline}`}>Support Area/Green Room</p>
    </Col>
    <Col md={2}>
    <div className={`${styles.Box3} 
       d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{green_room || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col md={1}></Col>
    <Col md={10} >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* First Aid */}
    <Row>
    <Col md={1} ></Col>
    <Col md={1}>
    <p className={`${styles.Underline}`}>25.50</p>
    </Col>
    <Col md={7}>
    <p className={`${styles.Underline}`}>First Aid</p>
    </Col>
    <Col md={2}>
    <div className={`${styles.Box3} 
       d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{first_aid || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col md={1}></Col>
    <Col md={10} >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Special Crew Outfitting */}
    <Row>
    <Col md={1} ></Col>
    <Col md={1}>
    <p className={`${styles.Underline}`}>25.60</p>
    </Col>
    <Col md={7}>
    <p className={`${styles.Underline}`}>Special Crew Outfitting</p>
    </Col>
    <Col md={2}>
    <div className={`${styles.Box3} 
       d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{outfitting || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col md={1}></Col>
    <Col md={10} >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Medical/Insurance/Visa Expenses */}
    <Row>
    <Col md={1} ></Col>
    <Col md={1}>
    <p className={`${styles.Underline}`}>25.70</p>
    </Col>
    <Col md={7}>
    <p className={`${styles.Underline}`}>Medical/Insurance/Visa Expenses</p>
    </Col>
    <Col md={2}>
    <div className={`${styles.Box3} 
       d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{medical_insurance || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col md={1}></Col>
    <Col md={10} >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Other */}
    <Row>
    <Col md={1} ></Col>
    <Col md={1}>
    <p className={`${styles.Underline}`}>25.80</p>
    </Col>
    <Col md={7}>
    <p className={`${styles.Underline}`}>Other</p>
    </Col>
    <Col md={2}>
    <div className={`${styles.Box3} 
       d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{unit_other || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col md={1}></Col>
    <Col md={10} >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Unit Total */}
    <Row className='mt-3 mb-1' >
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}></p>
    <p></p>
    </Col>
    <Col className={ `${styles.Overview} my-0 pt-1`} md={6} >
    <p className={ `${styles.Bold} pb-0 mb-0`}>TOTAL UNIT EXPENSES </p>
    </Col>
    <Col md={1} >
    </Col>
    <Col md={2} >
    <div className={`${styles.Box3} 
       d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline} mb-0`}>{unit_total || 0}</p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col md={1}></Col>
    <Col md={10} >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    </div>
    {/* TRAVEL & lIVING -------------------------------------- */}
    <div className='mt-4'>
    <Row>
    <Col md={1} ></Col>
    <Col xs={1}>
    <p className={`${styles.Underline}`}>26.00</p>
    </Col>
    <Col xs={8}>
    <p className={ `${styles.BoldBlack}`}>TRAVEL & LIVING</p>
    </Col>
    </Row>
    {/* TITLES */}
    <Row className={ `mb-2 py-0`} >
    <Col md={1} ></Col>
    <Col className={ `${styles.Overview} py-1`} md={1} >
    <p className="mb-0">ACCT</p>
    </Col>
    <Col className={ `${styles.Overview} py-1`} md={3} >
    <p className="mb-0">Description</p>
    </Col>
    <Col className={`${styles.Overview} text-center py-1`} md={1} >
    <p className="mb-0">#</p>
    </Col>
    <Col className={`${styles.Overview} text-center py-1`} md={1} >
    <p># Unit</p>
    </Col>
    <Col md={1} className={`${styles.Overview} text-center py-1`} >
    <p className="mb-0">Unit</p>
    </Col>
    <Col md={1} className={`${styles.Overview} text-center py-1`} >
    <p className="mb-0">Price</p>
    </Col>
    <Col md={2} className={`${styles.Overview} text-center py-1`} >
    <p className="mb-0">Total</p>
    </Col>
    <Col md={1}></Col>
    </Row>
    {/* Fares */}
    <Row>
    <Col md={1} ></Col>
    <Col md={1}>
    <p className={`${styles.Underline}`}>26.10</p>
    </Col>
    <Col md={7}>
    <p className={`${styles.Underline}`}>Fares</p>
    </Col>
    <Col md={2}>
    <div className={`${styles.Box3} 
       d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{fares || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col md={1}></Col>
    <Col md={10} >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Accommodation/Hotels */}
    <Row>
    <Col md={1} ></Col>
    <Col md={1}>
    <p className={`${styles.Underline}`}>26.20</p>
    </Col>
    <Col md={7}>
    <p className={`${styles.Underline}`}>Accommodation/Hotels</p>
    </Col>
    <Col md={2}>
    <div className={`${styles.Box3} 
       d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{accomatation_hotels || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col md={1}></Col>
    <Col md={10} >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Per diems */}
    <Row>
    <Col md={1} ></Col>
    <Col md={1}>
    <p className={`${styles.Underline}`}>26.30</p>
    </Col>
    <Col md={7}>
    <p className={`${styles.Underline}`}>Per diems</p>
    </Col>
    <Col md={2}>
    <div className={`${styles.Box3} 
       d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{per_diems || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col md={1}></Col>
    <Col md={10} >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Taxis/Limousines */}
    <Row>
    <Col md={1} ></Col>
    <Col md={1}>
    <p className={`${styles.Underline}`}>26.40</p>
    </Col>
    <Col md={7}>
    <p className={`${styles.Underline}`}>Taxis/Limousines/Car Allowances</p>
    </Col>
    <Col md={2}>
    <div className={`${styles.Box3} 
       d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{taxis_limos || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col md={1}></Col>
    <Col md={10} >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Shipping */}
    <Row>
    <Col md={1} ></Col>
    <Col md={1}>
    <p className={`${styles.Underline}`}>26.50</p>
    </Col>
    <Col md={7}>
    <p className={`${styles.Underline}`}>Shipping</p>
    </Col>
    <Col md={2}>
    <div className={`${styles.Box3} 
       d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{shipping || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col md={1}></Col>
    <Col md={10} >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Customs Brokerage */}
    <Row>
    <Col md={1} ></Col>
    <Col md={1}>
    <p className={`${styles.Underline}`}>26.60</p>
    </Col>
    <Col md={7}>
    <p className={`${styles.Underline}`}>Customs Brokerage</p>
    </Col>
    <Col md={2}>
    <div className={`${styles.Box3} 
       d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{customs_brokerage || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col md={1}></Col>
    <Col md={10} >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Other */}
    <Row>
    <Col md={1} ></Col>
    <Col md={1}>
    <p className={`${styles.Underline}`}>27.60</p>
    </Col>
    <Col md={7}>
    <p className={`${styles.Underline}`}>Other</p>
    </Col>
    <Col md={2}>
    <div className={`${styles.Box3} 
       d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{other_trav_liv || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col md={1}></Col>
    <Col md={10} >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* TRAVEL & LIVING Total */}
    <Row className='mt-3 mb-1' >
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}></p>
    <p></p>
    </Col>
    <Col className={ `${styles.Overview} my-0 pt-1`} md={6} >
    <p className={ `${styles.Bold} pb-0 mb-0`}>TOTAL TRAVEL & LIVING </p>
    </Col>
    <Col md={1} >
    </Col>
    <Col md={2} >
    <div className={`${styles.Box4} 
       d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline} mb-0`}>{traliv_total || 0}</p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col md={1}></Col>
    <Col md={10} >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    </div>
    {/* TRANSPORTATION --------------------------------------- */}
    <div className='mt-4'>
    <Row>
    <Col md={1} ></Col>
    <Col xs={1}>
    <p className={`${styles.Underline}`}>27.00</p>
    </Col>
    <Col xs={7}>
    <p className={ `${styles.BoldBlack}`}>TRANSPORTATION</p>
    </Col>
    </Row>
    {/* TITLES */}
    <Row className={ `mb-2 py-0`} >
    <Col md={1} ></Col>
    <Col className={ `${styles.Overview} py-1`} md={1} >
    <p className="mb-0">ACCT</p>
    </Col>
    <Col className={ `${styles.Overview} py-1`} md={3} >
    <p className="mb-0">Description</p>
    </Col>
    <Col className={`${styles.Overview} text-center py-1`} md={1} >
    <p className="mb-0">#</p>
    </Col>
    <Col className={`${styles.Overview} text-center py-1`} md={1} >
    <p># Unit</p>
    </Col>
    <Col md={1} className={`${styles.Overview} text-center py-1`} >
    <p className="mb-0">Unit</p>
    </Col>
    <Col md={1} className={`${styles.Overview} text-center py-1`} >
    <p className="mb-0">Price</p>
    </Col>
    <Col md={2} className={`${styles.Overview} text-center py-1`} >
    <p className="mb-0">Total</p>
    </Col>
    <Col md={1}></Col>
    </Row>
    {/* Production Cars */}
    <Row>
    <Col md={1} ></Col>
    <Col md={1}>
    <p className={`${styles.Underline}`}>27.10</p>
    </Col>
    <Col md={7}>
    <p className={`${styles.Underline}`}>Production Cars</p>
    </Col>
    <Col md={2}>
    <div className={`${styles.Box3} 
       d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{production_cars || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col md={1}></Col>
    <Col md={10} >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Trucks/Vans */}
    <Row>
    <Col md={1} ></Col>
    <Col md={1}>
    <p className={`${styles.Underline}`}>27.20</p>
    </Col>
    <Col md={7}>
    <p className={`${styles.Underline}`}>Trucks/Vans</p>
    </Col>
    <Col md={2}>
    <div className={`${styles.Box3} 
       d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{trucks_vans || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col md={1}></Col>
    <Col md={10} >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Buses */}
    <Row>
    <Col md={1} ></Col>
    <Col md={1}>
    <p className={`${styles.Underline}`}>27.30</p>
    </Col>
    <Col md={7}>
    <p className={`${styles.Underline}`}>Buses</p>
    </Col>
    <Col md={2}>
    <div className={`${styles.Box3} 
       d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{buses || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col md={1}></Col>
    <Col md={10} >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Motorhomes */}
    <Row>
    <Col md={1} ></Col>
    <Col md={1}>
    <p className={`${styles.Underline}`}>27.40</p>
    </Col>
    <Col md={7}>
    <p className={`${styles.Underline}`}>Motorhomes</p>
    </Col>
    <Col md={2}>
    <div className={`${styles.Box3} 
       d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{motorhomes || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col md={1}></Col>
    <Col md={10} >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Talent Cars */}
    <Row>
    <Col md={1} ></Col>
    <Col md={1}>
    <p className={`${styles.Underline}`}>27.50</p>
    </Col>
    <Col md={7}>
    <p className={`${styles.Underline}`}>Talent Cars</p>
    </Col>
    <Col md={2}>
    <div className={`${styles.Box3} 
       d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{talent_cars || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col md={1}></Col>
    <Col md={10} >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Special Support Vehicles */}
    <Row>
    <Col md={1} ></Col>
    <Col md={1}>
    <p className={`${styles.Underline}`}>27.60</p>
    </Col>
    <Col md={7}>
    <p className={`${styles.Underline}`}>Special Support Vehicles</p>
    </Col>
    <Col md={2}>
    <div className={`${styles.Box3} 
       d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{support_vehicles || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col md={1}></Col>
    <Col md={10} >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Boats/Planes */}
    <Row>
    <Col md={1} ></Col>
    <Col md={1}>
    <p className={`${styles.Underline}`}>27.70</p>
    </Col>
    <Col md={7}>
    <p className={`${styles.Underline}`}>Boats/Planes</p>
    </Col>
    <Col md={2}>
    <div className={`${styles.Box3} 
       d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{boats_planes || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col md={1}></Col>
    <Col md={10} >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Fuel */}
    <Row>
    <Col md={1} ></Col>
    <Col md={1}>
    <p className={`${styles.Underline}`}>27.80</p>
    </Col>
    <Col md={7}>
    <p className={`${styles.Underline}`}>Fuel</p>
    </Col>
    <Col md={2}>
    <div className={`${styles.Box3} 
       d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{fuel || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col md={1}></Col>
    <Col md={10} >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Repairs */}
    <Row>
    <Col md={1} ></Col>
    <Col md={1}>
    <p className={`${styles.Underline}`}>27.90</p>
    </Col>
    <Col md={7}>
    <p className={`${styles.Underline}`}>Repairs</p>
    </Col>
    <Col md={2}>
    <div className={`${styles.Box3} 
       d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{repairs || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col md={1}></Col>
    <Col md={10} >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Taxis */}
    <Row>
    <Col md={1} ></Col>
    <Col md={1}>
    <p className={`${styles.Underline}`}>27.91</p>
    </Col>
    <Col md={7}>
    <p className={`${styles.Underline}`}>Taxis</p>
    </Col>
    <Col md={2}>
    <div className={`${styles.Box3} 
       d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{taxis || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col md={1}></Col>
    <Col md={10} >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Parking */}
    <Row>
    <Col md={1} ></Col>
    <Col md={1}>
    <p className={`${styles.Underline}`}>27.92</p>
    </Col>
    <Col md={7}>
    <p className={`${styles.Underline}`}>Parking</p>
    </Col>
    <Col md={2}>
    <div className={`${styles.Box3} 
       d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{parking || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col md={1}></Col>
    <Col md={10} >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Special Licenses/Permits */}
    <Row>
    <Col md={1} ></Col>
    <Col md={1}>
    <p className={`${styles.Underline}`}>27.93</p>
    </Col>
    <Col md={7}>
    <p className={`${styles.Underline}`}>Special Licenses/Permits</p>
    </Col>
    <Col md={2}>
    <div className={`${styles.Box3} 
       d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{licenses_permits || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col md={1}></Col>
    <Col md={10} >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Brokerage/Insurance */}
    <Row>
    <Col md={1} ></Col>
    <Col md={1}>
    <p className={`${styles.Underline}`}>27.94</p>
    </Col>
    <Col md={7}>
    <p className={`${styles.Underline}`}>Brokerage/Insurance</p>
    </Col>
    <Col md={2}>
    <div className={`${styles.Box3} 
       d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{brokerage_insurance || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col md={1}></Col>
    <Col md={10} >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Other */}
    <Row>
    <Col md={1} ></Col>
    <Col md={1}>
    <p className={`${styles.Underline}`}>27.95</p>
    </Col>
    <Col md={7}>
    <p className={`${styles.Underline}`}>Other</p>
    </Col>
    <Col md={2}>
    <div className={`${styles.Box3} 
       d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{other_transport || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col md={1}></Col>
    <Col md={10} >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* TRANSPORTATION Total */}
    <Row className='mt-3 mb-1' >
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}></p>
    <p></p>
    </Col>
    <Col className={ `${styles.Overview} my-0 pt-1`} md={6} >
    <p className={ `${styles.Bold} pb-0 mb-0`}>TOTAL TRANSPORTATION </p>
    </Col>
    <Col md={1} >
    </Col>
    <Col md={2} >
    <div className={`${styles.Box4} 
       d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline} mb-0`}>{transport_total || 0}</p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col md={1}></Col>
    <Col md={10} >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    </div>
    {/* CONSTRUCTION MATERIAL -------------------------------- */}
    <div className='mt-4'>
    <Row>
    <Col md={1} ></Col>
    <Col xs={1}>
    <p className={`${styles.Underline}`}>28.00</p>
    </Col>
    <Col xs={8}>
    <p className={ `${styles.BoldBlack}`}>CONSTRUCTION MATERIALS</p>
    </Col>
    </Row>
    {/* TITLES */}
    <Row className={ `mb-2 py-0`} >
    <Col md={1} ></Col>
    <Col className={ `${styles.Overview} py-1`} md={1} >
    <p className="mb-0">ACCT</p>
    </Col>
    <Col className={ `${styles.Overview} py-1`} md={3} >
    <p className="mb-0">Description</p>
    </Col>
    <Col className={`${styles.Overview} text-center py-1`} md={1} >
    <p className="mb-0">#</p>
    </Col>
    <Col className={`${styles.Overview} text-center py-1`} md={1} >
    <p># Unit</p>
    </Col>
    <Col md={1} className={`${styles.Overview} text-center py-1`} >
    <p className="mb-0">Unit</p>
    </Col>
    <Col md={1} className={`${styles.Overview} text-center py-1`} >
    <p className="mb-0">Price</p>
    </Col>
    <Col md={2} className={`${styles.Overview} text-center py-1`} >
    <p className="mb-0">Total</p>
    </Col>
    <Col md={1}></Col>
    </Row>
    {/* Carpentry Rentals */}
    <Row>
    <Col md={1} ></Col>
    <Col md={1}>
    <p className={`${styles.Underline}`}>28.10</p>
    </Col>
    <Col md={7}>
    <p className={`${styles.Underline}`}>Carpentry Rentals</p>
    </Col>
    <Col md={2}>
    <div className={`${styles.Box3} 
    d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{rentals_carpentry || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col md={1}></Col>
    <Col md={10} >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Carpentry Purchases */}
    <Row>
    <Col md={1} ></Col>
    <Col md={1}>
    <p className={`${styles.Underline}`}>28.20</p>
    </Col>
    <Col md={7}>
    <p className={`${styles.Underline}`}>Carpentry Purchases</p>
    </Col>
    <Col md={2}>
    <div className={`${styles.Box3} 
    d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{carpentry_purchases || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col md={1}></Col>
    <Col md={10} >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Painting Rentals */}
    <Row>
    <Col md={1} ></Col>
    <Col md={1}>
    <p className={`${styles.Underline}`}>28.30</p>
    </Col>
    <Col md={7}>
    <p className={`${styles.Underline}`}>Painting Rentals</p>
    </Col>
    <Col md={2}>
    <div className={`${styles.Box3} 
    d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{painting_rentals || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col md={1}></Col>
    <Col md={10} >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Painting Purchases */}
    <Row>
    <Col md={1} ></Col>
    <Col md={1}>
    <p className={`${styles.Underline}`}>28.40</p>
    </Col>
    <Col md={7}>
    <p className={`${styles.Underline}`}>Painting Purchases</p>
    </Col>
    <Col md={2}>
    <div className={`${styles.Box3} 
    d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{painting_purchases || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col md={1}></Col>
    <Col md={10} >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Backdrops/Murals */}
    <Row>
    <Col md={1} ></Col>
    <Col md={1}>
    <p className={`${styles.Underline}`}>28.50</p>
    </Col>
    <Col md={7}>
    <p className={`${styles.Underline}`}>Backdrops/Murals</p>
    </Col>
    <Col md={2}>
    <div className={`${styles.Box3} 
    d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{backdrops_murals || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col md={1}></Col>
    <Col md={10} >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Scaffolding */}
    <Row>
    <Col md={1} ></Col>
    <Col md={1}>
    <p className={`${styles.Underline}`}>28.60</p>
    </Col>
    <Col md={7}>
    <p className={`${styles.Underline}`}>Scaffolding</p>
    </Col>
    <Col md={2}>
    <div className={`${styles.Box3} 
    d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{scaffolding || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col md={1}></Col>
    <Col md={10} >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Warehouse Rental */}
    <Row>
    <Col md={1} ></Col>
    <Col md={1}>
    <p className={`${styles.Underline}`}>28.70</p>
    </Col>
    <Col md={7}>
    <p className={`${styles.Underline}`}>Warehouse Rental</p>
    </Col>
    <Col md={2}>
    <div className={`${styles.Box3} 
    d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{warehouse_rental || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col md={1}></Col>
    <Col md={10} >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Other */}
    <Row>
    <Col md={1} ></Col>
    <Col md={1}>
    <p className={`${styles.Underline}`}>28.80</p>
    </Col>
    <Col md={7}>
    <p className={`${styles.Underline}`}>Other</p>
    </Col>
    <Col md={2}>
    <div className={`${styles.Box3} 
    d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{construction_other || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col md={1}></Col>
    <Col md={10} >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* CONSTRUCTION MATERIAL Total */}
    <Row className='mt-3 mb-1' >
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}></p>
    <p></p>
    </Col>
    <Col className={ `${styles.Overview} my-0 pt-1`} md={6} >
    <p className={ `${styles.Bold} pb-0 mb-0`}>TOTAL CONSTRUCTION MATERIALS </p>
    </Col>
    <Col md={1} >
    </Col>
    <Col md={2} >
    <div className={`${styles.Box4} 
    d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline} mb-0`}>{constructionmat_total || 0}</p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col md={1}></Col>
    <Col md={10} >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    </div>
    {/* ART SUPPLIES ----------------------------------------- */}
    <div className='mt-4'>
    <Row>
    <Col md={1} ></Col>
    <Col xs={1}>
    <p className={`${styles.Underline}`}>29.00</p>
    </Col>
    <Col xs={8}>
    <p className={ `${styles.BoldBlack}`}>ART SUPPLIES</p>
    </Col>
    </Row>
    {/* TITLES */}
    <Row className={ `mb-2 py-0`} >
    <Col md={1} ></Col>
    <Col className={ `${styles.Overview} py-1`} md={1} >
    <p className="mb-0">ACCT</p>
    </Col>
    <Col className={ `${styles.Overview} py-1`} md={3} >
    <p className="mb-0">Description</p>
    </Col>
    <Col className={`${styles.Overview} text-center py-1`} md={1} >
    <p className="mb-0">#</p>
    </Col>
    <Col className={`${styles.Overview} text-center py-1`} md={1} >
    <p># Unit</p>
    </Col>
    <Col md={1} className={`${styles.Overview} text-center py-1`} >
    <p className="mb-0">Unit</p>
    </Col>
    <Col md={1} className={`${styles.Overview} text-center py-1`} >
    <p className="mb-0">Price</p>
    </Col>
    <Col md={2} className={`${styles.Overview} text-center py-1`} >
    <p className="mb-0">Total</p>
    </Col>
    <Col md={1}></Col>
    </Row>
    {/* Drawing Supplies */}
    <Row>
    <Col md={1} ></Col>
    <Col md={1}>
    <p className={`${styles.Underline}`}>29.10</p>
    </Col>
    <Col md={7}>
    <p className={`${styles.Underline}`}>Drawing Supplies</p>
    </Col>
    <Col md={2}>
    <div className={`${styles.Box3} 
        d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{drawing_supplies || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col md={1}></Col>
    <Col md={10} >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Drawing Equipment */}
    <Row>
    <Col md={1} ></Col>
    <Col md={1}>
    <p className={`${styles.Underline}`}>29.20</p>
    </Col>
    <Col md={7}>
    <p className={`${styles.Underline}`}>Drawing Equipment</p>
    </Col>
    <Col md={2}>
    <div className={`${styles.Box3} 
        d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{drawing_equipment || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col md={1}></Col>
    <Col md={10} >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Tech/Software */}
    <Row>
    <Col md={1} ></Col>
    <Col md={1}>
    <p className={`${styles.Underline}`}>29.30</p>
    </Col>
    <Col md={7}>
    <p className={`${styles.Underline}`}>Tech/Software</p>
    </Col>
    <Col md={2}>
    <div className={`${styles.Box3} 
        d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{tech || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col md={1}></Col>
    <Col md={10} >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Stock/Prints/Processing */}
    <Row>
    <Col md={1} ></Col>
    <Col md={1}>
    <p className={`${styles.Underline}`}>29.40</p>
    </Col>
    <Col md={7}>
    <p className={`${styles.Underline}`}>Stock/Prints/Processing</p>
    </Col>
    <Col md={2}>
    <div className={`${styles.Box3} 
        d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{stock_prints_processing || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col md={1}></Col>
    <Col md={10} >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Blueprints */}
    <Row>
    <Col md={1} ></Col>
    <Col md={1}>
    <p className={`${styles.Underline}`}>29.50</p>
    </Col>
    <Col md={7}>
    <p className={`${styles.Underline}`}>Blueprints</p>
    </Col>
    <Col md={2}>
    <div className={`${styles.Box3} 
        d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{blueprinting || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col md={1}></Col>
    <Col md={10} >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Other */}
    <Row>
    <Col md={1} ></Col>
    <Col md={1}>
    <p className={`${styles.Underline}`}>29.60</p>
    </Col>
    <Col md={7}>
    <p className={`${styles.Underline}`}>Other</p>
    </Col>
    <Col md={2}>
    <div className={`${styles.Box3} 
        d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{other_art || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col md={1}></Col>
    <Col md={10} >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* ART SUPPLIES Total */}
    <Row className='mt-3 mb-1' >
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}></p>
    <p></p>
    </Col>
    <Col className={ `${styles.Overview} my-0 pt-1`} md={6} >
    <p className={ `${styles.Bold} pb-0 mb-0`}>TOTAL ART SUPPLIES </p>
    </Col>
    <Col md={1} >
    </Col>
    <Col md={2} >
    <div className={`${styles.Box3} 
        d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline} mb-0`}>{artSup_total || 0}</p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col md={1}></Col>
    <Col md={10} >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    </div>
    {/* SET DRESSING ----------------------------------------- */}
    <div className='mt-4'>
    <Row>
    <Col md={1} ></Col>
    <Col xs={1}>
    <p className={`${styles.Underline}`}>30.00</p>
    </Col>
    <Col xs={8}>
    <p className={ `${styles.BoldBlack}`}>SET DRESSING</p>
    </Col>
    </Row>
    {/* TITLES */}
    <Row className={ `mb-2 py-0`} >
    <Col md={1} ></Col>
    <Col className={ `${styles.Overview} py-1`} md={1} >
    <p className="mb-0">ACCT</p>
    </Col>
    <Col className={ `${styles.Overview} py-1`} md={3} >
    <p className="mb-0">Description</p>
    </Col>
    <Col className={`${styles.Overview} text-center py-1`} md={1} >
    <p className="mb-0">#</p>
    </Col>
    <Col className={`${styles.Overview} text-center py-1`} md={1} >
    <p># Unit</p>
    </Col>
    <Col md={1} className={`${styles.Overview} text-center py-1`} >
    <p className="mb-0">Unit</p>
    </Col>
    <Col md={1} className={`${styles.Overview} text-center py-1`} >
    <p className="mb-0">Price</p>
    </Col>
    <Col md={2} className={`${styles.Overview} text-center py-1`} >
    <p className="mb-0">Total</p>
    </Col>
    <Col md={1}></Col>
    </Row>
    {/* Rentals */}
    <Row>
    <Col md={1} ></Col>
    <Col md={1}>
    <p className={`${styles.Underline}`}>30.10</p>
    </Col>
    <Col md={7}>
    <p className={`${styles.Underline}`}>Rentals</p>
    </Col>
    <Col md={2}>
    <div className={`${styles.Box3} 
    d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{dress_rentals || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col md={1}></Col>
    <Col md={10} >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Purchases */}
    <Row>
    <Col md={1} ></Col>
    <Col md={1}>
    <p className={`${styles.Underline}`}>30.20</p>
    </Col>
    <Col md={7}>
    <p className={`${styles.Underline}`}>Purchases</p>
    </Col>
    <Col md={2}>
    <div className={`${styles.Box3} 
    d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{dress_purchases || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col md={1}></Col>
    <Col md={10} >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Manufacture */}
    <Row>
    <Col md={1} ></Col>
    <Col md={1}>
    <p className={`${styles.Underline}`}>30.30</p>
    </Col>
    <Col md={7}>
    <p className={`${styles.Underline}`}>Manufacture</p>
    </Col>
    <Col md={2}>
    <div className={`${styles.Box3} 
    d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{dress_manufacture || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col md={1}></Col>
    <Col md={10} >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Repairs/Replacements */}
    <Row>
    <Col md={1} ></Col>
    <Col md={1}>
    <p className={`${styles.Underline}`}>30.40</p>
    </Col>
    <Col md={7}>
    <p className={`${styles.Underline}`}>Repairs/Replacements</p>
    </Col>
    <Col md={2}>
    <div className={`${styles.Box3} 
    d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{dress_repairs_replacements || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col md={1}></Col>
    <Col md={10} >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Other */}
    <Row>
    <Col md={1} ></Col>
    <Col md={1}>
    <p className={`${styles.Underline}`}>30.50</p>
    </Col>
    <Col md={7}>
    <p className={`${styles.Underline}`}>Other</p>
    </Col>
    <Col md={2}>
    <div className={`${styles.Box3} 
    d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{other_dressing || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col md={1}></Col>
    <Col md={10} >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* SET DRESSING Total */}
    <Row className='mt-3 mb-1' >
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}></p>
    <p></p>
    </Col>
    <Col className={ `${styles.Overview} my-0 pt-1`} md={6} >
    <p className={ `${styles.Bold} pb-0 mb-0`}>TOTAL SET DRESSING </p>
    </Col>
    <Col md={1} >
    </Col>
    <Col md={2} >
    <div className={`${styles.Box4} 
    d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline} mb-0`}>{dressing_total || 0}</p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col md={1}></Col>
    <Col md={10} >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    </div>
    {/* PROPS ------------------------------------------------ */}
    <div className='mt-4'>
    <Row>
    <Col md={1} ></Col>
    <Col xs={1}>
    <p className={`${styles.Underline}`}>31.00</p>
    </Col>
    <Col xs={8}>
    <p className={ `${styles.BoldBlack}`}>PROPS</p>
    </Col>
    </Row>
    {/* TITLES */}
    <Row className={ `mb-2 py-0`} >
    <Col md={1} ></Col>
    <Col className={ `${styles.Overview} py-1`} md={1} >
    <p className="mb-0">ACCT</p>
    </Col>
    <Col className={ `${styles.Overview} py-1`} md={3} >
    <p className="mb-0">Description</p>
    </Col>
    <Col className={`${styles.Overview} text-center py-1`} md={1} >
    <p className="mb-0">#</p>
    </Col>
    <Col className={`${styles.Overview} text-center py-1`} md={1} >
    <p># Unit</p>
    </Col>
    <Col md={1} className={`${styles.Overview} text-center py-1`} >
    <p className="mb-0">Unit</p>
    </Col>
    <Col md={1} className={`${styles.Overview} text-center py-1`} >
    <p className="mb-0">Price</p>
    </Col>
    <Col md={2} className={`${styles.Overview} text-center py-1`} >
    <p className="mb-0">Total</p>
    </Col>
    <Col md={1}></Col>
    </Row>
    {/* Rentals */}
    <Row>
    <Col md={1} ></Col>
    <Col md={1}>
    <p className={`${styles.Underline}`}>31.10</p>
    </Col>
    <Col md={7}>
    <p className={`${styles.Underline}`}>Rentals</p>
    </Col>
    <Col md={2}>
    <div className={`${styles.Box3} 
        d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{props_rentals || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col md={1}></Col>
    <Col md={10} >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Purchases */}
    <Row>
    <Col md={1} ></Col>
    <Col md={1}>
    <p className={`${styles.Underline}`}>31.20</p>
    </Col>
    <Col md={7}>
    <p className={`${styles.Underline}`}>Purchases</p>
    </Col>
    <Col md={2}>
    <div className={`${styles.Box3} 
        d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{props_purchases || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col md={1}></Col>
    <Col md={10} >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Graphics/Signs */}
    <Row>
    <Col md={1} ></Col>
    <Col md={1}>
    <p className={`${styles.Underline}`}>31.30</p>
    </Col>
    <Col md={7}>
    <p className={`${styles.Underline}`}>Graphics/Signs</p>
    </Col>
    <Col md={2}>
    <div className={`${styles.Box3} 
        d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{graphics_signs || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col md={1}></Col>
    <Col md={10} >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Repairs/Replacements */}
    <Row>
    <Col md={1} ></Col>
    <Col md={1}>
    <p className={`${styles.Underline}`}>31.40</p>
    </Col>
    <Col md={7}>
    <p className={`${styles.Underline}`}>Repairs/Replacements</p>
    </Col>
    <Col md={2}>
    <div className={`${styles.Box3} 
        d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{props_repairs_replac || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col md={1}></Col>
    <Col md={10} >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Picture Vehicle Rentals */}
    <Row>
    <Col md={1} ></Col>
    <Col md={1}>
    <p className={`${styles.Underline}`}>31.50</p>
    </Col>
    <Col md={7}>
    <p className={`${styles.Underline}`}>Picture Vehicle Rentals</p>
    </Col>
    <Col md={2}>
    <div className={`${styles.Box3} 
        d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{picture_vehicle_rentals || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col md={1}></Col>
    <Col md={10} >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Picture Vehicle Purchases */}
    <Row>
    <Col md={1} ></Col>
    <Col md={1}>
    <p className={`${styles.Underline}`}>31.60</p>
    </Col>
    <Col md={7}>
    <p className={`${styles.Underline}`}>Picture Vehicle Purchases</p>
    </Col>
    <Col md={2}>
    <div className={`${styles.Box3} 
        d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{picture_vehicle_purchases || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col md={1}></Col>
    <Col md={10} >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Picture Vehicle Modifications */}
    <Row>
    <Col md={1} ></Col>
    <Col md={1}>
    <p className={`${styles.Underline}`}>31.70</p>
    </Col>
    <Col md={7}>
    <p className={`${styles.Underline}`}>Picture Vehicle Modifications</p>
    </Col>
    <Col md={2}>
    <div className={`${styles.Box3} 
        d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{picture_vehicle_mods || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col md={1}></Col>
    <Col md={10} >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Picture Vehicle Insurance */}
    <Row>
    <Col md={1} ></Col>
    <Col md={1}>
    <p className={`${styles.Underline}`}>31.80</p>
    </Col>
    <Col md={7}>
    <p className={`${styles.Underline}`}>Picture Vehicle Insurance</p>
    </Col>
    <Col md={2}>
    <div className={`${styles.Box3} 
        d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{picture_vehicle_ins || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col md={1}></Col>
    <Col md={10} >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Other */}
    <Row>
    <Col md={1} ></Col>
    <Col md={1}>
    <p className={`${styles.Underline}`}>31.90</p>
    </Col>
    <Col md={7}>
    <p className={`${styles.Underline}`}>Other</p>
    </Col>
    <Col md={2}>
    <div className={`${styles.Box3} 
        d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{other_props || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col md={1}></Col>
    <Col md={10} >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* PROPS Total */}
    <Row className='mt-3 mb-1' >
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}></p>
    <p></p>
    </Col>
    <Col className={ `${styles.Overview} my-0 pt-1`} md={6} >
    <p className={ `${styles.Bold} pb-0 mb-0`}>TOTAL PROPS </p>
    </Col>
    <Col md={1} >
    </Col>
    <Col md={2} >
    <div className={`${styles.Box4} 
        d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline} mb-0`}>{props_total || 0}</p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col md={1}></Col>
    <Col md={10} >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    </div>
    {/* FX --------------------------------------------------- */}
    <div className='mt-4'>
    <Row>
    <Col md={1} ></Col>
    <Col xs={1}>
    <p className={`${styles.Underline}`}>32.00</p>
    </Col>
    <Col xs={8}>
    <p className={ `${styles.BoldBlack}`}>SPECIAL EFFECTS</p>
    </Col>
    </Row>
    {/* TITLES */}
    <Row className={ `mb-2 py-0`} >
    <Col md={1} ></Col>
    <Col className={ `${styles.Overview} py-1`} md={1} >
    <p className="mb-0">ACCT</p>
    </Col>
    <Col className={ `${styles.Overview} py-1`} md={3} >
    <p className="mb-0">Description</p>
    </Col>
    <Col className={`${styles.Overview} text-center py-1`} md={1} >
    <p className="mb-0">#</p>
    </Col>
    <Col className={`${styles.Overview} text-center py-1`} md={1} >
    <p># Unit</p>
    </Col>
    <Col md={1} className={`${styles.Overview} text-center py-1`} >
    <p className="mb-0">Unit</p>
    </Col>
    <Col md={1} className={`${styles.Overview} text-center py-1`} >
    <p className="mb-0">Price</p>
    </Col>
    <Col md={2} className={`${styles.Overview} text-center py-1`} >
    <p className="mb-0">Total</p>
    </Col>
    <Col md={1}></Col>
    </Row>
    {/* Rentals */}
    <Row>
    <Col md={1} ></Col>
    <Col md={1}>
    <p className={`${styles.Underline}`}>32.10</p>
    </Col>
    <Col md={7}>
    <p className={`${styles.Underline}`}>Rentals</p>
    </Col>
    <Col md={2}>
    <div className={`${styles.Box3} 
        d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{fx_rentals || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col md={1}></Col>
    <Col md={10} >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Purchases */}
    <Row>
    <Col md={1} ></Col>
    <Col md={1}>
    <p className={`${styles.Underline}`}>32.20</p>
    </Col>
    <Col md={7}>
    <p className={`${styles.Underline}`}>Purchases</p>
    </Col>
    <Col md={2}>
    <div className={`${styles.Box3} 
        d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{fx_purchases || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col md={1}></Col>
    <Col md={10} >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Stunts Purchases/Rentals */}
    <Row>
    <Col md={1} ></Col>
    <Col md={1}>
    <p className={`${styles.Underline}`}>32.30</p>
    </Col>
    <Col md={7}>
    <p className={`${styles.Underline}`}>Stunts Purchases/Rentals</p>
    </Col>
    <Col md={2}>
    <div className={`${styles.Box3} 
        d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{stunts_purchases_rentals || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col md={1}></Col>
    <Col md={10} >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Armaments & Permits/Fees */}
    <Row>
    <Col md={1} ></Col>
    <Col md={1}>
    <p className={`${styles.Underline}`}>32.40</p>
    </Col>
    <Col md={7}>
    <p className={`${styles.Underline}`}>Armaments & Permits/Fees</p>
    </Col>
    <Col md={2}>
    <div className={`${styles.Box3} 
        d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{armaments_permits_fees || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col md={1}></Col>
    <Col md={10} >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Other */}
    <Row>
    <Col md={1} ></Col>
    <Col md={1}>
    <p className={`${styles.Underline}`}>32.50</p>
    </Col>
    <Col md={7}>
    <p className={`${styles.Underline}`}>Other</p>
    </Col>
    <Col md={2}>
    <div className={`${styles.Box3} 
        d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{other_fx || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col md={1}></Col>
    <Col md={10} >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* SPECIAL EFFECTS Total */}
    <Row className='mt-3 mb-1' >
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}></p>
    <p></p>
    </Col>
    <Col className={ `${styles.Overview} my-0 pt-1`} md={6} >
    <p className={ `${styles.Bold} pb-0 mb-0`}>TOTAL SPECIAL EFFECTS </p>
    </Col>
    <Col md={1} >
    </Col>
    <Col md={2} >
    <div className={`${styles.Box3} 
        d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline} mb-0`}>{fx_total || 0}</p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col md={1}></Col>
    <Col md={10} >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    </div>
    {/* ANIMALS ---------------------------------------------- */}
    <div className='mt-4'>
    <Row>
    <Col md={1} ></Col>
    <Col xs={1}>
    <p className={`${styles.Underline}`}>33.00</p>
    </Col>
    <Col xs={8}>
    <p className={ `${styles.BoldBlack}`}>ANIMALS</p>
    </Col>
    </Row>
    {/* TITLES */}
    <Row className={ `mb-2 py-0`} >
    <Col md={1} ></Col>
    <Col className={ `${styles.Overview} py-1`} md={1} >
    <p className="mb-0">ACCT</p>
    </Col>
    <Col className={ `${styles.Overview} py-1`} md={3} >
    <p className="mb-0">Description</p>
    </Col>
    <Col className={`${styles.Overview} text-center py-1`} md={1} >
    <p className="mb-0">#</p>
    </Col>
    <Col className={`${styles.Overview} text-center py-1`} md={1} >
    <p># Unit</p>
    </Col>
    <Col md={1} className={`${styles.Overview} text-center py-1`} >
    <p className="mb-0">Unit</p>
    </Col>
    <Col md={1} className={`${styles.Overview} text-center py-1`} >
    <p className="mb-0">Price</p>
    </Col>
    <Col md={2} className={`${styles.Overview} text-center py-1`} >
    <p className="mb-0">Total</p>
    </Col>
    <Col md={1}></Col>
    </Row>
    {/* Rentals */}
    <Row>
    <Col md={1} ></Col>
    <Col md={1}>
    <p className={`${styles.Underline}`}>33.10</p>
    </Col>
    <Col md={7}>
    <p className={`${styles.Underline}`}>Rentals</p>
    </Col>
    <Col md={2}>
    <div className={`${styles.Box3} 
        d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{animals_rentals || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col md={1}></Col>
    <Col md={10} >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Purchases */}
    <Row>
    <Col md={1} ></Col>
    <Col md={1}>
    <p className={`${styles.Underline}`}>33.20</p>
    </Col>
    <Col md={7}>
    <p className={`${styles.Underline}`}>Purchases</p>
    </Col>
    <Col md={2}>
    <div className={`${styles.Box3} 
        d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{animals_purchases || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col md={1}></Col>
    <Col md={10} >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Food/Stabling */}
    <Row>
    <Col md={1} ></Col>
    <Col md={1}>
    <p className={`${styles.Underline}`}>33.30</p>
    </Col>
    <Col md={7}>
    <p className={`${styles.Underline}`}>Food/Stabling</p>
    </Col>
    <Col md={2}>
    <div className={`${styles.Box3} 
        d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{food_stabling || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col md={1}></Col>
    <Col md={10} >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Transport */}
    <Row>
    <Col md={1} ></Col>
    <Col md={1}>
    <p className={`${styles.Underline}`}>33.40</p>
    </Col>
    <Col md={7}>
    <p className={`${styles.Underline}`}>Transport</p>
    </Col>
    <Col md={2}>
    <div className={`${styles.Box3} 
        d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{transport || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col md={1}></Col>
    <Col md={10} >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Veterinary Fees */}
    <Row>
    <Col md={1} ></Col>
    <Col md={1}>
    <p className={`${styles.Underline}`}>33.50</p>
    </Col>
    <Col md={7}>
    <p className={`${styles.Underline}`}>Veterinary Fees</p>
    </Col>
    <Col md={2}>
    <div className={`${styles.Box3} 
        d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{vet || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col md={1}></Col>
    <Col md={10} >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Customs Brokerage */}
    <Row>
    <Col md={1} ></Col>
    <Col md={1}>
    <p className={`${styles.Underline}`}>33.60</p>
    </Col>
    <Col md={7}>
    <p className={`${styles.Underline}`}>Customs Brokerage</p>
    </Col>
    <Col md={2}>
    <div className={`${styles.Box3} 
        d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{customs_broker || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col md={1}></Col>
    <Col md={10} >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Other */}
    <Row>
    <Col md={1} ></Col>
    <Col md={1}>
    <p className={`${styles.Underline}`}>33.70</p>
    </Col>
    <Col md={7}>
    <p className={`${styles.Underline}`}>Other</p>
    </Col>
    <Col md={2}>
    <div className={`${styles.Box3} 
        d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{other_animals || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col md={1}></Col>
    <Col md={10} >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* ANIMALS Total */}
    <Row className='mt-3 mb-1' >
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}></p>
    <p></p>
    </Col>
    <Col className={ `${styles.Overview} my-0 pt-1`} md={6} >
    <p className={ `${styles.Bold} pb-0 mb-0`}>TOTAL ANIMALS </p>
    </Col>
    <Col md={1} >
    </Col>
    <Col md={2} >
    <div className={`${styles.Box3} 
        d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline} mb-0`}>{animals_total || 0}</p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col md={1}></Col>
    <Col md={10} >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    </div>
    {/* WARDROBE SUPPLIES ------------------------------------ */}
    <div className='mt-4'>
    <Row>
    <Col md={1} ></Col>
    <Col xs={1}>
    <p className={`${styles.Underline}`}>34.00</p>
    </Col>
    <Col xs={8}>
    <p className={ `${styles.BoldBlack}`}>WARDROBE SUPPLIES</p>
    </Col>
    </Row>
    {/* TITLES */}
    <Row className={ `mb-2 py-0`} >
    <Col md={1} ></Col>
    <Col className={ `${styles.Overview} py-1`} md={1} >
    <p className="mb-0">ACCT</p>
    </Col>
    <Col className={ `${styles.Overview} py-1`} md={3} >
    <p className="mb-0">Description</p>
    </Col>
    <Col className={`${styles.Overview} text-center py-1`} md={1} >
    <p className="mb-0">#</p>
    </Col>
    <Col className={`${styles.Overview} text-center py-1`} md={1} >
    <p># Unit</p>
    </Col>
    <Col md={1} className={`${styles.Overview} text-center py-1`} >
    <p className="mb-0">Unit</p>
    </Col>
    <Col md={1} className={`${styles.Overview} text-center py-1`} >
    <p className="mb-0">Price</p>
    </Col>
    <Col md={2} className={`${styles.Overview} text-center py-1`} >
    <p className="mb-0">Total</p>
    </Col>
    <Col md={1}></Col>
    </Row>
    {/* Rentals */}
    <Row>
    <Col md={1} ></Col>
    <Col md={1}>
    <p className={`${styles.Underline}`}>34.10</p>
    </Col>
    <Col md={7}>
    <p className={`${styles.Underline}`}>Rentals</p>
    </Col>
    <Col md={2}>
    <div className={`${styles.Box3} 
        d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{wardrobe_rentals || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col md={1}></Col>
    <Col md={10} >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Purchases */}
    <Row>
    <Col md={1} ></Col>
    <Col md={1}>
    <p className={`${styles.Underline}`}>34.20</p>
    </Col>
    <Col md={7}>
    <p className={`${styles.Underline}`}>Purchases</p>
    </Col>
    <Col md={2}>
    <div className={`${styles.Box3} 
        d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{wardrobe_purchases || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col md={1}></Col>
    <Col md={10} >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Manufacture */}
    <Row>
    <Col md={1} ></Col>
    <Col md={1}>
    <p className={`${styles.Underline}`}>34.30</p>
    </Col>
    <Col md={7}>
    <p className={`${styles.Underline}`}>Manufacture</p>
    </Col>
    <Col md={2}>
    <div className={`${styles.Box3} 
        d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{ward_manufact || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col md={1}></Col>
    <Col md={10} >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Shipping/Brokerage */}
    <Row>
    <Col md={1} ></Col>
    <Col md={1}>
    <p className={`${styles.Underline}`}>34.40</p>
    </Col>
    <Col md={7}>
    <p className={`${styles.Underline}`}>Shipping/Brokerage</p>
    </Col>
    <Col md={2}>
    <div className={`${styles.Box3} 
        d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{ward_ship_brok || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col md={1}></Col>
    <Col md={10} >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Repairs/Cleaning */}
    <Row>
    <Col md={1} ></Col>
    <Col md={1}>
    <p className={`${styles.Underline}`}>34.50</p>
    </Col>
    <Col md={7}>
    <p className={`${styles.Underline}`}>Repairs/Cleaning</p>
    </Col>
    <Col md={2}>
    <div className={`${styles.Box3} 
        d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{ward_repairs_clean || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col md={1}></Col>
    <Col md={10} >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Other */}
    <Row>
    <Col md={1} ></Col>
    <Col md={1}>
    <p className={`${styles.Underline}`}>34.60</p>
    </Col>
    <Col md={7}>
    <p className={`${styles.Underline}`}>Other</p>
    </Col>
    <Col md={2}>
    <div className={`${styles.Box3} 
        d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{other_ward || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col md={1}></Col>
    <Col md={10} >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* WARDROBE SUPPLIES Total */}
    <Row className='mt-3 mb-1' >
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}></p>
    <p></p>
    </Col>
    <Col className={ `${styles.Overview} my-0 pt-1`} md={6} >
    <p className={ `${styles.Bold} pb-0 mb-0`}>TOTAL WARDROBE SUPPLIES </p>
    </Col>
    <Col md={1} >
    </Col>
    <Col md={2} >
    <div className={`${styles.Box4} 
        d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline} mb-0`}>{wardrobe_total || 0}</p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col md={1}></Col>
    <Col md={10} >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    </div>
    {/* MAKEUP SUPPLIES -------------------------------------- */}
    <div className='mt-4'>
    <Row>
    <Col md={1} ></Col>
    <Col xs={1}>
    <p className={`${styles.Underline}`}>35.00</p>
    </Col>
    <Col xs={8}>
    <p className={ `${styles.BoldBlack}`}>MAKEUP SUPPLIES</p>
    </Col>
    </Row>
    {/* TITLES */}
    <Row className={ `mb-2 py-0`} >
    <Col md={1} ></Col>
    <Col className={ `${styles.Overview} py-1`} md={1} >
    <p className="mb-0">ACCT</p>
    </Col>
    <Col className={ `${styles.Overview} py-1`} md={3} >
    <p className="mb-0">Description</p>
    </Col>
    <Col className={`${styles.Overview} text-center py-1`} md={1} >
    <p className="mb-0">#</p>
    </Col>
    <Col className={`${styles.Overview} text-center py-1`} md={1} >
    <p># Unit</p>
    </Col>
    <Col md={1} className={`${styles.Overview} text-center py-1`} >
    <p className="mb-0">Unit</p>
    </Col>
    <Col md={1} className={`${styles.Overview} text-center py-1`} >
    <p className="mb-0">Price</p>
    </Col>
    <Col md={2} className={`${styles.Overview} text-center py-1`} >
    <p className="mb-0">Total</p>
    </Col>
    <Col md={1}></Col>
    </Row>
    {/* Makeup Rentals */}
    <Row>
    <Col md={1} ></Col>
    <Col md={1}>
    <p className={`${styles.Underline}`}>35.10</p>
    </Col>
    <Col md={7}>
    <p className={`${styles.Underline}`}>Makeup Rentals</p>
    </Col>
    <Col md={2}>
    <div className={`${styles.Box3} 
    d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{makeup_rentals || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col md={1}></Col>
    <Col md={10} >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Makeup Purchases */}
    <Row>
    <Col md={1} ></Col>
    <Col md={1}>
    <p className={`${styles.Underline}`}>35.20</p>
    </Col>
    <Col md={7}>
    <p className={`${styles.Underline}`}>Makeup Purchases</p>
    </Col>
    <Col md={2}>
    <div className={`${styles.Box3} 
    d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{makeup_purchases || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col md={1}></Col>
    <Col md={10} >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Hair Rentals */}
    <Row>
    <Col md={1} ></Col>
    <Col md={1}>
    <p className={`${styles.Underline}`}>35.30</p>
    </Col>
    <Col md={7}>
    <p className={`${styles.Underline}`}>Hair Rentals</p>
    </Col>
    <Col md={2}>
    <div className={`${styles.Box3} 
    d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{hair_rentals || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col md={1}></Col>
    <Col md={10} >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Hair Purchases */}
    <Row>
    <Col md={1} ></Col>
    <Col md={1}>
    <p className={`${styles.Underline}`}>35.40</p>
    </Col>
    <Col md={7}>
    <p className={`${styles.Underline}`}>Hair Purchases</p>
    </Col>
    <Col md={2}>
    <div className={`${styles.Box3} 
    d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{hair_purchases || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col md={1}></Col>
    <Col md={10} >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Wigs Rentals/Purchases */}
    <Row>
    <Col md={1} ></Col>
    <Col md={1}>
    <p className={`${styles.Underline}`}>35.50</p>
    </Col>
    <Col md={7}>
    <p className={`${styles.Underline}`}>Wigs Rentals/Purchases</p>
    </Col>
    <Col md={2}>
    <div className={`${styles.Box3} 
    d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{wigs || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col md={1}></Col>
    <Col md={10} >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Special Effects */}
    <Row>
    <Col md={1} ></Col>
    <Col md={1}>
    <p className={`${styles.Underline}`}>35.60</p>
    </Col>
    <Col md={7}>
    <p className={`${styles.Underline}`}>Special Effects</p>
    </Col>
    <Col md={2}>
    <div className={`${styles.Box3} 
    d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{makeup_fx || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col md={1}></Col>
    <Col md={10} >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Shipping/Brokerage */}
    <Row>
    <Col md={1} ></Col>
    <Col md={1}>
    <p className={`${styles.Underline}`}>35.70</p>
    </Col>
    <Col md={7}>
    <p className={`${styles.Underline}`}>Shipping/Brokerage</p>
    </Col>
    <Col md={2}>
    <div className={`${styles.Box3} 
    d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{makeup_ship_brok || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col md={1}></Col>
    <Col md={10} >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Other */}
    <Row>
    <Col md={1} ></Col>
    <Col md={1}>
    <p className={`${styles.Underline}`}>35.80</p>
    </Col>
    <Col md={7}>
    <p className={`${styles.Underline}`}>Other</p>
    </Col>
    <Col md={2}>
    <div className={`${styles.Box3} 
    d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{other_makeup || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col md={1}></Col>
    <Col md={10} >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* MAKEUP SUPPLIES Total */}
    <Row className='mt-3 mb-1' >
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}></p>
    <p></p>
    </Col>
    <Col className={ `${styles.Overview} my-0 pt-1`} md={6} >
    <p className={ `${styles.Bold} pb-0 mb-0`}>TOTAL MAKEUP SUPPLIES </p>
    </Col>
    <Col md={1} >
    </Col>
    <Col md={2} >
    <div className={`${styles.Box4} 
    d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline} mb-0`}>{makeup_total || 0}</p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col md={1}></Col>
    <Col md={10} >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    </div>
    {/* CAMERA EQUIPMENT ------------------------------------- */}
    <div className='mt-4'>
    <Row>
    <Col md={1} ></Col>
    <Col xs={1}>
    <p className={`${styles.Underline}`}>36.00</p>
    </Col>
    <Col xs={8}>
    <p className={ `${styles.BoldBlack}`}>CAMERA EQUIPMENT</p>
    </Col>
    </Row>
    {/* TITLES */}
    <Row className={ `mb-2 py-0`} >
    <Col md={1} ></Col>
    <Col className={ `${styles.Overview} py-1`} md={1} >
    <p className="mb-0">ACCT</p>
    </Col>
    <Col className={ `${styles.Overview} py-1`} md={3} >
    <p className="mb-0">Description</p>
    </Col>
    <Col className={`${styles.Overview} text-center py-1`} md={1} >
    <p className="mb-0">#</p>
    </Col>
    <Col className={`${styles.Overview} text-center py-1`} md={1} >
    <p># Unit</p>
    </Col>
    <Col md={1} className={`${styles.Overview} text-center py-1`} >
    <p className="mb-0">Unit</p>
    </Col>
    <Col md={1} className={`${styles.Overview} text-center py-1`} >
    <p className="mb-0">Price</p>
    </Col>
    <Col md={2} className={`${styles.Overview} text-center py-1`} >
    <p className="mb-0">Total</p>
    </Col>
    <Col md={1}></Col>
    </Row>
    {/* Basic Package Rentals */}
    <Row>
    <Col md={1} ></Col>
    <Col md={1}>
    <p className={`${styles.Underline}`}>36.10</p>
    </Col>
    <Col md={7}>
    <p className={`${styles.Underline}`}>Basic Package Rentals</p>
    </Col>
    <Col md={2}>
    <div className={`${styles.Box3} 
    d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{basic_package_rent_cam || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col md={1}></Col>
    <Col md={10} >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Daily Rentals */}
    <Row>
    <Col md={1} ></Col>
    <Col md={1}>
    <p className={`${styles.Underline}`}>36.20</p>
    </Col>
    <Col md={7}>
    <p className={`${styles.Underline}`}>Daily Rentals</p>
    </Col>
    <Col md={2}>
    <div className={`${styles.Box3} 
    d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{daily_rentals_cam || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col md={1}></Col>
    <Col md={10} >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Specialty Rentals */}
    <Row>
    <Col md={1} ></Col>
    <Col md={1}>
    <p className={`${styles.Underline}`}>36.30</p>
    </Col>
    <Col md={7}>
    <p className={`${styles.Underline}`}>Specialty Rentals</p>
    </Col>
    <Col md={2}>
    <div className={`${styles.Box3} 
    d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{specialty_rent_cam || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col md={1}></Col>
    <Col md={10} >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Purchases */}
    <Row>
    <Col md={1} ></Col>
    <Col md={1}>
    <p className={`${styles.Underline}`}>36.40</p>
    </Col>
    <Col md={7}>
    <p className={`${styles.Underline}`}>Purchases</p>
    </Col>
    <Col md={2}>
    <div className={`${styles.Box3} 
    d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{camera_purchases || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col md={1}></Col>
    <Col md={10} >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Steadicam */}
    <Row>
    <Col md={1} ></Col>
    <Col md={1}>
    <p className={`${styles.Underline}`}>36.50</p>
    </Col>
    <Col md={7}>
    <p className={`${styles.Underline}`}>Steadicam</p>
    </Col>
    <Col md={2}>
    <div className={`${styles.Box3} 
    d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{steadicam || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col md={1}></Col>
    <Col md={10} >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Video/Teleprompter */}
    <Row>
    <Col md={1} ></Col>
    <Col md={1}>
    <p className={`${styles.Underline}`}>36.60</p>
    </Col>
    <Col md={7}>
    <p className={`${styles.Underline}`}>Video/Teleprompter</p>
    </Col>
    <Col md={2}>
    <div className={`${styles.Box3} 
    d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{video_teleprompter || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col md={1}></Col>
    <Col md={10} >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Shipping/Brokerage */}
    <Row>
    <Col md={1} ></Col>
    <Col md={1}>
    <p className={`${styles.Underline}`}>36.70</p>
    </Col>
    <Col md={7}>
    <p className={`${styles.Underline}`}>Shipping/Brokerage</p>
    </Col>
    <Col md={2}>
    <div className={`${styles.Box3} 
    d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{camera_ship_brok || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col md={1}></Col>
    <Col md={10} >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Loss & Damage */}
    <Row>
    <Col md={1} ></Col>
    <Col md={1}>
    <p className={`${styles.Underline}`}>36.80</p>
    </Col>
    <Col md={7}>
    <p className={`${styles.Underline}`}>Loss & Damage</p>
    </Col>
    <Col md={2}>
    <div className={`${styles.Box3} 
    d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{loss_damage_cam || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col md={1}></Col>
    <Col md={10} >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Other */}
    <Row>
    <Col md={1} ></Col>
    <Col md={1}>
    <p className={`${styles.Underline}`}>36.90</p>
    </Col>
    <Col md={7}>
    <p className={`${styles.Underline}`}>Other</p>
    </Col>
    <Col md={2}>
    <div className={`${styles.Box3} 
    d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{other_camera || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col md={1}></Col>
    <Col md={10} >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* CAMERA EQUIPMENT Total */}
    <Row className='mt-3 mb-1' >
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}></p>
    <p></p>
    </Col>
    <Col className={ `${styles.Overview} my-0 pt-1`} md={6} >
    <p className={ `${styles.Bold} pb-0 mb-0`}>TOTAL CAMERA EQUIPMENT </p>
    </Col>
    <Col md={1} >
    </Col>
    <Col md={2} >
    <div className={`${styles.Box4} 
    d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline} mb-0`}>{camera_total || 0}</p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col md={1}></Col>
    <Col md={10} >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    </div>
    {/* ELECTRICAL EQUIPMENT --------------------------------- */}
    <div className='mt-4'>
    <Row>
    <Col md={1} ></Col>
    <Col xs={1}>
    <p className={`${styles.Underline}`}>37.00</p>
    </Col>
    <Col xs={8}>
    <p className={ `${styles.BoldBlack}`}>ELECTRICAL EQUIPMENT</p>
    </Col>
    </Row>
    {/* TITLES */}
    <Row className={ `mb-2 py-0`} >
    <Col md={1} ></Col>
    <Col className={ `${styles.Overview} py-1`} md={1} >
    <p className="mb-0">ACCT</p>
    </Col>
    <Col className={ `${styles.Overview} py-1`} md={3} >
    <p className="mb-0">Description</p>
    </Col>
    <Col className={`${styles.Overview} text-center py-1`} md={1} >
    <p className="mb-0">#</p>
    </Col>
    <Col className={`${styles.Overview} text-center py-1`} md={1} >
    <p># Unit</p>
    </Col>
    <Col md={1} className={`${styles.Overview} text-center py-1`} >
    <p className="mb-0">Unit</p>
    </Col>
    <Col md={1} className={`${styles.Overview} text-center py-1`} >
    <p className="mb-0">Price</p>
    </Col>
    <Col md={2} className={`${styles.Overview} text-center py-1`} >
    <p className="mb-0">Total</p>
    </Col>
    <Col md={1}></Col>
    </Row>
    {/* Basic Package Rentals */}
    <Row>
    <Col md={1} ></Col>
    <Col md={1}>
    <p className={`${styles.Underline}`}>37.10</p>
    </Col>
    <Col md={7}>
    <p className={`${styles.Underline}`}>Basic Package Rentals</p>
    </Col>
    <Col md={2}>
    <div className={`${styles.Box3} 
    d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{basic_package_rent_elec || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col md={1}></Col>
    <Col md={10} >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Daily Rentals */}
    <Row>
    <Col md={1} ></Col>
    <Col md={1}>
    <p className={`${styles.Underline}`}>37.20</p>
    </Col>
    <Col md={7}>
    <p className={`${styles.Underline}`}>Daily Rentals</p>
    </Col>
    <Col md={2}>
    <div className={`${styles.Box3} 
    d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{daily_rentals_elec || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col md={1}></Col>
    <Col md={10} >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Specialty Rentals */}
    <Row>
    <Col md={1} ></Col>
    <Col md={1}>
    <p className={`${styles.Underline}`}>37.30</p>
    </Col>
    <Col md={7}>
    <p className={`${styles.Underline}`}>Specialty Rentals</p>
    </Col>
    <Col md={2}>
    <div className={`${styles.Box3} 
    d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{specialty_rent_elec || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col md={1}></Col>
    <Col md={10} >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Purchases */}
    <Row>
    <Col md={1} ></Col>
    <Col md={1}>
    <p className={`${styles.Underline}`}>37.40</p>
    </Col>
    <Col md={7}>
    <p className={`${styles.Underline}`}>Purchases</p>
    </Col>
    <Col md={2}>
    <div className={`${styles.Box3} 
    d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{electric_purchases || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col md={1}></Col>
    <Col md={10} >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Generators */}
    <Row>
    <Col md={1} ></Col>
    <Col md={1}>
    <p className={`${styles.Underline}`}>37.50</p>
    </Col>
    <Col md={7}>
    <p className={`${styles.Underline}`}>Generators</p>
    </Col>
    <Col md={2}>
    <div className={`${styles.Box3} 
    d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{generators || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col md={1}></Col>
    <Col md={10} >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Loss & Damage */}
    <Row>
    <Col md={1} ></Col>
    <Col md={1}>
    <p className={`${styles.Underline}`}>37.60</p>
    </Col>
    <Col md={7}>
    <p className={`${styles.Underline}`}>Loss & Damage</p>
    </Col>
    <Col md={2}>
    <div className={`${styles.Box3} 
    d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{loss_damage_elec || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col md={1}></Col>
    <Col md={10} >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Other */}
    <Row>
    <Col md={1} ></Col>
    <Col md={1}>
    <p className={`${styles.Underline}`}>37.70</p>
    </Col>
    <Col md={7}>
    <p className={`${styles.Underline}`}>Other</p>
    </Col>
    <Col md={2}>
    <div className={`${styles.Box3} 
    d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{other_electric || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col md={1}></Col>
    <Col md={10} >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* ELECTRICAL EQUIPMENT Total */}
    <Row className='mt-3 mb-1' >
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}></p>
    <p></p>
    </Col>
    <Col className={ `${styles.Overview} my-0 pt-1`} md={6} >
    <p className={ `${styles.Bold} pb-0 mb-0`}>TOTAL ELECTRICAL EQUIPMENT </p>
    </Col>
    <Col md={1} >
    </Col>
    <Col md={2} >
    <div className={`${styles.Box3} 
    d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline} mb-0`}>{electric_total || 0}</p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col md={1}></Col>
    <Col md={10} >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    </div>
    {/* GRIP EQUIPMENT --------------------------------------- */}
    <div className='mt-4'>
    <Row>
    <Col md={1} ></Col>
    <Col xs={1}>
    <p className={`${styles.Underline}`}>38.00</p>
    </Col>
    <Col xs={10}>
    <p className={ `${styles.BoldBlack}`}>GRIP EQUIPMENT</p>
    </Col>
    </Row>
    {/* TITLES */}
    <Row className={ `mb-2 py-0`} >
    <Col md={1} ></Col>
    <Col className={ `${styles.Overview} py-1`} md={1} >
    <p className="mb-0">ACCT</p>
    </Col>
    <Col className={ `${styles.Overview} py-1`} md={3} >
    <p className="mb-0">Description</p>
    </Col>
    <Col className={`${styles.Overview} text-center py-1`} md={1} >
    <p className="mb-0">#</p>
    </Col>
    <Col className={`${styles.Overview} text-center py-1`} md={1} >
    <p># Unit</p>
    </Col>
    <Col md={1} className={`${styles.Overview} text-center py-1`} >
    <p className="mb-0">Unit</p>
    </Col>
    <Col md={1} className={`${styles.Overview} text-center py-1`} >
    <p className="mb-0">Price</p>
    </Col>
    <Col md={2} className={`${styles.Overview} text-center py-1`} >
    <p className="mb-0">Total</p>
    </Col>
    <Col md={1}></Col>
    </Row>
    {/* Basic Package Rentals */}
    <Row>
    <Col md={1} ></Col>
    <Col md={1}>
    <p className={`${styles.Underline}`}>38.10</p>
    </Col>
    <Col md={7}>
    <p className={`${styles.Underline}`}>Basic Package Rentals</p>
    </Col>
    <Col md={2}>
    <div className={`${styles.Box3} 
    d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{basic_package_rent_grip || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col md={1}></Col>
    <Col md={10} >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Daily Rentals */}
    <Row>
    <Col md={1} ></Col>
    <Col md={1}>
    <p className={`${styles.Underline}`}>38.20</p>
    </Col>
    <Col md={7}>
    <p className={`${styles.Underline}`}>Daily Rentals</p>
    </Col>
    <Col md={2}>
    <div className={`${styles.Box3} 
    d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{daily_rentals_grip || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col md={1}></Col>
    <Col md={10} >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Specialty Rentals */}
    <Row>
    <Col md={1} ></Col>
    <Col md={1}>
    <p className={`${styles.Underline}`}>38.30</p>
    </Col>
    <Col md={7}>
    <p className={`${styles.Underline}`}>Specialty Rentals</p>
    </Col>
    <Col md={2}>
    <div className={`${styles.Box3} 
    d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{specialty_rent_grip || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col md={1}></Col>
    <Col md={10} >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Crane Rentals */}
    <Row>
    <Col md={1} ></Col>
    <Col md={1}>
    <p className={`${styles.Underline}`}>38.40</p>
    </Col>
    <Col md={7}>
    <p className={`${styles.Underline}`}>Crane Rentals</p>
    </Col>
    <Col md={2}>
    <div className={`${styles.Box3} 
    d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{crane_rentals || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col md={1}></Col>
    <Col md={10} >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Scaffolding */}
    <Row>
    <Col md={1} ></Col>
    <Col md={1}>
    <p className={`${styles.Underline}`}>38.50</p>
    </Col>
    <Col md={7}>
    <p className={`${styles.Underline}`}>Scaffolding</p>
    </Col>
    <Col md={2}>
    <div className={`${styles.Box3} 
    d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{scaffolding_grip || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col md={1}></Col>
    <Col md={10} >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Purchases */}
    <Row>
    <Col md={1} ></Col>
    <Col md={1}>
    <p className={`${styles.Underline}`}>38.60</p>
    </Col>
    <Col md={7}>
    <p className={`${styles.Underline}`}>Purchases</p>
    </Col>
    <Col md={2}>
    <div className={`${styles.Box3} 
    d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{grip_purchases || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col md={1}></Col>
    <Col md={10} >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Loss & Damage */}
    <Row>
    <Col md={1} ></Col>
    <Col md={1}>
    <p className={`${styles.Underline}`}>38.70</p>
    </Col>
    <Col md={7}>
    <p className={`${styles.Underline}`}>Loss & Damage</p>
    </Col>
    <Col md={2}>
    <div className={`${styles.Box3} 
    d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{loss_damage_grip || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col md={1}></Col>
    <Col md={10} >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Other */}
    <Row>
    <Col md={1} ></Col>
    <Col md={1}>
    <p className={`${styles.Underline}`}>38.80</p>
    </Col>
    <Col md={7}>
    <p className={`${styles.Underline}`}>Other</p>
    </Col>
    <Col md={2}>
    <div className={`${styles.Box3} 
    d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{other_grip || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col md={1}></Col>
    <Col md={10} >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* GRIP EQUIPMENT Total */}
    <Row className='mt-3 mb-1' >
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}></p>
    <p></p>
    </Col>
    <Col className={ `${styles.Overview} my-0 pt-1`} md={6} >
    <p className={ `${styles.Bold} pb-0 mb-0`}>TOTAL GRIP EQUIPMENT </p>
    </Col>
    <Col md={1} >
    </Col>
    <Col md={2} >
    <div className={`${styles.Box3} 
    d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline} mb-0`}>{grip_total || 0}</p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col md={1}></Col>
    <Col md={10} >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    </div>
    {/* SOUND EQUIPMENT -------------------------------------- */}
    <div className='mt-4'>
    <Row>
    <Col md={1} ></Col>
    <Col xs={1}>
    <p className={`${styles.Underline}`}>39.00</p>
    </Col>
    <Col xs={8}>
    <p className={ `${styles.BoldBlack}`}>SOUND EQUIPMENT</p>
    </Col>
    </Row>
    {/* TITLES */}
    <Row className={ `mb-2 py-0`} >
    <Col md={1} ></Col>
    <Col className={ `${styles.Overview} py-1`} md={1} >
    <p className="mb-0">ACCT</p>
    </Col>
    <Col className={ `${styles.Overview} py-1`} md={3} >
    <p className="mb-0">Description</p>
    </Col>
    <Col className={`${styles.Overview} text-center py-1`} md={1} >
    <p className="mb-0">#</p>
    </Col>
    <Col className={`${styles.Overview} text-center py-1`} md={1} >
    <p># Unit</p>
    </Col>
    <Col md={1} className={`${styles.Overview} text-center py-1`} >
    <p className="mb-0">Unit</p>
    </Col>
    <Col md={1} className={`${styles.Overview} text-center py-1`} >
    <p className="mb-0">Price</p>
    </Col>
    <Col md={2} className={`${styles.Overview} text-center py-1`} >
    <p className="mb-0">Total</p>
    </Col>
    <Col md={1}></Col>
    </Row>
    {/* Basic Package Rentals */}
    <Row>
    <Col md={1} ></Col>
    <Col md={1}>
    <p className={`${styles.Underline}`}>39.10</p>
    </Col>
    <Col md={7}>
    <p className={`${styles.Underline}`}>Basic Package Rentals</p>
    </Col>
    <Col md={2}>
    <div className={`${styles.Box3} 
    d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{basic_package_rent_sound || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col md={1}></Col>
    <Col md={10} >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Daily Rentals */}
    <Row>
    <Col md={1} ></Col>
    <Col md={1}>
    <p className={`${styles.Underline}`}>39.20</p>
    </Col>
    <Col md={7}>
    <p className={`${styles.Underline}`}>Daily Rentals</p>
    </Col>
    <Col md={2}>
    <div className={`${styles.Box3} 
    d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{daily_rentals_sound || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col md={1}></Col>
    <Col md={10} >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Wireless Microphones */}
    <Row>
    <Col md={1} ></Col>
    <Col md={1}>
    <p className={`${styles.Underline}`}>39.30</p>
    </Col>
    <Col md={7}>
    <p className={`${styles.Underline}`}>Wireless Microphones</p>
    </Col>
    <Col md={2}>
    <div className={`${styles.Box3} 
    d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{wireless_mics || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col md={1}></Col>
    <Col md={10} >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Purchases */}
    <Row>
    <Col md={1} ></Col>
    <Col md={1}>
    <p className={`${styles.Underline}`}>39.40</p>
    </Col>
    <Col md={7}>
    <p className={`${styles.Underline}`}>Purchases</p>
    </Col>
    <Col md={2}>
    <div className={`${styles.Box3} 
    d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{sound_purchases || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col md={1}></Col>
    <Col md={10} >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Walkie Talkies */}
    <Row>
    <Col md={1} ></Col>
    <Col md={1}>
    <p className={`${styles.Underline}`}>39.50</p>
    </Col>
    <Col md={7}>
    <p className={`${styles.Underline}`}>Walkie Talkies</p>
    </Col>
    <Col md={2}>
    <div className={`${styles.Box3} 
    d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{walkie_talkies || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col md={1}></Col>
    <Col md={10} >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Other */}
    <Row>
    <Col md={1} ></Col>
    <Col md={1}>
    <p className={`${styles.Underline}`}>39.60</p>
    </Col>
    <Col md={7}>
    <p className={`${styles.Underline}`}>Other</p>
    </Col>
    <Col md={2}>
    <div className={`${styles.Box3} 
    d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{other_sound || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col md={1}></Col>
    <Col md={10} >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* SOUND EQUIPMENT Total */}
    <Row className='mt-3 mb-1' >
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}></p>
    <p></p>
    </Col>
    <Col className={ `${styles.Overview} my-0 pt-1`} md={6} >
    <p className={ `${styles.Bold} pb-0 mb-0`}>TOTAL SOUND EQUIPMENT </p>
    </Col>
    <Col md={1} >
    </Col>
    <Col md={2} >
    <div className={`${styles.Box4} 
    d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline} mb-0`}>{sound_total || 0}</p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col md={1}></Col>
    <Col md={10} >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    </div>
    {/* SECOND UNIT ------------------------------------------ */}
    <div className='mt-4'>
    <Row>
    <Col md={1} ></Col>
    <Col xs={1}>
    <p className={`${styles.Underline}`}>40.00</p>
    </Col>
    <Col xs={8}>
    <p className={ `${styles.BoldBlack}`}>SECOND UNIT</p>
    </Col>
    </Row>
    {/* TITLES */}
    <Row className={ `mb-2 py-0`} >
    <Col md={1} ></Col>
    <Col className={ `${styles.Overview} py-1`} md={1} >
    <p className="mb-0">ACCT</p>
    </Col>
    <Col className={ `${styles.Overview} py-1`} md={3} >
    <p className="mb-0">Description</p>
    </Col>
    <Col className={`${styles.Overview} text-center py-1`} md={1} >
    <p className="mb-0">#</p>
    </Col>
    <Col className={`${styles.Overview} text-center py-1`} md={1} >
    <p># Unit</p>
    </Col>
    <Col md={1} className={`${styles.Overview} text-center py-1`} >
    <p className="mb-0">Unit</p>
    </Col>
    <Col md={1} className={`${styles.Overview} text-center py-1`} >
    <p className="mb-0">Price</p>
    </Col>
    <Col md={2} className={`${styles.Overview} text-center py-1`} >
    <p className="mb-0">Total</p>
    </Col>
    <Col md={1}></Col>
    </Row>
    {/* Crew */}
    <Row>
    <Col md={1} ></Col>
    <Col md={1}>
    <p className={`${styles.Underline}`}>40.10</p>
    </Col>
    <Col md={7}>
    <p className={`${styles.Underline}`}>Crew</p>
    </Col>
    <Col md={2}>
    <div className={`${styles.Box3} 
    d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{crew_2U || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col md={1}></Col>
    <Col md={10} >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Equipment */}
    <Row>
    <Col md={1} ></Col>
    <Col md={1}>
    <p className={`${styles.Underline}`}>40.20</p>
    </Col>
    <Col md={7}>
    <p className={`${styles.Underline}`}>Equipment</p>
    </Col>
    <Col md={2}>
    <div className={`${styles.Box3} 
    d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{equipment_2U || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col md={1}></Col>
    <Col md={10} >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Travel & Living */}
    <Row>
    <Col md={1} ></Col>
    <Col md={1}>
    <p className={`${styles.Underline}`}>40.30</p>
    </Col>
    <Col md={7}>
    <p className={`${styles.Underline}`}>Travel & Living</p>
    </Col>
    <Col md={2}>
    <div className={`${styles.Box3} 
    d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{travliv_2U || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col md={1}></Col>
    <Col md={10} >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Transport */}
    <Row>
    <Col md={1} ></Col>
    <Col md={1}>
    <p className={`${styles.Underline}`}>40.40</p>
    </Col>
    <Col md={7}>
    <p className={`${styles.Underline}`}>Transport</p>
    </Col>
    <Col md={2}>
    <div className={`${styles.Box3} 
    d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{transport_2U || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col md={1}></Col>
    <Col md={10} >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Materials/Supplies */}
    <Row>
    <Col md={1} ></Col>
    <Col md={1}>
    <p className={`${styles.Underline}`}>40.50</p>
    </Col>
    <Col md={7}>
    <p className={`${styles.Underline}`}>Materials/Supplies</p>
    </Col>
    <Col md={2}>
    <div className={`${styles.Box3} 
    d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{mat_sup_2U || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col md={1}></Col>
    <Col md={10} >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Aerial Unit */}
    <Row>
    <Col md={1} ></Col>
    <Col md={1}>
    <p className={`${styles.Underline}`}>40.60</p>
    </Col>
    <Col md={7}>
    <p className={`${styles.Underline}`}>Aerial Unit</p>
    </Col>
    <Col md={2}>
    <div className={`${styles.Box3} 
    d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{aerial_unit || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col md={1}></Col>
    <Col md={10} >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Marine Unit */}
    <Row>
    <Col md={1} ></Col>
    <Col md={1}>
    <p className={`${styles.Underline}`}>40.70</p>
    </Col>
    <Col md={7}>
    <p className={`${styles.Underline}`}>Marine Unit</p>
    </Col>
    <Col md={2}>
    <div className={`${styles.Box3} 
    d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{marine_unit || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col md={1}></Col>
    <Col md={10} >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Other */}
    <Row>
    <Col md={1} ></Col>
    <Col md={1}>
    <p className={`${styles.Underline}`}>40.80</p>
    </Col>
    <Col md={7}>
    <p className={`${styles.Underline}`}>Other</p>
    </Col>
    <Col md={2}>
    <div className={`${styles.Box3} 
    d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{other_2U || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col md={1}></Col>
    <Col md={10} >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Fringes & Taxes */}
    <Row>
    <Col md={1} ></Col>
    <Col md={1}>
    <p className={`${styles.Underline}`}>40.90</p>
    </Col>
    <Col md={7}>
    <p className={`${styles.Underline}`}>Fringes & Taxes</p>
    </Col>
    <Col md={2}>
    <div className={`${styles.Box3} 
    d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{fringes_taxes_2U || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col md={1}></Col>
    <Col md={10} >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* SECOND UNIT Total */}
    <Row className='mt-3 mb-1' >
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}></p>
    <p></p>
    </Col>
    <Col className={ `${styles.Overview} my-0 pt-1`} md={6} >
    <p className={ `${styles.Bold} pb-0 mb-0`}>TOTAL SECOND UNIT</p>
    </Col>
    <Col md={1} >
    </Col>
    <Col md={2} >
    <div className={`${styles.Box3} 
    d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline} mb-0`}>{secondU_total || 0}</p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col md={1}></Col>
    <Col md={10} >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    </div>
    {/* STOCK & LAB ------------------------------------------ */}
    <div className='mt-4'>
    <Row>
    <Col md={1} ></Col>
    <Col xs={1}>
    <p className={`${styles.Underline}`}>41.00</p>
    </Col>
    <Col xs={8}>
    <p className={ `${styles.BoldBlack}`}>PRODUCTION STOCK & LAB</p>
    </Col>
    </Row>
    {/* TITLES */}
    <Row className={ `mb-2 py-0`} >
    <Col md={1} ></Col>
    <Col className={ `${styles.Overview} py-1`} md={1} >
    <p className="mb-0">ACCT</p>
    </Col>
    <Col className={ `${styles.Overview} py-1`} md={3} >
    <p className="mb-0">Description</p>
    </Col>
    <Col className={`${styles.Overview} text-center py-1`} md={1} >
    <p className="mb-0">#</p>
    </Col>
    <Col className={`${styles.Overview} text-center py-1`} md={1} >
    <p># Unit</p>
    </Col>
    <Col md={1} className={`${styles.Overview} text-center py-1`} >
    <p className="mb-0">Unit</p>
    </Col>
    <Col md={1} className={`${styles.Overview} text-center py-1`} >
    <p className="mb-0">Price</p>
    </Col>
    <Col md={2} className={`${styles.Overview} text-center py-1`} >
    <p className="mb-0">Total</p>
    </Col>
    <Col md={1}></Col>
    </Row>
    {/* Film Stock */}
    <Row>
    <Col md={1} ></Col>
    <Col md={1}>
    <p className={`${styles.Underline}`}>41.10</p>
    </Col>
    <Col md={7}>
    <p className={`${styles.Underline}`}>Film Stock</p>
    </Col>
    <Col md={2}>
    <div className={`${styles.Box3} 
    d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{film_stock || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col md={1}></Col>
    <Col md={10} >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Video Stock */}
    <Row>
    <Col md={1} ></Col>
    <Col md={1}>
    <p className={`${styles.Underline}`}>41.20</p>
    </Col>
    <Col md={7}>
    <p className={`${styles.Underline}`}>Video Stock</p>
    </Col>
    <Col md={2}>
    <div className={`${styles.Box3} 
    d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{video_stock || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col md={1}></Col>
    <Col md={10} >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Digital Stock */}
    <Row>
    <Col md={1} ></Col>
    <Col md={1}>
    <p className={`${styles.Underline}`}>41.30</p>
    </Col>
    <Col md={7}>
    <p className={`${styles.Underline}`}>Digital Stock</p>
    </Col>
    <Col md={2}>
    <div className={`${styles.Box3} 
    d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{digital_stock || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col md={1}></Col>
    <Col md={10} >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Transfer Stock */}
    <Row>
    <Col md={1} ></Col>
    <Col md={1}>
    <p className={`${styles.Underline}`}>41.40</p>
    </Col>
    <Col md={7}>
    <p className={`${styles.Underline}`}>Transfer Stock</p>
    </Col>
    <Col md={2}>
    <div className={`${styles.Box3} 
    d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{transfer_stock || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col md={1}></Col>
    <Col md={10} >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Hard Drives */}
    <Row>
    <Col md={1} ></Col>
    <Col md={1}>
    <p className={`${styles.Underline}`}>41.50</p>
    </Col>
    <Col md={7}>
    <p className={`${styles.Underline}`}>Hard Drives</p>
    </Col>
    <Col md={2}>
    <div className={`${styles.Box3} 
    d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{hard_drives || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col md={1}></Col>
    <Col md={10} >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Dailies */}
    <Row>
    <Col md={1} ></Col>
    <Col md={1}>
    <p className={`${styles.Underline}`}>41.60</p>
    </Col>
    <Col md={7}>
    <p className={`${styles.Underline}`}>Dailies</p>
    </Col>
    <Col md={2}>
    <div className={`${styles.Box3} 
    d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{dalies || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col md={1}></Col>
    <Col md={10} >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Telecine */}
    <Row>
    <Col md={1} ></Col>
    <Col md={1}>
    <p className={`${styles.Underline}`}>41.70</p>
    </Col>
    <Col md={7}>
    <p className={`${styles.Underline}`}>Telecine</p>
    </Col>
    <Col md={2}>
    <div className={`${styles.Box3} 
    d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{telecine || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col md={1}></Col>
    <Col md={10} >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Audio Stock */}
    <Row>
    <Col md={1} ></Col>
    <Col md={1}>
    <p className={`${styles.Underline}`}>41.80</p>
    </Col>
    <Col md={7}>
    <p className={`${styles.Underline}`}>Audio Stock</p>
    </Col>
    <Col md={2}>
    <div className={`${styles.Box3} 
    d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{audio_stock || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col md={1}></Col>
    <Col md={10} >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Magnetic Transfer */}
    <Row>
    <Col md={1} ></Col>
    <Col md={1}>
    <p className={`${styles.Underline}`}>41.90</p>
    </Col>
    <Col md={7}>
    <p className={`${styles.Underline}`}>Magnetic Transfer</p>
    </Col>
    <Col md={2}>
    <div className={`${styles.Box3} 
    d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{magnetic_transfer || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col md={1}></Col>
    <Col md={10} >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Stills */}
    <Row>
    <Col md={1} ></Col>
    <Col md={1}>
    <p className={`${styles.Underline}`}>41.91</p>
    </Col>
    <Col md={7}>
    <p className={`${styles.Underline}`}>Stills</p>
    </Col>
    <Col md={2}>
    <div className={`${styles.Box3} 
    d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{stills || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col md={1}></Col>
    <Col md={10} >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Loss & Damage */}
    <Row>
    <Col md={1} ></Col>
    <Col md={1}>
    <p className={`${styles.Underline}`}>41.92</p>
    </Col>
    <Col md={7}>
    <p className={`${styles.Underline}`}>Loss & Damage</p>
    </Col>
    <Col md={2}>
    <div className={`${styles.Box3} 
    d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{loss_dam_lab || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col md={1}></Col>
    <Col md={10} >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Other */}
    <Row>
    <Col md={1} ></Col>
    <Col md={1}>
    <p className={`${styles.Underline}`}>41.93</p>
    </Col>
    <Col md={7}>
    <p className={`${styles.Underline}`}>Other</p>
    </Col>
    <Col md={2}>
    <div className={`${styles.Box3} 
    d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{other_lab || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col md={1}></Col>
    <Col md={10} >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* PRODUCTION STOCK & LAB Total */}
    <Row className='mt-3 mb-1' >
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}></p>
    <p></p>
    </Col>
    <Col className={ `${styles.Overview} my-0 pt-1`} md={6} >
    <p className={ `${styles.Bold} pb-0 mb-0`}>TOTAL PRODUCTION STOCK & LAB </p>
    </Col>
    <Col md={1} >
    </Col>
    <Col md={2} >
    <div className={`${styles.Box3} 
    d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline} mb-0`}>{stockLab_total || 0}</p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col md={1}></Col>
    <Col md={10} >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    </div>
    {/* TOTAL - BELOW THE LINE "B" PRODUCTION - COSTS */}
    <div className="mt-5 pl-3">
    <Row >
    <Col md={1} ></Col>
    <Col className={ `${styles.Overview} my-0 pt-1`} md={8} >
    <p className={ `${styles.Bold} pb-0 mb-0`}>TOTAL - "B" PRODUCTION - COSTS </p>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box3} 
       d-flex align-items-center justify-content-center`}>
    <p className={`${styles.BoldBlack}`}>{below_the_lineB_costs_total || 0}</p>
    </div>
    </Col>
    </Row>
    </div>
    {/* TOTAL - BELOW THE LINE "B" PRODUCTION LABOUR AND COSTS */}
    <div className="mt-3 pl-3">
    <Row >
    <Col md={1} ></Col>
    <Col className={ `${styles.Overview} my-0 pt-1`} md={8} >
    <p className={ `${styles.Bold} pb-0 mb-0`}>TOTAL - "B" LABOUR AND COSTS </p>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box3} 
     d-flex align-items-center justify-content-center`}>
    <p className={`${styles.BoldBlack} `}>{b_labour_and_costs_total || 0}</p>
    </div>
    </Col>
    </Row>
    </div>
    </div>
    {/* "C" POST PRODUCTION  ----------------- */}
    {/* Post button */}
    {/* <Row className="mt-1 ml-2 px-3" >
        <Col xs={12}  className="text-center" >
        <Button
          className={`py-0 mt-1 ${btnStyles.Blue} ${btnStyles.Button}`}
          onClick={() => setShowPost(showPost => !showPost)} >Show Post
        </Button>
        </Col>
    </Row> */}
    {/* Post */}
    {/* {!showPost ? (
      ""
    ) : (
      <BudgetPost
      setShow={setShowPost}
      budget={budget13}
      post_productionC_total={post_productionC_total}
      belowB_andC_total={belowB_andC_total}
      above_belowABC_total={post_productionC_total}
      /> 
    ) } */}
    <BudgetPost
      // setShow={setShowPost}
      budget={budget13}
      post_productionC_total={post_productionC_total}
      belowB_andC_total={belowB_andC_total}
      above_belowABC_total={post_productionC_total}
      /> 
    {/* "D" OTHER --------------------------------------------- */}
    <div className='px-3'>
    <Row >
    <Col md={1} ></Col>
    <Col md={10} className={ `${styles.OverviewBlue} mt-5 mb-3 py-2
     d-flex align-items-center justify-content-center`}>
    <h5 className={ `${styles.BoldBlack}`}>"D" OTHER</h5>
    </Col>
    </Row>
    {/* PUBLICITY --------------------------------------------- */}
    <div className='mt-4'>
    <Row>
    <Col md={1} ></Col>
    <Col xs={1}>
    <p className={`${styles.Underline}`}>49.00</p>
    </Col>
    <Col xs={8}>
    <p className={ `${styles.BoldBlack}`}>PUBLICITY</p>
    </Col>
    </Row>
    {/* TITLES */}
    <Row className={ `mb-2 py-0`} >
    <Col md={1} ></Col>
    <Col className={ `${styles.Overview} py-1`} md={1} >
    <p className="mb-0">ACCT</p>
    </Col>
    <Col className={ `${styles.Overview} py-1`} md={3} >
    <p className="mb-0">Description</p>
    </Col>
    <Col className={`${styles.Overview} text-center py-1`} md={1} >
    <p className="mb-0">#</p>
    </Col>
    <Col className={`${styles.Overview} text-center py-1`} md={1} >
    <p># Unit</p>
    </Col>
    <Col md={1} className={`${styles.Overview} text-center py-1`} >
    <p className="mb-0">Unit</p>
    </Col>
    <Col md={1} className={`${styles.Overview} text-center py-1`} >
    <p className="mb-0">Price</p>
    </Col>
    <Col md={2} className={`${styles.Overview} text-center py-1`} >
    <p className="mb-0">Total</p>
    </Col>
    <Col md={1}></Col>
    </Row>
    {/* Tests/Theatre Rental */}
    <Row>
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>49.10</p>
    </Col>
    <Col md={7} >
    <p className={`${styles.Underline}`}>Tests/Theatre Rental</p>
    </Col>
    <Col md={2}>
    <div className={`${styles.Box3} 
      d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{tests_theater_ren || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col md={1}></Col>
    <Col md={10} >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Tests - Other */}
    <Row>
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>49.20</p>
    </Col>
    <Col md={7} >
    <p className={`${styles.Underline}`}>Tests miscellaneous</p>
    </Col>
    <Col md={2}>
    <div className={`${styles.Box3} 
      d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{tests_other || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col md={1}></Col>
    <Col md={10} >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Unit Publicist */}
    <Row>
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>49.30</p>
    </Col>
    <Col md={7} >
    <p className={`${styles.Underline}`}>Unit Publicist</p>
    </Col>
    <Col md={2}>
    <div className={`${styles.Box3} 
      d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{unit_publicist || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */} 
    <Row>
    <Col md={1}></Col>
    <Col md={10} >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Publicity/Press Expenses */}
    <Row>
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>49.40</p>
    </Col>
    <Col md={7} >
    <p className={`${styles.Underline}`}>Publicity/Press Expenses</p>
    </Col>
    <Col md={2}>
    <div className={`${styles.Box3} 
      d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{pub_press_ex || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col md={1}></Col>
    <Col md={10} >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Photography */}
    <Row>
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>49.50</p>
    </Col>
    <Col md={7} >
    <p className={`${styles.Underline}`}>Photography</p>
    </Col>
    <Col md={2}>
    <div className={`${styles.Box3} 
     d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{photography || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col md={1}></Col>
    <Col md={10} >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Electronic Press Kit - EPK */}
    <Row>
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>49.60</p>
    </Col>
    <Col md={7} >
    <p className={`${styles.Underline}`}>Electronic Press Kit - EPK</p>
    </Col>
    <Col md={2}>
    <div className={`${styles.Box3} 
      d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{epk || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col md={1}></Col>
    <Col md={10} >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Advertising/Promotion */}
    <Row>
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>49.70</p>
    </Col>
    <Col md={7} >
    <p className={`${styles.Underline}`}>Advertising/Promotion</p>
    </Col>
    <Col md={2}>
    <div className={`${styles.Box3} 
      d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{promotion || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col md={1}></Col>
    <Col md={10} >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Public Relations */}
    <Row>
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>49.80</p>
    </Col>
    <Col md={7} >
    <p className={`${styles.Underline}`}>Public Relations</p>
    </Col>
    <Col md={2}>
    <div className={`${styles.Box3} 
      d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{pr || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col md={1}></Col>
    <Col md={10} >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Previews */}
    <Row>
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>49.90</p>
    </Col>
    <Col md={7} >
    <p className={`${styles.Underline}`}>Previews</p>
    </Col>
    <Col md={2}>
    <div className={`${styles.Box3} 
      d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{previews || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col md={1}></Col>
    <Col md={10} >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Website */}
    <Row>
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>49.91</p>
    </Col>
    <Col md={7} >
    <p className={`${styles.Underline}`}>Website</p>
    </Col>
    <Col md={2}>
    <div className={`${styles.Box3} 
      d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{website || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col md={1}></Col>
    <Col md={10} >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Fringes & Taxes */}
    <Row>
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>49.92</p>
    </Col>
    <Col md={7} >
    <p className={`${styles.Underline}`}>Fringes & Taxes</p>
    </Col>
    <Col md={2}>
    <div className={`${styles.Box3} 
      d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{firnges_pub || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col md={1}></Col>
    <Col md={10} >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Other */}
    <Row>
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>49.93</p>
    </Col>
    <Col md={7} >
    <p className={`${styles.Underline}`}>Other</p>
    </Col>
    <Col md={2}>
    <div className={`${styles.Box3} 
      d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{other_pub || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col md={1}></Col>
    <Col md={10} >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* PUBLICITY Total */}
    <Row className='mt-3 mb-1' >
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}></p>
    <p></p>
    </Col>
    <Col className={ `${styles.Overview} my-0 pt-1`} md={6} >
    <p className={ `${styles.Bold} pb-0 mb-0`}>TOTAL PUBLICITY</p>
    </Col>
    <Col md={1} >
    </Col>
    <Col md={2} >
    <div className={`${styles.Box3} 
      d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline} mb-0`}>{pub_total || 0}</p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col md={1}></Col>
    <Col md={10} >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    </div>
    {/* INSURANCE --------------------------------------------- */}
    <div className='mt-4'>
    <Row>
    <Col md={1} ></Col>
    <Col xs={1}>
    <p className={`${styles.Underline}`}>50.00</p>
    </Col>
    <Col xs={8}>
    <p className={ `${styles.BoldBlack}`}>INSURANCE</p>
    </Col>
    </Row>
    {/* TITLES */}
    <Row className={ `mb-2 py-0`} >
    <Col md={1} ></Col>
    <Col className={ `${styles.Overview} py-1`} md={1} >
    <p className="mb-0">ACCT</p>
    </Col>
    <Col className={ `${styles.Overview} py-1`} md={3} >
    <p className="mb-0">Description</p>
    </Col>
    <Col className={`${styles.Overview} text-center py-1`} md={1} >
    <p className="mb-0">#</p>
    </Col>
    <Col className={`${styles.Overview} text-center py-1`} md={1} >
    <p># Unit</p>
    </Col>
    <Col md={1} className={`${styles.Overview} text-center py-1`} >
    <p className="mb-0">Unit</p>
    </Col>
    <Col md={1} className={`${styles.Overview} text-center py-1`} >
    <p className="mb-0">Price</p>
    </Col>
    <Col md={2} className={`${styles.Overview} text-center py-1`} >
    <p className="mb-0">Total</p>
    </Col>
    <Col md={1}></Col>
    </Row>
    {/* Production Package */}
    <Row>
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>50.10</p>
    </Col>
    <Col md={7} >
    <p className={`${styles.Underline}`}>Production Package</p>
    </Col>
    <Col md={2}>
    <div className={`${styles.Box3} 
      d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{pro_package || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col md={1}></Col>
    <Col md={10} >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* General/Public Liability */}
    <Row>
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>50.20</p>
    </Col>
    <Col md={7} >
    <p className={`${styles.Underline}`}>General/Public Liability</p>
    </Col>
    <Col md={2}>
    <div className={`${styles.Box3} 
      d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{gen_lia || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col md={1}></Col>
    <Col md={10} >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* E & O */}
    <Row>
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>50.30</p>
    </Col>
    <Col md={7} >
    <p className={`${styles.Underline}`}>E & O</p>
    </Col>
    <Col md={2}>
    <div className={`${styles.Box3} 
      d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{eando || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col md={1}></Col>
    <Col md={10} >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Umbrella */}
    <Row>
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>50.40</p>
    </Col>
    <Col md={7} >
    <p className={`${styles.Underline}`}>Umbrella</p>
    </Col>
    <Col md={2}>
    <div className={`${styles.Box3} 
      d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{umbrella || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col md={1}></Col>
    <Col md={10} >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Union Insurance/Workers Comp */}
    <Row>
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>50.50</p>
    </Col>
    <Col md={7} >
    <p className={`${styles.Underline}`}>Union Insurance/Workers Comp</p>
    </Col>
    <Col md={2}>
    <div className={`${styles.Box3} 
      d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{union_insurance || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col md={1}></Col>
    <Col md={10} >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Equipment/Specialty/Other Insurance */}
    <Row>
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>50.60</p>
    </Col>
    <Col md={7} >
    <p className={`${styles.Underline}`}>Equipment/Specialty/Other Insurance</p>
    </Col>
    <Col md={2}>
    <div className={`${styles.Box3} 
      d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{other_in || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col md={1}></Col>
    <Col md={10} >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* INSURANCE Total */}
    <Row className='mt-3 mb-1' >
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}></p>
    <p></p>
    </Col>
    <Col className={ `${styles.Overview} my-0 pt-1`} md={6} >
    <p className={ `${styles.Bold} pb-0 mb-0`}>TOTAL INSURANCE</p>
    </Col>
    <Col md={1} >
    </Col>
    <Col md={2} >
    <div className={`${styles.Box3} 
      d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline} mb-0`}>{insur_total || 0}</p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col md={1}></Col>
    <Col md={10} >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    </div>
    {/* GENERAL EXPENSES -------------------------------------- */}
    <div className='mt-4'>
    <Row>
    <Col md={1} ></Col>
    <Col xs={1}>
    <p className={`${styles.Underline}`}>51.00</p>
    </Col>
    <Col xs={8}>
    <p className={ `${styles.BoldBlack}`}>GENERAL EXPENSES</p>
    </Col>
    </Row>
    {/* TITLES */}
    <Row className={ `mb-2 py-0`} >
    <Col md={1} ></Col>
    <Col className={ `${styles.Overview} py-1`} md={1} >
    <p className="mb-0">ACCT</p>
    </Col>
    <Col className={ `${styles.Overview} py-1`} md={3} >
    <p className="mb-0">Description</p>
    </Col>
    <Col className={`${styles.Overview} text-center py-1`} md={1} >
    <p className="mb-0">#</p>
    </Col>
    <Col className={`${styles.Overview} text-center py-1`} md={1} >
    <p># Unit</p>
    </Col>
    <Col md={1} className={`${styles.Overview} text-center py-1`} >
    <p className="mb-0">Unit</p>
    </Col>
    <Col md={1} className={`${styles.Overview} text-center py-1`} >
    <p className="mb-0">Price</p>
    </Col>
    <Col md={2} className={`${styles.Overview} text-center py-1`} >
    <p className="mb-0">Total</p>
    </Col>
    <Col md={1}></Col>
    </Row>
    {/* Legal */}
    <Row>
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>51.10</p>
    </Col>
    <Col md={7} >
    <p className={`${styles.Underline}`}>Legal</p>
    </Col>
    <Col md={2}>
    <div className={`${styles.Box3} 
      d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{legal || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col md={1}></Col>
    <Col md={10} >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Medical */}
    <Row>
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>51.20</p>
    </Col>
    <Col md={7} >
    <p className={`${styles.Underline}`}>Medical</p>
    </Col>
    <Col md={2}>
    <div className={`${styles.Box3} 
      d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{medical || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col md={1}></Col>
    <Col md={10} >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Licences */}
    <Row>
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>51.30</p>
    </Col>
    <Col md={7} >
    <p className={`${styles.Underline}`}>Licences</p>
    </Col>
    <Col md={2}>
    <div className={`${styles.Box3} 
      d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{licences || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col md={1}></Col>
    <Col md={10} >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Payroll */}
    <Row>
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>51.40</p>
    </Col>
    <Col md={7} >
    <p className={`${styles.Underline}`}>Payroll</p>
    </Col>
    <Col md={2}>
    <div className={`${styles.Box3} 
      d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{payroll || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col md={1}></Col>
    <Col md={10} >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Bank Charges */}
    <Row>
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>51.50</p>
    </Col>
    <Col md={7} >
    <p className={`${styles.Underline}`}>Bank Charges</p>
    </Col>
    <Col md={2}>
    <div className={`${styles.Box3} 
      d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{bank_charges || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col md={1}></Col>
    <Col md={10} >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Audit/Other */}
    <Row>
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>51.60</p>
    </Col>
    <Col md={7} >
    <p className={`${styles.Underline}`}>Audit/Other</p>
    </Col>
    <Col md={2}>
    <div className={`${styles.Box3} 
      d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{audit || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col md={1}></Col>
    <Col md={10} >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* GENERAL EXPENSES Total */}
    <Row className='mt-3 mb-1' >
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}></p>
    <p></p>
    </Col>
    <Col className={ `${styles.Overview} my-0 pt-1`} md={6} >
    <p className={ `${styles.Bold} pb-0 mb-0`}>TOTAL GENERAL EXPENSES</p>
    </Col>
    <Col md={1} >
    </Col>
    <Col md={2} >
    <div className={`${styles.Box3} 
      d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline} mb-0`}>{genEx_total || 0}</p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col md={1}></Col>
    <Col md={10} >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    </div>
    {/* INDIRECT COSTS ---------------------------------------- */}
    <div className='mt-4'>
    <Row>
    <Col md={1} ></Col>
    <Col xs={1}>
    <p className={`${styles.Underline}`}>52.00</p>
    </Col>
    <Col xs={8}>
    <p className={ `${styles.BoldBlack}`}>INDIRECT COSTS</p>
    </Col>
    </Row>
    {/* TITLES */}
    <Row className={ `mb-2 py-0`} >
    <Col md={1} ></Col>
    <Col className={ `${styles.Overview} py-1`} md={1} >
    <p className="mb-0">ACCT</p>
    </Col>
    <Col className={ `${styles.Overview} py-1`} md={3} >
    <p className="mb-0">Description</p>
    </Col>
    <Col className={`${styles.Overview} text-center py-1`} md={1} >
    <p className="mb-0">#</p>
    </Col>
    <Col className={`${styles.Overview} text-center py-1`} md={1} >
    <p># Unit</p>
    </Col>
    <Col md={1} className={`${styles.Overview} text-center py-1`} >
    <p className="mb-0">Unit</p>
    </Col>
    <Col md={1} className={`${styles.Overview} text-center py-1`} >
    <p className="mb-0">Price</p>
    </Col>
    <Col md={2} className={`${styles.Overview} text-center py-1`} >
    <p className="mb-0">Total</p>
    </Col>
    <Col md={1}></Col>
    </Row>
    {/* Corporate Overhead */}
    <Row>
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>52.10</p>
    </Col>
    <Col md={7} >
    <p className={`${styles.Underline}`}>Corporate Overhead</p>
    </Col>
    <Col md={2}>
    <div className={`${styles.Box3} 
      d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{corporate_overhead || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col md={1}></Col>
    <Col md={10} >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Interim Financing */}
    <Row>
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>52.20</p>
    </Col>
    <Col md={7} >
    <p className={`${styles.Underline}`}>Interim Financing</p>
    </Col>
    <Col md={2}>
    <div className={`${styles.Box3} 
      d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{interim_financing || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col md={1}></Col>
    <Col md={10} >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Fiscal Sponsor Fee/Other */}
    <Row>
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>52.30</p>
    </Col>
    <Col md={7} >
    <p className={`${styles.Underline}`}>Fiscal Sponsor Fee/Other</p>
    </Col>
    <Col md={2}>
    <div className={`${styles.Box3} 
      d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{fiscal_sponsor_fee || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col md={1}></Col>
    <Col md={10} >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* INDIRECT COSTS Total */}
    <Row className='mt-3 mb-1' >
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}></p>
    <p></p>
    </Col>
    <Col className={ `${styles.Overview} my-0 pt-1`} md={6} >
    <p className={ `${styles.Bold} pb-0 mb-0`}>TOTAL INDIRECT COSTS</p>
    </Col>
    <Col md={1} >
    </Col>
    <Col md={2} >
    <div className={`${styles.Box3} 
      d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline} mb-0`}>{indirCo_total || 0}</p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col md={1}></Col>
    <Col md={10} >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    </div>
    {/* TOTAL - OTHER "D" */}
    <div className="mt-5 pl-3">
    <Row >
    <Col md={1} ></Col>
    <Col className={ `${styles.Overview} my-0 pt-1`} md={8} >
    <p className={ `${styles.Bold} pb-0 mb-0`}>TOTAL - OTHER "D" </p>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box3} 
     d-flex align-items-center justify-content-center`}>
    <p className={`${styles.BoldBlack}`}>{otherD_total || 0}</p>
    </div>
    </Col>
    </Row>
    </div>
    </div>
    {/* TOTAL - A, B, C and D */}
    <div className="mt-3 px-3">
    <Row className="pl-3" >
    <Col md={1} ></Col>
    <Col className={ `${styles.Overview} my-0 pt-1`} md={8} >
    <p className={ `${styles.Bold} pb-0 mb-0`}>TOTAL - "A", "B", "C" and "D" </p>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box3} 
    d-flex align-items-center justify-content-center`}>
    <p className={`${styles.BoldBlack}`}>{above_belowABCandD_total || 0}</p>
    </div>
    </Col>
    </Row>
    </div>
    {/* CONTINGENCY/BOND ------------------------------------------- */}
    <div className='px-3 mt-4'>
    {/* Contingency */}
    <Row>
    <Col md={1}></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}></p>
    </Col>
    <Col md={7} >
    <p className={`${styles.Underline}`}>Contingency</p>
    </Col>
    <Col md={2}>
    <div className={`${styles.Box3} 
      d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{contingency || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col md={1}></Col>
    <Col md={10} >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Completion Bond */}
    <Row>
    <Col md={1}></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}></p>
    </Col>
    <Col md={7} >
    <p className={`${styles.Underline}`}>Completion Bond</p>
    </Col>
    <Col md={2}>
    <div className={`${styles.Box3} 
      d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{completion_bond || 0} </p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col md={1}></Col>
    <Col md={10} >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    </div>
    {/* TOTAL - GRAND */}
    <div className='mt-5 px-3 pb-3'>
    <Row className='pl-3 mb-3' >
    <Col md={1} ></Col>
    <Col className={ `${styles.Overview} my-0 pt-1`} md={8} >
    <p className={ `${styles.Bold} pb-0 mb-0`}>TOTAL - GRAND </p>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box3} 
     d-flex align-items-center justify-content-center`}>
    <p className={`${styles.BoldBlack} mt-3 mb-0`}>{grand_total || 0}</p>
    </div>
    </Col>
    </Row>
    </div>
    </div>
    </div>
    </div>
  )
}

export default Budget