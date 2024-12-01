import { useMemo } from 'react';
// routes
import { paths } from 'src/routes/paths';
// components
import SvgColor from 'src/components/svg-color';
import Iconify from 'src/components/iconify/iconify';
import { _orders } from 'src/_mock/_order';
import { _mockTakeaways } from 'src/_mock/mockTakeaways';

// ----------------------------------------------------------------------

const icon = (name) => (
  <SvgColor src={`/assets/icons/navbar/${name}.svg`} sx={{ width: 1, height: 1 }} />
);

const homeIcon = (name) => (
  <SvgColor src={`/assets/icons/home/${name}.svg`} sx={{ width: 19, height: 19 }} />
);

const HeaderIcon = (name) => (
  <SvgColor src={`/assets/icons/navbar/${name}.svg`} sx={{ width: 19, height: 19 }}  />
);

export const ICONS = {
  job: icon('ic_job'),
  blog: icon('ic_blog'),
  chat: icon('ic_chat'),
  mail: icon('ic_mail'),
  user: icon('ic_user'),
  file: icon('ic_file'),
  lock: icon('ic_lock'),
  tour: icon('ic_tour'),
  order: icon('ic_order'),
  label: icon('ic_label'),
  blank: icon('ic_blank'),
  kanban: icon('ic_kanban'),
  folder: icon('ic_folder'),
  banking: icon('ic_banking'),
  booking: icon('ic_booking'),
  invoice: icon('ic_invoice'),
  product: icon('ic_product'),
  calendar: icon('ic_calendar'),
  disabled: icon('ic_disabled'),
  external: icon('ic_external'),
  menuItem: icon('ic_menu_item'),
  sales: icon('ic_sales'),
  person: icon('ic_person'),
  dashboard: icon('ic_home'),
  settings: icon('ic_settings'),
  support: icon('ic_support'),
  searchIcon: homeIcon('ic_search'),
  mic: homeIcon('ic_mic'),
  cloud: homeIcon('ic_cloud'),
  vote: homeIcon('ic_vote'),
  reportFile: homeIcon('ic_file'),
  comment: homeIcon('ic_comment'),
  crown: HeaderIcon('ic_crown'),
  notification: HeaderIcon('ic_notification'),
};

// ----------------------------------------------------------------------

export function useNavData() {
  const data = useMemo(
    () => [
      {
        items: [
          {
            title: 'Home',
            path: paths.dashboard.root,
            icon: ICONS.dashboard,
          },
        ]
      },
      // MANAGEMENT
      // ----------------------------------------------------------------------
      {
        subheader: 'Website Management',
        items: [
          {
            title: 'WebSite',
            children: [
              {
                title: 'Header',
                path: paths.dashboard.edit.header,
                icon: ICONS.calendar,
              },
              {
                title: 'Home Page',
                icon: ICONS.banking,
                children: [
              {
                title: 'Hero Section',
                path: paths.dashboard.edit.hero,
                icon: ICONS.sales,
              },
              {
                title: 'Trusted Section',
                path: paths.dashboard.edit.trusted,
                icon: ICONS.sales,
              },
              {
                title: 'About Section',
                path: paths.dashboard.edit.about,
                icon: ICONS.sales,
              },
              {
                title: 'Avenues Section',
                path: paths.dashboard.edit.avenues,
                icon: ICONS.sales,
              },
              {
                title: 'Modular Section',
                path: paths.dashboard.edit.modular,
                icon: ICONS.sales,

              },
              {
                title: 'Advantage Section',
                path: paths.dashboard.edit.advantage,
                icon: ICONS.sales,

              },
              {
                title: 'Customer Words Section',
                path: paths.dashboard.edit.customerWords,
                icon: ICONS.sales,

              },
              {
                title: 'Logistics Solutions Section',
                path: paths.dashboard.edit.logisticsSolutions,
                icon: ICONS.sales,

              },
              {
                title: 'Latest Insights Section',
                path: paths.dashboard.edit.latestInsights,
                icon: ICONS.sales,

              },
              {
                title: 'Challenges Section',
                path: paths.dashboard.edit.challenges,
                icon: ICONS.sales,

              },
            ]
              },
              {
                title: 'Platform Page',
                icon: ICONS.banking,
                children: [
              {
                title: 'Hero Section',
                path: paths.dashboard.edit.platform.hero,
                icon: ICONS.sales,
              },
              {
                title: 'About Section',
                path: paths.dashboard.edit.platform.about,
                icon: ICONS.sales,
              },
              {title: 'Section Three',
              path: paths.dashboard.edit.platform.three,
              icon: ICONS.sales
              }
            ]
              },

              {
                title: 'Footer Section',
                path: paths.dashboard.edit.footer,
                icon: ICONS.sales,
              },
            ],
            path: '',
            icon: ICONS.blog,
          },
        ],
      },

      // MANAGEMENT
      // ----------------------------------------------------------------------
      {
        subheader: 'Dashboard Management',
        items: [
          {
            title: 'Admin',
            path: paths.dashboard.group.root,
            icon: ICONS.crown,
            children: [
              { title: 'Profile', path: paths.dashboard.group.root, icon: ICONS.user },
              { title: 'Sittings', path: paths.dashboard.group.five, icon: ICONS.settings },
            ],
          },
        ],
      },
    ],
    []
  );

  return data;
}

export function useNavSettings() {
  const data = useMemo(
    () => [
      {
        subheader: '',
        items: [
          {
            title: 'Account settings',
            path: paths.dashboard.group.five,
            icon: ICONS.settings,
          },
          // { title: 'Support', path: paths.dashboard.seven, icon: ICONS.support },
        ],
      },
    ],
    []
  );

  return data;
}


export const useHomeData = () => {
  const data = useMemo(() => [
    {
      searchIcon: ICONS.searchIcon,
      mic: ICONS.mic,
      file: ICONS.reportFile,
      cloud: ICONS.cloud,
      comment: ICONS.comment,
      vote: ICONS.vote,
    },
  ], []);

  return data
} 


export const useHeaderData = () => {
  const data = useMemo(() => [
    {
      crown: ICONS.crown,
      notification: ICONS.notification,
    },
  ], []);

  return data
}