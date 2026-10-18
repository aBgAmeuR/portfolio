// Icônes des logiciels : selfh.st/icons (CC BY 4.0), TinyAuth depuis homarr-labs/dashboard-icons.

export type Guest = {
  id: number;
  name: string;
  role: string;
  apps?: string;
  logo: string;
  tall?: boolean;
  // Ressources déclarées dans terraform/terraform.tfvars du dépôt homelab
  cores: number;
  memory: number; // Mo
  disk: number; // Go
};

export const guests: Guest[] = [
  { id: 111, name: "monitoring", role: "supervision", apps: "Grafana, Prometheus, Loki", logo: "grafana", cores: 2, memory: 4096, disk: 64 },
  { id: 112, name: "garage", role: "stockage objet S3", logo: "garage", cores: 1, memory: 512, disk: 32 },
  { id: 113, name: "caddy", role: "reverse proxy", logo: "caddy", cores: 1, memory: 256, disk: 4 },
  { id: 114, name: "auth", role: "identité", apps: "TinyAuth, lldap", logo: "tinyauth", cores: 1, memory: 512, disk: 8 },
  { id: 115, name: "docker", role: "applis", apps: "Filestash, AFFiNE, Harmony", logo: "docker", cores: 2, memory: 4096, disk: 32 },
  { id: 116, name: "dns", role: "DNS et DHCP", apps: "Blocky, dnsmasq", logo: "blocky", cores: 1, memory: 512, disk: 8 },
  { id: 118, name: "vpn", role: "accès distant", apps: "WireGuard", logo: "wireguard", cores: 1, memory: 256, disk: 4 },
];

export const repoUrl = "https://github.com/aBgAmeuR/homelab";
