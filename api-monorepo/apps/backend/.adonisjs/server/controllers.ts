export const controllers = {
  AccessToken: () => import('#controllers/access_token_controller'),
  NewAccount: () => import('#controllers/new_account_controller'),
  Profile: () => import('#controllers/profile_controller'),
}
