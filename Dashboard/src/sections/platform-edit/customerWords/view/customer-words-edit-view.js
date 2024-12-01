// @mui
import Container from '@mui/material/Container';
// routes
import { paths } from 'src/routes/paths';
// api
import { useGetCustomerWords } from 'src/api/blog';
// components
import { useSettingsContext } from 'src/components/settings';
import CustomBreadcrumbs from 'src/components/custom-breadcrumbs';
import CustomerWordsNewEditForm from '../customer-words-new-edit-form';
//


// ----------------------------------------------------------------------

export default function CustomerWordsEditView() {
  const settings = useSettingsContext();

  const { customerWords: currentCustomerWords } = useGetCustomerWords();

  return (
    <Container maxWidth={settings.themeStretch ? false : 'lg'}>
      <CustomBreadcrumbs
        heading="Edit Customer Words Section"
        links={[
          {
            name: 'Dashboard',
            href: paths.dashboard.root,
          },
          {
            name: 'customer words',
            href: paths.dashboard.service.root,
          },
        ]}
        sx={{
          mb: { xs: 3, md: 5 },
        }}
      />
      {currentCustomerWords && <CustomerWordsNewEditForm customerWords={currentCustomerWords} />}
    </Container>
  );
}
